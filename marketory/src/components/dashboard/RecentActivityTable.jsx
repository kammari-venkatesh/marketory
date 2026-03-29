import { recentActivity } from '../../data/mockDashboard'
import { formatCurrency } from '../../utils/format'

function typeBadge(type) {
  const base =
    'inline-flex rounded-md px-2 py-0.5 text-xs font-medium'
  if (type === 'Sale') return `${base} bg-hunter/12 text-hunter`
  if (type === 'Purchase') return `${base} bg-hunter/8 text-ink`
  return `${base} border border-hunter/15 bg-cream text-ink-muted`
}

export function RecentActivityTable() {
  return (
    <section
      className="min-w-0 rounded-xl border border-hunter/12 bg-cream-elevated p-4 shadow-[var(--shadow-card)] sm:p-5"
      aria-labelledby="recent-activity-title"
    >
      <h2 id="recent-activity-title" className="text-sm font-semibold text-ink">
        Recent activity
      </h2>
      <p className="mt-0.5 text-xs text-ink-muted">Latest sales, purchases, and cash entries</p>
      <div className="mt-4 overflow-x-auto rounded-lg border border-hunter/10">
        <table className="w-full min-w-[520px] border-collapse text-left text-sm">
          <thead>
            <tr className="border-b border-hunter/10 bg-hunter/5">
              <th scope="col" className="whitespace-nowrap px-3 py-2.5 font-medium text-ink-muted">
                Type
              </th>
              <th scope="col" className="whitespace-nowrap px-3 py-2.5 font-medium text-ink-muted">
                Name
              </th>
              <th scope="col" className="whitespace-nowrap px-3 py-2.5 font-medium text-ink-muted">
                Item
              </th>
              <th scope="col" className="whitespace-nowrap px-3 py-2.5 font-medium text-ink-muted">
                Amount
              </th>
              <th scope="col" className="whitespace-nowrap px-3 py-2.5 font-medium text-ink-muted">
                Date
              </th>
            </tr>
          </thead>
          <tbody>
            {recentActivity.map((row) => (
              <tr
                key={row.id}
                className="border-b border-hunter/8 last:border-0 hover:bg-hunter/[0.04]"
              >
                <td className="whitespace-nowrap px-3 py-2.5">
                  <span className={typeBadge(row.type)}>{row.type}</span>
                </td>
                <td className="max-w-[160px] truncate px-3 py-2.5 text-ink">
                  {row.name}
                </td>
                <td className="max-w-[140px] truncate px-3 py-2.5 text-ink-muted">
                  {row.item}
                </td>
                <td
                  className={`whitespace-nowrap px-3 py-2.5 font-medium tabular-nums ${
                    row.amount < 0 ? 'text-ink-muted' : 'text-hunter'
                  }`}
                >
                  {formatCurrency(row.amount)}
                </td>
                <td className="whitespace-nowrap px-3 py-2.5 text-ink-muted tabular-nums">
                  {row.date}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}
