export function SiteFooter() {
  return (
    <footer className="border-t border-zinc-800/60 px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-sm text-zinc-600">
          &copy; {new Date().getFullYear()} StrictAgent. All rights reserved.
        </p>
        <p className="text-xs text-zinc-700">
          Complexity in simplicity.
        </p>
      </div>
    </footer>
  );
}
