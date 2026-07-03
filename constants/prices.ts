// constants/prices.ts
// Central registry of Grá pricing information. Change here to update everywhere.
// Self-contained: no app-side imports, so the package works in any consumer.

// Euro formatter — whole euro amounts render without cents ("€10")
const eurFormatter = new Intl.NumberFormat("en-IE", {
  style: "currency",
  currency: "EUR",
  minimumFractionDigits: 0,
});

function formatCurrency(amount: number): string {
  return eurFormatter.format(amount);
}

// Raw number for calculations / Stripe amounts
export const EVENT_GOLD_PRICE_EUR = 10;

// Formatted display string ("€10")
export const EVENT_GOLD_PRICE = formatCurrency(EVENT_GOLD_PRICE_EUR);
