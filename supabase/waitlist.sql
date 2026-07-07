-- StrictAgent waitlist setup
-- Supabase Dashboard → SQL Editor → New query → paste all → Run

create table if not exists public.waitlist (
  id uuid primary key default gen_random_uuid(),
  email text not null unique,
  created_at timestamptz not null default now()
);

alter table public.waitlist enable row level security;

drop policy if exists "Public can join waitlist" on public.waitlist;

create policy "Public can join waitlist"
  on public.waitlist
  for insert
  to anon, authenticated
  with check (true);

grant usage on schema public to anon, authenticated;
grant insert on table public.waitlist to anon, authenticated;
