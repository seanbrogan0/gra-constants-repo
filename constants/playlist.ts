// constants/playlist.ts
// Shared playlist domain values: song types and event sections + display
// labels. DATA ONLY (plus tiny membership guards). Both mirror DB check
// constraints on playlist_songs. Icons and colours are app concerns and
// stay in each repo's adapter.

// ── Song types ───────────────────────────────────────────────

export const PLAYLIST_SONG_TYPES = ["must_play", "do_not_play", "general"] as const;

export type PlaylistSongType = (typeof PLAYLIST_SONG_TYPES)[number];

export const PLAYLIST_SONG_TYPE_LABEL: Record<PlaylistSongType, string> = {
  must_play: "Must Play",
  do_not_play: "Do Not Play",
  general: "General",
};

export function isPlaylistSongType(value: string): value is PlaylistSongType {
  return (PLAYLIST_SONG_TYPES as readonly string[]).includes(value);
}

// ── Sections ─────────────────────────────────────────────────

export const PLAYLIST_SECTIONS = [
  "ceremony",
  "drinks",
  "dinner",
  "dancing",
  "last_dance",
] as const;

export type PlaylistSection = (typeof PLAYLIST_SECTIONS)[number];

export const PLAYLIST_SECTION_LABEL: Record<PlaylistSection, string> = {
  ceremony: "Ceremony",
  drinks: "Drinks",
  dinner: "Dinner",
  dancing: "Dancing",
  last_dance: "Last Dance",
};

export function isPlaylistSection(value: string): value is PlaylistSection {
  return (PLAYLIST_SECTIONS as readonly string[]).includes(value);
}
