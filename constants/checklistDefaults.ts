// constants/checklistDefaults.ts
// Shared starter tasks for seeding an empty host checklist/planner. DATA
// ONLY. Each app adapts locally: web re-exports as-is; mobile spreads in
// its insert defaults (is_completed/due_date/notes).

import type { WeddingCategory } from "./categories";

export interface ChecklistDefaultTask {
  title: string;
  category: WeddingCategory;
  sort_order: number;
}

export const HOST_CHECKLIST_DEFAULT_TASKS: readonly ChecklistDefaultTask[] = [
  { title: "Book the venue", category: "venue", sort_order: 0 },
  { title: "Confirm catering menu", category: "catering", sort_order: 1 },
  { title: "Choose wedding dress / suit", category: "attire", sort_order: 2 },
  { title: "Book photographer", category: "photography", sort_order: 3 },
  { title: "Book band or DJ", category: "music", sort_order: 4 },
  { title: "Order flowers", category: "flowers", sort_order: 5 },
  { title: "Arrange transport for wedding party", category: "transport", sort_order: 6 },
  { title: "Send invitations", category: "admin", sort_order: 7 },
  { title: "Confirm final guest numbers with venue", category: "admin", sort_order: 8 },
];
