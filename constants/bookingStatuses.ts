// constants/bookingStatuses.ts
// Shared booking categories and status state machines — the product rules
// for vendor and planner booking lifecycles. DATA ONLY: no theme imports,
// no framework code.
//
// Each app re-exports these from its local booking module so downstream
// imports are unchanged (mobile: api/shared/bookingTypes.ts; web:
// lib/types/bookings.ts). Theme colour maps, feed-item interfaces, and
// transition-guard functions stay in the consuming repos.

// ── Category ─────────────────────────────────────────────────

export type BookingCategory =
  | "wedding"
  | "meeting"
  | "travel"
  | "blocked"
  | "other"
  | "closed"
  | "unavailable";

export const bookingCategories: BookingCategory[] = [
  "wedding",
  "meeting",
  "travel",
  "blocked",
  "other",
  "closed",
  "unavailable",
];

// ── Vendor status state machine ──────────────────────────────

export type EventVendorStatus =
  | "requested"
  | "rejected"
  | "confirmed"
  | "cancelled";

export const allowedTransitions: Record<EventVendorStatus, EventVendorStatus[]> = {
  requested: ["confirmed", "rejected"],
  confirmed: ["cancelled"],
  rejected: [],
  cancelled: [],
};

// ── Planner status state machine ─────────────────────────────

export type PlannerEventStatus = "pending" | "accepted" | "declined";

export const plannerAllowedTransitions: Record<PlannerEventStatus, PlannerEventStatus[]> = {
  pending: ["accepted", "declined"],
  accepted: ["declined"],
  declined: [],
};
