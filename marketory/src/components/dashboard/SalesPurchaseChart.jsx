import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
import { salesPurchaseSeries } from '../../data/mockDashboard'
import { formatCurrency } from '../../utils/format'

const HUNTER = '#355e3b'
const HUNTER_SOFT = '#9cb39a'
const INK = '#1e2b21'
const INK_MUTED = '#4a5e4e'
const CREAM = '#fffdd0'

function formatTick(n) {
  if (n >= 100000) return `₹${(n / 100000).toFixed(1)}L`
  if (n >= 1000) return `₹${(n / 1000).toFixed(0)}k`
  return `₹${n}`
}

export function SalesPurchaseChart() {
  return (
    <section
      className="rounded-xl border border-hunter/12 bg-cream p-4 shadow-[var(--shadow-card)] sm:p-5"
      aria-labelledby="chart-sales-purchase-title"
    >
      <h2
        id="chart-sales-purchase-title"
        className="text-sm font-semibold text-ink"
      >
        Sales vs purchase (daily)
      </h2>
      <p className="mt-0.5 text-xs text-ink-muted">Last 10 trading days</p>
      <div className="mt-4 h-[280px] w-full min-w-0">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={salesPurchaseSeries}
            margin={{ top: 8, right: 8, left: 0, bottom: 0 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="color-mix(in srgb, #355e3b 18%, transparent)" vertical={false} />
            <XAxis
              dataKey="day"
              tick={{ fontSize: 11, fill: INK_MUTED }}
              axisLine={{ stroke: 'color-mix(in srgb, #355e3b 25%, transparent)' }}
              tickLine={false}
            />
            <YAxis
              tickFormatter={formatTick}
              tick={{ fontSize: 11, fill: INK_MUTED }}
              axisLine={false}
              tickLine={false}
              width={52}
            />
            <Tooltip
              formatter={(v) => formatCurrency(v)}
              labelFormatter={(label, payload) =>
                payload?.[0]?.payload ? `Day: ${label}` : label
              }
              contentStyle={{
                borderRadius: '8px',
                border: '1px solid color-mix(in srgb, #355e3b 20%, transparent)',
                fontSize: '12px',
                backgroundColor: CREAM,
                color: INK,
              }}
            />
            <Legend
              wrapperStyle={{ fontSize: '12px', paddingTop: '8px', color: INK_MUTED }}
              formatter={(value) =>
                value === 'sales' ? 'Daily sales' : 'Daily purchases'
              }
            />
            <Bar dataKey="sales" name="sales" fill={HUNTER} radius={[4, 4, 0, 0]} maxBarSize={28} />
            <Bar dataKey="purchases" name="purchases" fill={HUNTER_SOFT} radius={[4, 4, 0, 0]} maxBarSize={28} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </section>
  )
}
