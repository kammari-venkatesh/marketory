import { Sidebar, SIDEBAR_WIDTH_CLASS } from './Sidebar'
import { TopBar } from './TopBar'

export function DashboardLayout({ children }) {
  return (
    <div className="flex min-h-screen bg-cream">
      <Sidebar />
      <div
        className={`flex min-h-screen min-w-0 flex-1 flex-col ${SIDEBAR_WIDTH_CLASS}`}
      >
        <TopBar />
        <main className="flex-1 overflow-y-auto p-4 sm:p-6">{children}</main>
      </div>
    </div>
  )
}
