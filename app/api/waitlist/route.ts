import { createClient } from "@supabase/supabase-js";
import { NextResponse } from "next/server";

function getSupabaseConfig() {
  const url = (process.env.NEXT_PUBLIC_SUPABASE_URL ?? "")
    .trim()
    .replace(/\/rest\/v1\/?$/, "");
  const key = (process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? "").trim();

  return { url, key };
}

export async function POST(request: Request) {
  let email: string;

  try {
    const body = (await request.json()) as { email?: string };
    email = body.email?.trim().toLowerCase() ?? "";
  } catch {
    return NextResponse.json(
      { ok: false, message: "Invalid request." },
      { status: 400 },
    );
  }

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json(
      { ok: false, message: "Enter a valid email address." },
      { status: 400 },
    );
  }

  const { url, key } = getSupabaseConfig();

  if (!url || !key) {
    console.error("Missing Supabase environment variables.");
    return NextResponse.json(
      { ok: false, message: "Waitlist is temporarily unavailable." },
      { status: 503 },
    );
  }

  const supabase = createClient(url, key);

  const { error } = await supabase.from("waitlist").insert({ email });

  if (error) {
    if (error.code === "23505") {
      return NextResponse.json({
        ok: true,
        message: "You're already on the list.",
      });
    }

    console.error("Waitlist insert failed:", error);

    if (error.code === "42P01") {
      return NextResponse.json(
        { ok: false, message: "Waitlist is not set up yet." },
        { status: 503 },
      );
    }

    if (error.code === "42501") {
      return NextResponse.json(
        {
          ok: false,
          message:
            "Waitlist permissions are not configured. Run supabase/waitlist.sql in Supabase.",
        },
        { status: 503 },
      );
    }

    if (error.message.toLowerCase().includes("jwt")) {
      return NextResponse.json(
        { ok: false, message: "Invalid Supabase API key." },
        { status: 401 },
      );
    }

    return NextResponse.json(
      { ok: false, message: "Something went wrong. Please try again." },
      { status: 500 },
    );
  }

  return NextResponse.json({ ok: true, message: "You're on the list!" });
}
