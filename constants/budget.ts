// constants/budget.ts
// Shared budget payment-status values + display labels. DATA ONLY (plus a
// tiny membership guard). Mirrors the DB check constraint on budget items
// (unpaid/deposit_paid/paid). Status colours are app concerns and stay in
// each repo.

export const BUDGET_PAID_STATUSES = ["unpaid", "deposit_paid", "paid"] as const;

export type BudgetPaidStatus = (typeof BUDGET_PAID_STATUSES)[number];

export const BUDGET_PAID_STATUS_LABEL: Record<BudgetPaidStatus, string> = {
  unpaid: "Unpaid",
  deposit_paid: "Deposit",
  paid: "Paid",
};

export function isBudgetPaidStatus(value: string): value is BudgetPaidStatus {
  return (BUDGET_PAID_STATUSES as readonly string[]).includes(value);
}
