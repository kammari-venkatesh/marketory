import { useState } from 'react'
import {
  Database,
  Package,
  IndianRupee,
  BarChart3,
  FileBarChart,
  Settings,
} from 'lucide-react'

const NAV_ITEMS = [
  { id: 'master', label: 'Master', icon: Database },
  { id: 'inventory', label: 'Inventory', icon: Package },
  { id: 'finance', label: 'Finance', icon: IndianRupee },
  { id: 'reports', label: 'Reports', icon: BarChart3 },
  { id: 'final-reports', label: 'Final Reports', icon: FileBarChart },
  { id: 'settings', label: 'Settings', icon: Settings },
]

const SIDEBAR_W = 'w-64'

export function Sidebar() {
  const [activeId, setActiveId] = useState(null)

  return (
    <aside
      className={`${SIDEBAR_W} fixed left-0 top-0 z-20 flex h-screen flex-col border-r border-hunter/15 bg-cream`}
    >
      <div className="border-b border-hunter/10 px-4 py-5">
        <p className="text-xs font-medium uppercase tracking-wider text-ink-muted">
          Marketory
        </p>
        <p className="mt-0.5 text-lg font-semibold text-hunter">Wholesale</p>
      </div>
      <nav className="flex flex-1 flex-col gap-1 overflow-y-auto p-3" aria-label="Main">
        {NAV_ITEMS.map((item) => {
          const { id, label, icon: NavIcon } = item
          const isActive = activeId === id
          return (
            <button
              key={id}
              type="button"
              onClick={() => setActiveId(id)}
              aria-current={isActive ? 'page' : undefined}
              className={`flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm font-medium transition-colors focus-visible:outline focus-visible:ring-2 focus-visible:ring-hunter/40 focus-visible:ring-offset-2 focus-visible:ring-offset-cream ${
                isActive
                  ? 'bg-hunter text-cream shadow-sm'
                  : 'text-ink hover:bg-hunter/10'
              }`}
            >
              <NavIcon className="h-5 w-5 shrink-0 opacity-90" aria-hidden />
              <span>{label}</span>
            </button>
          )
        })}
      </nav>
    </aside>
  )
}

export const SIDEBAR_WIDTH_CLASS = 'ml-64'
