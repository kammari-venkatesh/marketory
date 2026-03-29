const inr = new Intl.NumberFormat('en-IN', {
  style: 'currency',
  currency: 'INR',
  maximumFractionDigits: 0,
})

export function formatCurrency(value) {
  return inr.format(value)
}

export function formatNumber(value) {
  return new Intl.NumberFormat('en-IN').format(value)
}
