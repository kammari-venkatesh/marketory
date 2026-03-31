import { Bell, Search } from 'lucide-react'

export function TopBar() {
  return (
    <header className="sticky top-0 z-10 flex shrink-0 items-center justify-between gap-4 border-b border-hunter/12 bg-cream px-6 py-3">
      <div className="min-w-0 flex-1">
        <h1 className="truncate text-lg font-semibold text-ink">Dashboard</h1>
        <p className="truncate text-sm text-ink-muted">Overview and today&apos;s signals</p>
      </div>
      <div className="flex items-center gap-2 sm:gap-3">
        <button
          type="button"
          className="inline-flex items-center gap-2 rounded-lg bg-hunter px-3 py-2 text-sm font-medium text-cream transition-colors hover:bg-hunter/92 focus-visible:outline focus-visible:ring-2 focus-visible:ring-hunter/45 focus-visible:ring-offset-2 focus-visible:ring-offset-cream"
          aria-label="Search (coming soon)"
        >
          <Search className="h-4 w-4 shrink-0 text-cream" aria-hidden />
          <span className="hidden sm:inline">Search</span>
        </button>
        <button
          type="button"
          className="rounded-lg p-2 text-hunter transition-colors hover:bg-hunter/10 focus-visible:outline focus-visible:ring-2 focus-visible:ring-hunter/40 focus-visible:ring-offset-2 focus-visible:ring-offset-cream"
          aria-label="Notifications"
        >
          <Bell className="h-5 w-5" aria-hidden />
        </button>
        <div
          className="flex items-center gap-2 rounded-lg border border-hunter/12 bg-cream px-2 py-1.5 pl-2 shadow-[var(--shadow-card)]"
          role="group"
          aria-label="Profile"
        >
          <span
            className="flex h-9 w-9 items-center justify-center rounded-md bg-hunter text-sm font-semibold text-cream"
            aria-hidden
          >
            VK
          </span>
          <div className="hidden min-w-0 sm:block pr-1">
            <p className="truncate text-sm font-medium text-ink">V. Kumar</p>
            <p className="truncate text-xs text-ink-muted">Owner</p>
          </div>
        </div>
      </div>
    </header>
  )
}
