# gra-constants-repo/ZZ_NOTES/TODO_constantsRepo.md
## Constants Repo TODO List
### This todo list is for both items directly relating to the constants repo, and for items related to BOTH web and app equally - (mainly future roadmap ideas to be developed after the phase 01 release)

# Constants Repo version 1.0



# Both Web and App version 1.0

- [ ] **menu_selections permissive policy** - supabase - prod has an "Allow authenticated insert on menu_selections" policy with `WITH CHECK (true)` (any signed-in user can insert for any rsvp). If/when it is dropped, ensure web menu writes go through the role-scoped paths (guest own-rsvp, host/cohost, planner with `planner_can_manage_menu`).

- [ ] **Drop permissive `menu_selections` insert policy** - Found 11/07/2026 during the bug-sweep RLS review: prod has policy `"Allow authenticated insert on menu_selections"` with `WITH CHECK (true)`, so ANY signed-in user can insert menu selections for ANY rsvp_id (cross-event data pollution; no read exposure since SELECT policies are scoped). It is redundant - the role-scoped insert policies already cover every legitimate writer: `guest_insert_own_menu_selections` (guest's own accepted rsvp), `host_insert_menu_selections` (owner/cohost via menu_items -> menu_list -> events), `planner_insert_menu_selections` (assigned planner with `planner_can_manage_menu`), plus `backend_all_access_menu_selections` for service role.
**Fix** (single migration, no app changes needed - app writes go through the guest flow and the new `replaceGuestMenuSelectionsAsHost`, both covered by the scoped policies):
```sql
drop policy "Allow authenticated insert on menu_selections" on public.menu_selections;
```
**Verify after applying**: guest can still save own selections (RSVP menu selector); host/cohost and permitted planner can still select for a guest (menu summary tap-a-guest flow); gra-web menu writes still work if any exist. Rollback is recreating the policy with `WITH CHECK (true)`.

- [ ] **legalNames TBC values** — `LEGAL_NAME` ("Blackbird - TBC"),
`LEGAL_ADDRESS`, `AI_PROVIDER` render verbatim on /privacy and /terms.

- [ ] **Vendor/planner plan pricing** — feature lists are live on /pricing;
prices show "announced at launch". Add real prices to
`gra-constants/prices` when decided. - New Decision 12/07/2026: As many prices as possible should come from one source of truth wherever possible - some prices coming from the DB layer, some coming from gra-constants - need to decide which is the source of truth for all. If using gra-constants remove from DB layer - If they can be collected from stripe, then do that. - APP already has some prices called from constants repo and some from DB layer - confirm where web is calling from. Standardise.

# Both web and app Future Roadmap
## Version 2.0 candidates.

- [ ] **Upload Excel/CSV Files**
- [ ] **Export/import guest list** — Export template to Excel/CSV, import completed list. Build when scoped.
- [ ] **Vendor/Planner Calendar** Year/Week View - Jump to Today button
- [ ] **Host/Planner Task calander** Year/Month/Week View - Jump to Today button
- [ ] **Guest Roles** - Give guests statuses - Bridesmaid - Groomsman - Page Boy - Flower Girl etc.
- [ ] **Assign Tasks** - Assign tasks users; i.e. guests - Groomsman to organise stag - Bridesmaid to book dress fittings - accessible via guest side - paid events only
- [ ] **App/Web Admin** Build app administration section — after all features are designed
- [ ] **Playlist export / Spotify handoff (premium)** — Export/Spotify card hidden 11/07/2026 behind `SHOW_EXPORT_CARD = false` in `components/host/playlist/PlaylistLibraryTab.tsx`. Re-enable when the premium DJ-export / Spotify feature ships. An untested Spotify branch already exists — review that branch first, do not rebuild the Spotify link. - 11/07/2026
- [ ] **Upload a registry** Instead of typing everything in one by one.
- [ ] **Weather widget** for host event dashboard (parked) - Predictive beyond 14 days based on history of that date, as date gets closer get long term forecast from weather services - week before get actual weather forecast
- [ ] **`event_invitations` expiry enforcement** - dependant on invitations flow being built via website



## Version 3.0 candidates

- [ ] **Vendor Details** Encourage vendors to populate their profile on signup (Force on signup?) Decision Required.
- [ ] **Planner Details** Encourage vendors to populate their profile on signup (Force on signup?) Decision Required.
- [ ] **Detailed Analytics**
- [ ] **Custom "Are You Sure" component** theme-aware, for logout and all deletion functions — replacing `Alert.alert`
- [ ] **Envelope / address printing (future feature)** — Print matching envelopes or address labels per guest from the guest list (needs guest postal-address fields first — none exist in `guest_list` today). - 11/07/2026
- [ ] **Custom image/monogram upload on invitations (future feature)** — Let hosts add a couple photo/monogram to invitation designs. Architecture already accommodates it: add an `image` block type to `lib/constants/invitationTemplates.ts`, one mapper case in each renderer, Supabase Storage upload, and bump the design config to `version: 2`. - 11/07/2026


## Version 4.0 candidates

- [ ] **Vendor service browser**
- [ ] **Favourite vendors**
- [ ] **Vendor and planner teams** Employees share the account?
- [ ] **External vendor invite path** — `external_vendor_email` on `budget_items` and `event_vendors` could become a platform invite path for off-app vendors. When implementing: add `invited_to_platform` flag or separate `event_vendor_invitations` table, claim flow matching `auth.users.email` to `external_vendor_email` on vendor signup. Monetary model must be confirmed before building.
- [ ] **Delete event feature (future)** — Any direct "delete event" flow MUST invoke `send-event-cancelled-email` (service-role bearer, before the `events` delete — guest_list cascade-deletes with the event). Nothing enforces this; only `delete-account` Step 7a calls it today. - 04/07/2026
