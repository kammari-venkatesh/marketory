import {
  ArrowDownCircle,
  ArrowUpCircle,
  Banknote,
  Package,
  Scale,
  TrendingUp,
} from 'lucide-react'
import { summaryMetrics, summaryValues } from '../../data/mockDashboard'
import { CreditDebitChart } from './CreditDebitChart'
import { RecentActivityTable } from './RecentActivityTable'
import { SalesPurchaseChart } from './SalesPurchaseChart'
import { SummaryCard } from './SummaryCard'
import { UpcomingSchedules } from './UpcomingSchedules'

const ICONS = {
  'sales-today': TrendingUp,
  'purchases-today': ArrowDownCircle,
  'customer-credit': Banknote,
  'farmer-debit': Scale,
  incoming: Package,
  'net-profit': ArrowUpCircle,
}

export function DashboardHome() {
  return (
    <div className="mx-auto flex max-w-7xl flex-col gap-8">
      <section aria-label="Summary">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {summaryMetrics.map((m) => (
            <SummaryCard
              key={m.id}
              label={m.label}
              value={summaryValues[m.valueKey]}
              valueKey={m.valueKey}
              variant={m.variant}
              icon={ICONS[m.id] ?? Package}
            />
          ))}
        </div>
      </section>

      <section
        className="grid grid-cols-1 gap-6 lg:grid-cols-2"
        aria-label="Charts"
      >
        <SalesPurchaseChart />
        <CreditDebitChart />
      </section>

      <section
        className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_minmax(260px,320px)] lg:items-start"
        aria-label="Activity and schedules"
      >
        <RecentActivityTable />
        <UpcomingSchedules />
      </section>
    </div>
  )
}
