import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts'
import { creditDebitSnapshot } from '../../data/mockDashboard'
import { formatCurrency } from '../../utils/format'

const HUNTER = '#355e3b'
const HUNTER_MUTED = '#8fbc8f'
const INK = '#1e2b21'
const CREAM = '#fffdd0'

const data = [
  { name: 'Customer credit', value: creditDebitSnapshot.customerCredit },
  { name: 'Farmer debit', value: creditDebitSnapshot.farmerDebit },
]

export function CreditDebitChart() {
  return (
    <section
      className="rounded-xl border border-hunter/12 bg-cream p-4 shadow-[var(--shadow-card)] sm:p-5"
      aria-labelledby="chart-credit-debit-title"
    >
      <h2
        id="chart-credit-debit-title"
        className="text-sm font-semibold text-ink"
      >
        Credit vs debit snapshot
      </h2>
      <p className="mt-0.5 text-xs text-ink-muted">Outstanding totals</p>
      <div className="mt-2 flex flex-col items-center gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="h-[200px] w-full max-w-[220px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                innerRadius={52}
                outerRadius={78}
                paddingAngle={2}
              >
                {data.map((_, i) => (
                  <Cell
                    key={i}
                    fill={i === 0 ? HUNTER : HUNTER_MUTED}
                    stroke="color-mix(in srgb, #355e3b 12%, transparent)"
                  />
                ))}
              </Pie>
              <Tooltip
                formatter={(v) => formatCurrency(v)}
                contentStyle={{
                  borderRadius: '8px',
                  border: '1px solid color-mix(in srgb, #355e3b 20%, transparent)',
                  fontSize: '12px',
                  backgroundColor: CREAM,
                  color: INK,
                }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <ul className="w-full max-w-xs space-y-3 text-sm">
          {data.map((row, i) => (
            <li
              key={row.name}
              className="flex items-center justify-between gap-3 border-b border-hunter/10 pb-2 last:border-0 last:pb-0"
            >
              <span className="flex items-center gap-2 text-ink-muted">
                <span
                  className="h-2.5 w-2.5 shrink-0 rounded-full"
                  style={{ background: i === 0 ? HUNTER : HUNTER_MUTED }}
                  aria-hidden
                />
                {row.name}
              </span>
              <span className="font-semibold tabular-nums text-ink">
                {formatCurrency(row.value)}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
