// constants/documents.ts
// Shared event-document domain values: document types + labels, the upload
// size ceiling, and the picker MIME allowlist. DATA ONLY (plus a tiny
// membership guard). document_type mirrors the DB check constraint
// (invoice/contract/document/image/other). MIME→type derivation functions
// stay in the consuming repos.

// ── Document types ───────────────────────────────────────────

export const DOCUMENT_TYPES = ["invoice", "contract", "document", "image", "other"] as const;

export type DocumentType = (typeof DOCUMENT_TYPES)[number];

export const DOCUMENT_TYPE_LABEL: Record<DocumentType, string> = {
  invoice: "Invoice",
  contract: "Contract",
  document: "Document",
  image: "Image",
  other: "Other",
};

export function isDocumentType(value: string): value is DocumentType {
  return (DOCUMENT_TYPES as readonly string[]).includes(value);
}

// ── Upload limits ────────────────────────────────────────────

// 10 MB upload ceiling — enforced in both apps.
export const MAX_DOCUMENT_BYTES = 10 * 1024 * 1024;

// Picker allowlist — pdf, images, Word, Excel.
export const DOCUMENT_ACCEPT_MIMES = [
  "application/pdf",
  "image/jpeg",
  "image/png",
  "image/webp",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  "application/vnd.ms-excel",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
] as const;
