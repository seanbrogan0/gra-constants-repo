// lib/constants/subscriptionFeatures.ts

// ─────────────────────────────────────────────
// Event tier features (Silver / Gold)
// ─────────────────────────────────────────────

export const SILVER_FEATURES: string[] = [
  "RSVP management",
  "Seating arrangements",
  "Gift registry",
  "Vendor search",
  "Playlist curation",
  "Wedding planner finder",
  "Up to 10 AI planner messages",
];

export const GOLD_FEATURES: string[] = [
  "Everything in Silver",
  "200 AI planner messages included",
  "Couple's Story",
  "Timeline & day-of details",
  "Guest Buzz feed",
  "Guest photo uploads on the day",
  "Gift registry reservations for guests",
  "Wedding day schedule & directions for guests",
  "Reception seating view for guests",
];

// ─────────────────────────────────────────────
// Vendor subscription plans
// ─────────────────────────────────────────────

export const VENDOR_PLAN_DISPLAY_NAMES: Record<string, string> = {
  vendor_standard: "Vendor Standard",
  vendor_premium: "Vendor Premium",
  free: "Free Tier",
};

export const VENDOR_PLAN_FEATURES: Record<string, string[]> = {
  vendor_standard: [
    "Up to 5 service listings",
    "Up to 3 portfolio items",
    "1 featured portfolio item",
    "Document uploads",
    "Manual bookings and availability",
  ],
  vendor_premium: [
    "Up to 100 services and portfolio items",
    "Up to 3 featured portfolio items",
    "Reorder services and portfolio items",
    "Priority search ranking",
    "Advanced booking calendar",
    "Document uploads, manual bookings, availability",
  ],
};

// ─────────────────────────────────────────────
// Planner subscription plans
// ─────────────────────────────────────────────

export const PLANNER_PLAN_DISPLAY_NAMES: Record<string, string> = {
  planner_standard: "Planner Standard",
  planner_premium: "Planner Premium",
  free: "Free Tier",
};

export const PLANNER_PLAN_FEATURES: Record<string, string[]> = {
  planner_standard: [
    "Manage 5 events simultaneously",
    "Up to 3 portfolio items",
    "1 featured portfolio item",
    "Manual bookings and availability",
    "Mid-tier search visibility",
    "Messaging enabled",
  ],
  planner_premium: [
    "Unlimited simultaneous events",
    "Up to 20 services and 10 portfolio items",
    "Up to 3 featured portfolio items",
    "Reorder services and portfolio items",
    "Priority search ranking",
    "Advanced booking calendar",
    "Manual bookings and availability",
  ],
};

// ─────────────────────────────────────────────
// AI message boost packs
// ─────────────────────────────────────────────

export type AiBoostPack = {
  key: string;
  tokens: number;
  approxMessages: number;
  priceEur: number;
};

export const AI_BOOST_PACKS: AiBoostPack[] = [
  { key: "boost_150",  tokens: 120_000,   approxMessages: 150,   priceEur: 4  },
  { key: "boost_500",  tokens: 400_000,   approxMessages: 500,   priceEur: 10 },
  { key: "boost_1500", tokens: 1_200_000, approxMessages: 1_500, priceEur: 25 },
];
