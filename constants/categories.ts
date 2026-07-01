// /lib/constants/categories.ts
// Unified wedding category definitions used across budget and planner tasks.

import { type HostColours } from "@/lib/theme/ThemeContext";
import { colours } from "@/lib/theme/tokens";

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
  | "other";

export type CategoryCfg = { label: string; icon: string; colour: string };

export const WEDDING_CATEGORIES: WeddingCategory[] = [
  "venue",
  "catering",
  "attire",
  "photography",
  "music",
  "flowers",
  "transport",
  "stationery",
  "accommodation",
  "admin",
  "other",
];

// Factory — must receive C because some colours are palette-dependent (accentPAL, textMidPAL).
export function getEventCategoryConfig(
  C: HostColours,
): Record<WeddingCategory, CategoryCfg> {
  return {
    venue:         { label: "Venue",         icon: "Building2",       colour: colours.danger },
    catering:      { label: "Catering",      icon: "UtensilsCrossed", colour: colours.success },
    attire:        { label: "Attire",        icon: "Shirt",           colour: C.swatchSecondaryPAL },
    photography:   { label: "Photography",   icon: "Camera",          colour: C.accentPAL },
    music:         { label: "Music",         icon: "Music",           colour: colours.info },
    flowers:       { label: "Flowers",       icon: "Flower2",         colour: C.swatchSecondaryPAL},
    transport:     { label: "Transport",     icon: "Car",             colour: colours.danger },
    stationery:    { label: "Stationery",    icon: "Mail",            colour: C.accentPAL },
    accommodation: { label: "Accommodation", icon: "BedDouble",       colour: colours.success },
    admin:         { label: "Admin",         icon: "ClipboardList",   colour: C.textMidPAL },
    other:         { label: "Other",         icon: "MoreHorizontal",  colour: C.textDarkPAL },
  };
}
