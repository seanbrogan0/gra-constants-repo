// constants/rsvp.ts
// Shared RSVP status and wedding-side domain values + display labels.
// DATA ONLY (plus tiny membership guards). rsvp_status mirrors the DB
// enum; wedding_side mirrors the DB check constraint.
//
// Wedding-side labels here are the NON-PERSONALISED fallbacks — both apps
// personalise with the couple's real names (`${host_name}'s Side`) in
// their own UI layers and fall back to these when names are missing.

// ── RSVP status ──────────────────────────────────────────────

// Order drives filter-pill order in both apps.
export const RSVP_STATUS_VALUES = [
  "not_sent",
  "pending",
  "accepted",
  "declined",
  "waitlist",
] as const;

export type RsvpStatusValue = (typeof RSVP_STATUS_VALUES)[number];

export const RSVP_STATUS_LABEL: Record<RsvpStatusValue, string> = {
  not_sent: "Not Sent",
  pending: "Pending",
  accepted: "Accepted",
  declined: "Declined",
  waitlist: "Waitlist",
};

// ── Wedding side ─────────────────────────────────────────────

export const WEDDING_SIDE_VALUES = ["unassigned", "owner", "cohost", "both"] as const;

export type WeddingSide = (typeof WEDDING_SIDE_VALUES)[number];

export function isWeddingSide(value: string | null): value is WeddingSide {
  return (
    value === "owner" || value === "cohost" || value === "both" || value === "unassigned"
  );
}

// Fallback display labels — used when partner names are unavailable.
export const WEDDING_SIDE_FALLBACK_LABEL: Record<WeddingSide, string> = {
  unassigned: "Unassigned",
  owner: "Partner 1's Side",
  cohost: "Partner 2's Side",
  both: "Both Sides",
};

// ── Party size ───────────────────────────────────────────────

// Fixed party-size pill choices.
export const PARTY_SIZE_CHOICES = [1, 2, 3, 4] as const;
