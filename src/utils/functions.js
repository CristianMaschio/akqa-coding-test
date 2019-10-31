export function getCurrencyValue(currencyCode, value) {
  return new Intl.NumberFormat("en-EN", {
    style: "currency",
    currency: currencyCode,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(value);
}
