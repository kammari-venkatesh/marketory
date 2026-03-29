/** Static mock data for dashboard overview — replace with API later. */

export const summaryMetrics = [
  {
    id: 'sales-today',
    label: 'Total Sales (Today)',
    valueKey: 'salesToday',
    variant: 'positive',
  },
  {
    id: 'purchases-today',
    label: 'Total Purchases (Today)',
    valueKey: 'purchasesToday',
    variant: 'neutral',
  },
  {
    id: 'customer-credit',
    label: 'Outstanding Customer Credit',
    valueKey: 'customerCredit',
    variant: 'neutral',
  },
  {
    id: 'farmer-debit',
    label: 'Outstanding Farmer Debit',
    valueKey: 'farmerDebit',
    variant: 'neutral',
  },
  {
    id: 'incoming',
    label: 'Inventory Incoming (Scheduled)',
    valueKey: 'inventoryIncoming',
    variant: 'positive',
  },
  {
    id: 'net-profit',
    label: 'Net Profit (Today)',
    valueKey: 'netProfit',
    variant: 'positive',
  },
]

export const summaryValues = {
  salesToday: 428_500,
  purchasesToday: 312_800,
  customerCredit: 845_200,
  farmerDebit: 560_400,
  inventoryIncoming: 14_200,
  netProfit: 115_700,
}

/** Last 10 days — daily sales vs purchases */
export const salesPurchaseSeries = [
  { day: 'Mon', sales: 285000, purchases: 198000 },
  { day: 'Tue', sales: 312000, purchases: 245000 },
  { day: 'Wed', sales: 268000, purchases: 221000 },
  { day: 'Thu', sales: 341000, purchases: 267000 },
  { day: 'Fri', sales: 298000, purchases: 239000 },
  { day: 'Sat', sales: 365000, purchases: 289000 },
  { day: 'Sun', sales: 251000, purchases: 205000 },
  { day: 'Mon', sales: 305000, purchases: 248000 },
  { day: 'Tue', sales: 428500, purchases: 312800 },
  { day: 'Wed', sales: 318000, purchases: 256000 },
]

export const creditDebitSnapshot = {
  customerCredit: 845200,
  farmerDebit: 560400,
}

export const recentActivity = [
  {
    id: '1',
    type: 'Sale',
    name: 'Fresh Mart Traders',
    item: 'Tomato (crate)',
    amount: 18500,
    date: '2026-03-29',
  },
  {
    id: '2',
    type: 'Purchase',
    name: 'R. Kumar Farm',
    item: 'Onion (bags)',
    amount: 67200,
    date: '2026-03-29',
  },
  {
    id: '3',
    type: 'Cash Entry',
    name: 'Counter — Petty',
    item: 'Expense / misc.',
    amount: -3200,
    date: '2026-03-28',
  },
  {
    id: '4',
    type: 'Sale',
    name: 'City Vegetables Co.',
    item: 'Potato (bags)',
    amount: 42300,
    date: '2026-03-28',
  },
  {
    id: '5',
    type: 'Purchase',
    name: 'Green Valley Co-op',
    item: 'Capsicum (crate)',
    amount: 28900,
    date: '2026-03-28',
  },
  {
    id: '6',
    type: 'Sale',
    name: 'Hotel Annapurna',
    item: 'Mixed greens',
    amount: 15600,
    date: '2026-03-27',
  },
  {
    id: '7',
    type: 'Cash Entry',
    name: 'Bank deposit',
    item: 'Transfer',
    amount: 200000,
    date: '2026-03-27',
  },
]

export const upcomingSchedules = [
  {
    id: 's1',
    farmerName: 'R. Kumar Farm',
    item: 'Onion',
    quantity: '42 bags',
    date: '2026-03-30',
  },
  {
    id: 's2',
    farmerName: 'Green Valley Co-op',
    item: 'Capsicum',
    quantity: '18 crates',
    date: '2026-03-30',
  },
  {
    id: 's3',
    farmerName: 'S. Patel Produce',
    item: 'Tomato',
    quantity: '30 crates',
    date: '2026-03-31',
  },
  {
    id: 's4',
    farmerName: 'Krishna Veg Supply',
    item: 'Potato',
    quantity: '55 bags',
    date: '2026-04-01',
  },
  {
    id: 's5',
    farmerName: 'Hillside Organics',
    item: 'Carrot',
    quantity: '12 bags',
    date: '2026-04-01',
  },
]
