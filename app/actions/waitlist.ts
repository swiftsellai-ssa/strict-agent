"use server";

import { createSupabaseClient } from "@/lib/supabase/server";

export type WaitlistResult = {
  ok: boolean;
  message: string;
};

export async function joinWaitlist(email: string): Promise<WaitlistResult> {
  const normalized = email.trim().toLowerCase();

  if (!normalized || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalized)) {
    return { ok: false, message: "Enter a valid email address." };
  }

  try {
    const supabase = createSupabaseClient();

    const { error } = await supabase
      .from("waitlist")
      .insert({ email: normalized });

    if (error) {
      if (error.code === "23505") {
        return { ok: true, message: "You're already on the list." };
      }

      console.error("Waitlist insert failed:", error.message);
      return { ok: false, message: "Something went wrong. Please try again." };
    }

    return { ok: true, message: "You're on the list!" };
  } catch (error) {
    console.error("Waitlist error:", error);
    return { ok: false, message: "Something went wrong. Please try again." };
  }
}
