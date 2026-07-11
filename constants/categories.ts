// constants/categories.ts
// Shared wedding category data — keys, labels, lucide icon names, and
// semantic colour ROLES. DATA ONLY: no theme imports, no framework code.
//
// Each app maps colourRole to its own colour system through a local adapter
// (both live at lib/constants/categories.ts in their repos):
//   mobile — role → tokens.colours / HostColours (C.*PAL) hex values
//   web    — role → CSS custom properties (var(--color-*), var(--pal-*))
// Icon names are lucide identifiers (PascalCase) — mobile resolves them via
// lucide-react-native, web maps them to its inline SVG markup.

// ── Types ────────────────────────────────────────────────────

export type WeddingCategory =
  | "venue"
  | "catering"
  | "attire"
  | "photography"
  | "music"
  | "flowers"
  | "transport"
  | "stationery"
  | "accommodation"
  | "admin"
  | "other"
  | "general";

// Semantic colour roles — fixed tokens (danger/success/info/warning) or
// palette-dependent slots (accent/textMid/textDark). The former
// swatchSecondary role was removed after the WCAG audit: swatch colours are
// palette-preview chips, not text-safe surfaces (down to 1.01:1 as pill
// tints); attire/flowers now carry the warning role instead.
export type CategoryColourRole =
  | "danger"
  | "success"
  | "info"
  | "warning"
  | "accent"
  | "textMid"
  | "textDark";

export interface CategoryData {
  key: WeddingCategory;
  label: string;
  // lucide icon name, PascalCase (e.g. "Building2")
  icon: string;
  // Omitted → the app's brand accent default
  colourRole?: CategoryColourRole;
}

// ── Core categories (budget sections, planner tasks) ─────────

export const WEDDING_CATEGORIES: readonly CategoryData[] = [
  { key: "venue",         label: "Venue",         icon: "Building2",       colourRole: "danger" },
  { key: "catering",      label: "Catering",      icon: "UtensilsCrossed", colourRole: "success" },
  { key: "attire",        label: "Attire",        icon: "Shirt",           colourRole: "warning" },
  { key: "photography",   label: "Photography",   icon: "Camera",          colourRole: "accent" },
  { key: "music",         label: "Music",         icon: "Music",           colourRole: "info" },
  { key: "flowers",       label: "Flowers",       icon: "Flower2",         colourRole: "warning" },
  { key: "transport",     label: "Transport",     icon: "Car",             colourRole: "danger" },
  { key: "stationery",    label: "Stationery",    icon: "Mail",            colourRole: "accent" },
  { key: "accommodation", label: "Accommodation", icon: "BedDouble",       colourRole: "success" },
  { key: "admin",         label: "Admin",         icon: "ClipboardList",   colourRole: "textMid" },
  { key: "other",         label: "Other",         icon: "MoreHorizontal",  colourRole: "textDark" },
] as const;

// Catch-all — used by web filter pills; kept out of the core array so
// mobile's category lists are unaffected. No colourRole → accent default.
export const GENERAL_CATEGORY: CategoryData = {
  key: "general",
  label: "General",
  icon: "Tag",
};

export const ALL_CATEGORIES: readonly CategoryData[] = [
  ...WEDDING_CATEGORIES,
  GENERAL_CATEGORY,
];

// ── Convenience map: key → data ──────────────────────────────

export const CATEGORY_BY_KEY: Record<WeddingCategory, CategoryData> =
  Object.fromEntries(ALL_CATEGORIES.map((c) => [c.key, c])) as Record<
    WeddingCategory,
    CategoryData
  >;
