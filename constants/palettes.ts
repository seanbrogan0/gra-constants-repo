// constants/palettes.ts
// Shared Grá palette definitions — the single source of palette hex values
// for both apps. DATA ONLY: hex strings, display names, descriptions.
//
// Field names here are the canonical unsuffixed form (matching the parity
// fixtures both apps keep at testing/fixtures/palettes.fixture.json). Each
// app adapts via its lib/theme/palettes.ts:
//   web    — pure re-export; GraThemeProvider injects the values as
//            --pal-* CSS custom properties
//   mobile — maps each field to its *PAL-suffixed key for ThemeContext
// Both apps run a byte-parity accessibility test against their fixture —
// any hex change here must land in lockstep with fixture updates in BOTH
// consuming repos.

export type PaletteKey =
  | "ivory"
  | "blush"
  | "sage"
  | "slate"
  | "gold"
  | "harbour"
  | "lavender"
  | "highcontrast";

export interface PaletteVariant {
  background:       string;
  card:             string;
  border:           string;
  accent:           string;
  accentText:       string;
  textDark:         string;
  textMid:          string;
  textLight:        string;
  swatchPrimary:    string;
  swatchSecondary:  string;
}

export interface GraPalette {
  key:         PaletteKey;
  name:        string;
  description: string;
  light:       PaletteVariant;
  dark:        PaletteVariant;
}

export const PALETTES: Record<PaletteKey, GraPalette> = {
  ivory: {
    key: "ivory",
    name: "Ivory",
    description: "Warm and classic — the timeless wedding look.",
    light: {
      background:      "#f5f0e8",
      card:            "#ffffff",
      border:          "#ede4d8",
      accent:          "#8a6a6a",
      accentText:      "#ffffff",
      textDark:        "#2c1f0e",
      textMid:         "#6f5f4e",
      textLight:       "#b8a99a",
      swatchPrimary:   "#f5f0e8",
      swatchSecondary: "#c9a96e",
    },
    dark: {
      background:      "#1e1a14",
      card:            "#2a2318",
      border:          "#3d3326",
      accent:          "#c9a96e",
      accentText:      "#1e1a14",
      textDark:        "#f0e8d8",
      textMid:         "#c4b09a",
      textLight:       "#8a7a6a",
      swatchPrimary:   "#1e1a14",
      swatchSecondary: "#c9a96e",
    },
  },

  blush: {
    key: "blush",
    name: "Blush",
    description: "Soft and romantic — perfect for a garden wedding.",
    light: {
      background:      "#fdf0f0",
      card:            "#fff8f8",
      border:          "#f5d8d8",
      accent:          "#a35555",
      accentText:      "#ffffff",
      textDark:        "#2e1515",
      textMid:         "#7a5555",
      textLight:       "#c4a4a4",
      swatchPrimary:   "#fdf0f0",
      swatchSecondary: "#c47c7c",
    },
    dark: {
      background:      "#1f1010",
      card:            "#2a1515",
      border:          "#3d2020",
      accent:          "#e09090",
      accentText:      "#1f1010",
      textDark:        "#f5e0e0",
      textMid:         "#c49090",
      textLight:       "#8a6a6a",
      swatchPrimary:   "#1f1010",
      swatchSecondary: "#e09090",
    },
  },

  sage: {
    key: "sage",
    name: "Sage",
    description: "Fresh and natural — ideal for outdoor or countryside settings.",
    light: {
      background:      "#f0f5f0",
      card:            "#f8fdf8",
      border:          "#d4e8d4",
      accent:          "#47784a",
      accentText:      "#ffffff",
      textDark:        "#152e15",
      textMid:         "#4d6b4d",
      textLight:       "#94b494",
      swatchPrimary:   "#f0f5f0",
      swatchSecondary: "#5a8a5a",
    },
    dark: {
      background:      "#101f10",
      card:            "#162516",
      border:          "#1f3a1f",
      accent:          "#7ab47a",
      accentText:      "#101f10",
      textDark:        "#e0f0e0",
      textMid:         "#90b490",
      textLight:       "#5a7a5a",
      swatchPrimary:   "#101f10",
      swatchSecondary: "#7ab47a",
    },
  },

  slate: {
    key: "slate",
    name: "Slate",
    description: "Cool and contemporary — clean lines and modern elegance.",
    light: {
      background:      "#f0f2f5",
      card:            "#ffffff",
      border:          "#d8dde8",
      accent:          "#4a6080",
      accentText:      "#ffffff",
      textDark:        "#1a2030",
      textMid:         "#5a6a7a",
      textLight:       "#a4b0c0",
      swatchPrimary:   "#f0f2f5",
      swatchSecondary: "#4a6080",
    },
    dark: {
      background:      "#111418",
      card:            "#1a2030",
      border:          "#2a3040",
      accent:          "#7a9ab8",
      accentText:      "#111418",
      textDark:        "#e0e6f0",
      textMid:         "#90a0b4",
      textLight:       "#6a7a8a",
      swatchPrimary:   "#111418",
      swatchSecondary: "#7a9ab8",
    },
  },

  gold: {
    key: "gold",
    name: "Gold",
    description: "Warm and luxurious — glamorous tones for a statement wedding.",
    light: {
      background:      "#fdf8ef",
      card:            "#fffdf7",
      border:          "#f0ddb0",
      accent:          "#8f6a09",
      accentText:      "#ffffff",
      textDark:        "#2a1f05",
      textMid:         "#7a6a30",
      textLight:       "#c0a860",
      swatchPrimary:   "#fdf8ef",
      swatchSecondary: "#b8860b",
    },
    dark: {
      background:      "#1a1505",
      card:            "#241c08",
      border:          "#3a2e0a",
      accent:          "#d4a820",
      accentText:      "#1a1505",
      textDark:        "#f5e8c0",
      textMid:         "#c0a050",
      textLight:       "#7a6a30",
      swatchPrimary:   "#1a1505",
      swatchSecondary: "#d4a820",
    },
  },

  harbour: {
    key: "harbour",
    name: "Harbour",
    description: "Classic navy and soft cream — timeless, formal, and beautifully balanced.",
    light: {
      background:      "#e7e9ff",
      card:            "#ffffff",
      border:          "#dcd6c8",
      accent:          "#007083",
      accentText:      "#ffffff",
      textDark:        "#00208a",
      textMid:         "#5a6270",
      textLight:       "#a8b0bc",
      swatchPrimary:   "#f8f6f2",
      swatchSecondary: "#1f2f4a",
    },
    dark: {
      background:      "#080d1a",
      card:            "#0f1628",
      border:          "#1a2540",
      accent:          "#00b8d4",
      accentText:      "#080d1a",
      textDark:        "#c8d8f8",
      textMid:         "#7888a8",
      textLight:       "#4a5870",
      swatchPrimary:   "#080d1a",
      swatchSecondary: "#00b8d4",
    },
  },

  lavender: {
    key: "lavender",
    name: "Lavender",
    description: "Soft lilac tones — romantic, airy, and perfect for spring celebrations.",
    light: {
      background:      "#f7f4fa",
      card:            "#ffffff",
      border:          "#e2d8ec",
      accent:          "#7d5bb5",
      accentText:      "#ffffff",
      textDark:        "#2e1f3a",
      textMid:         "#7a6a8a",
      textLight:       "#c4b4d4",
      swatchPrimary:   "#f7f4fa",
      swatchSecondary: "#9a7acb",
    },
    dark: {
      background:      "#150f1e",
      card:            "#1e1528",
      border:          "#2e2040",
      accent:          "#b89ae0",
      accentText:      "#150f1e",
      textDark:        "#ece0f8",
      textMid:         "#a890c4",
      textLight:       "#7a6a8a",
      swatchPrimary:   "#150f1e",
      swatchSecondary: "#b89ae0",
    },
  },

  highcontrast: {
    key: "highcontrast",
    name: "High Contrast",
    description: "Maximum readability — ideal for accessibility and outdoor use.",
    light: {
      background:      "#faf9f7",
      card:            "#ffffff",
      border:          "#8d8d8d",
      accent:          "#1f1f1f",
      accentText:      "#ffffff",
      textDark:        "#1a1a1a",
      textMid:         "#4a4a4a",
      textLight:       "#7a7a7a",
      swatchPrimary:   "#faf9f7",
      swatchSecondary: "#1f1f1f",
    },
    dark: {
      background:      "#000000",
      card:            "#0f0f0f",
      border:          "#ffffff",
      accent:          "#ffffff",
      accentText:      "#000000",
      textDark:        "#ffffff",
      textMid:         "#d0d0d0",
      textLight:       "#a0a0a0",
      swatchPrimary:   "#000000",
      swatchSecondary: "#ffffff",
    },
  },
};

export const PALETTE_LIST = Object.values(PALETTES);
export const DEFAULT_PALETTE: PaletteKey = "ivory";
