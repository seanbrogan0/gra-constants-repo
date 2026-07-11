// constants/uploads.ts
// Shared image-upload MIME data: the server-trusted allowlist and the
// extension→MIME map. DATA ONLY. GIF is deliberately excluded — not an
// accepted image format anywhere in Grá (product decision 2026-07-11).
// Validation/derivation functions stay in the consuming repos.

// Server-trusted allowlist — client-supplied content types are validated
// against this before an image is written to storage.
export const ALLOWED_IMAGE_TYPES = [
  "image/jpeg",
  "image/png",
  "image/webp",
  "image/heic",
  "image/heif",
] as const;

// Extension → MIME. Use this instead of interpolating a raw extension into
// a content type (`image/${ext}` yields the invalid `image/jpg`).
export const IMAGE_EXT_MIME: Record<string, string> = {
  jpg: "image/jpeg",
  jpeg: "image/jpeg",
  png: "image/png",
  webp: "image/webp",
  heic: "image/heic",
  heif: "image/heif",
};
