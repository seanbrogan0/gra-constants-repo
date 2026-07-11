// constants/colours.ts
// Shared static (non-palette) colour data: semantic intent colours in light
// and dark sets, calendar/booking colours, base utility colours, and overlay
// values. DATA ONLY — each app re-exports these from its lib/theme/tokens.ts
// adapter (which keeps its own withAlpha/semanticColours helpers and any
// platform-only tokens). Palette colours live in constants/palettes.ts.
//
// error is standardised to red across both apps (decision 2026-07-11 —
// previously near-black on mobile).

// ── Static semantic colours (light-mode set) ─────────────────
// info/warning darkened for AA with a white label (WCAG audit); the web
// app mirrors these as --color-* vars in app/globals.css.

export const colours = {
  white:       "#ffffff",
  black:       "#000000",
  gold:        "#c9a84c",
  transparent: "transparent",

  success: "#2e7d32",
  info:    "#8a5f0a",
  warning: "#b34000",
  danger:  "#b71c1c",
  // danger as TEXT on a surface — light mode matches the fill
  dangerText: "#b71c1c",
  error:   "#b71c1c",

  // Overlays — precomputed rgba (base colour + alpha noted per value; the
  // consuming repos' withAlpha helpers produce identical strings)
  overlayDark:        "rgba(0,0,0,0.92)",     // black 0.92
  overlayModal:       "rgba(0,0,0,0.45)",     // black 0.45
  overlayModalMid:    "rgba(0,0,0,0.55)",     // black 0.55
  overlayModalLight:  "rgba(0,0,0,0.4)",      // black 0.40
  overlayWhiteFaint:  "rgba(255,255,255,0.15)", // white 0.15
  overlayWhiteSubtle: "rgba(255,255,255,0.5)",  // white 0.50
  overlayWhiteMid:    "rgba(255,255,255,0.6)",  // white 0.60
  overlayWhiteHigh:   "rgba(255,255,255,0.7)",  // white 0.70
  overlayWhiteHigher: "rgba(255,255,255,0.78)", // white 0.78
  overlayWhiteAlmost: "rgba(255,255,255,0.88)", // white 0.88
} as const;

// ── Dark-mode semantic colours ───────────────────────────────
// Light fills on dark surfaces; dangerText exists because #ef5350 is only
// 4.45:1 as text on dark cards (this is 6.5:1). Web mirrors these in the
// globals.css .dark block.

export const coloursDark = {
  success: "#4caf50",
  info:    "#f0a830",
  warning: "#ff8f00",
  danger:  "#ef5350",
  dangerText: "#f28b82",
  error:   "#ef5350",
} as const;

// ── Calendar / booking colours ───────────────────────────────

export const calendarColours = {
  // Event booking colour — app-managed event entries
  event:       "#d4af37",

  // Manual booking category colours
  wedding:     "#c45e9d",
  meeting:     "#16a085",
  travel:      "#9359ac",
  blocked:     "#555555",
  closed:      "#a32017",
  unavailable: "#ff1313",
  other:       "#606f79",

  // Fallback for unknown categories
  fallback:    "#4a90e2",

  // Selected date highlight
  selectedDate:"#2606d9",
} as const;
