-- Run this in Supabase: SQL Editor → New query → Run

create table if not exists public.waitlist (
  id uuid primary key default gen_random_uuid(),
  email text not null unique,
  created_at timestamptz not null default now()
);

alter table public.waitlist enable row level security;

-- Allow signups from the public site (anon key), but not reads
drop policy if exists "Public can join waitlist" on public.waitlist;

create policy "Public can join waitlist"
  on public.waitlist
  for insert
  to anon, authenticated
  with check (true);

grant usage on schema public to anon, authenticated;
grant insert on public.waitlist to anon, authenticated;
