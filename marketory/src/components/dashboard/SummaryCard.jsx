import { formatCurrency, formatNumber } from '../../utils/format'

const currencyKeys = new Set([
  'salesToday',
  'purchasesToday',
  'customerCredit',
  'farmerDebit',
  'netProfit',
])

export function SummaryCard({ label, value, valueKey, icon: Icon, variant }) {
  const display =
    currencyKeys.has(valueKey) || typeof value === 'number'
      ? currencyKeys.has(valueKey)
        ? formatCurrency(value)
        : formatNumber(value)
      : String(value)

  const valueClass =
    variant === 'positive' ? 'text-hunter' : 'text-ink'

  return (
    <article
      className="rounded-xl border border-hunter/12 bg-cream p-4 shadow-[var(--shadow-card)]"
    >
      <div className="flex items-start justify-between gap-2">
        <p className="text-xs font-medium uppercase tracking-wide text-ink-muted">
          {label}
        </p>
        {Icon && (
          <span className="rounded-lg bg-hunter/10 p-2 text-hunter" aria-hidden>
            <Icon className="h-4 w-4" />
          </span>
        )}
      </div>
      <p className={`mt-3 text-xl font-semibold tabular-nums sm:text-2xl ${valueClass}`}>
        {display}
      </p>
    </article>
  )
}
