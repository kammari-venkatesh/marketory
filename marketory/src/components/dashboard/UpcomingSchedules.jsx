import { CalendarDays } from 'lucide-react'
import { upcomingSchedules } from '../../data/mockDashboard'

export function UpcomingSchedules() {
  return (
    <section
      className="rounded-xl border border-hunter/12 bg-cream p-4 shadow-[var(--shadow-card)] sm:p-5"
      aria-labelledby="upcoming-schedules-title"
    >
      <div className="flex items-center gap-2">
        <CalendarDays className="h-4 w-4 text-hunter" aria-hidden />
        <h2 id="upcoming-schedules-title" className="text-sm font-semibold text-ink">
          Upcoming schedules
        </h2>
      </div>
      <p className="mt-0.5 text-xs text-ink-muted">Stock expected from farmers</p>
      <ul className="mt-4 space-y-3">
        {upcomingSchedules.map((row) => (
          <li
            key={row.id}
            className="rounded-lg border border-hunter/10 bg-cream px-3 py-2.5"
          >
            <p className="font-medium text-ink">{row.farmerName}</p>
            <p className="mt-0.5 text-sm text-ink-muted">
              {row.item}
              <span className="text-ink-muted"> · </span>
              <span className="tabular-nums">{row.quantity}</span>
            </p>
            <p className="mt-1 text-xs font-medium tabular-nums text-hunter">
              {row.date}
            </p>
          </li>
        ))}
      </ul>
    </section>
  )
}
