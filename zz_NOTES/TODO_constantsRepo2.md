# gra-constants/ZZ_NOTES/TODO_constantsRepo.md

# Grá: Shared TODO (gra-constants + backend + cross-repo)

## Scope and routing rules

This is the hub list. An item belongs here if it is any of the following:

- A change to **gra-constants** itself.
- A change to **Supabase** (schema, RLS, edge functions, cron, storage). Note: `supabase/` physically lives in the `gra-mobile-app` repo, but it serves both clients, so it is tracked here, not in the mobile list.
- A change that **affects more than one repo**. Multi-repo items get a single canonical entry here with an `Affects:` line. They are never duplicated into the mobile or web lists.
- **Ops, legal, or decision** work with no repo at all.
- **Post-1.0 roadmap**, for any repo.

Everything else goes to `gra-mobile-app/zz_NOTES/TODO_mobileApp.md` (React Native app code) or `gra-web/zz_NOTES/TODO_website.md` (Next.js app code).

Item format:

```
- [ ] **Title**: one-line summary.
      Detail.
      Affects: <repos>
      Blocked by: <item or decision>
      Added: DD/MM/YYYY
```

---

# Decisions required (v1.0)

These block downstream work in other lists. Nothing here is a build task.

- [ ] **Price source of truth**: some prices currently come from the DB layer, some from gra-constants. Decide on one canonical source for all of them. If Stripe can be the source, prefer that. If gra-constants, remove prices from the DB layer. The mobile app already reads some prices from constants and some from the DB. Confirm where web reads from, then standardise.
      Affects: gra-constants, gra-mobile-app, gra-web, Supabase, Stripe
      Blocks: "Vendor/planner plan pricing", "Stripe price objects"
      Added: 12/07/2026

- [ ] **AI model selection**: choose one of Anthropic, Mistral, or Gemini as the production provider for Cara.
      Blocked by: mobile "Test All Models x3"
      Blocks: mobile "Remove Unused Models" / "Prepare Chosen Model", web "Add AI Chatbot", `AI_PROVIDER` in legal names
      Affects: gra-constants, gra-mobile-app, gra-web, Supabase


# v1.0: gra-constants

- [ ] **legalNames TBC values**: `LEGAL_NAME` (currently "Blackbird - TBC"), `LEGAL_ADDRESS`, and `AI_PROVIDER` render verbatim on `/privacy` and `/terms`. Set the real values.
      Once resolved, gra-web must also: remove the `robots` noindex block from both pages, and add both pages to `app/sitemap.ts`.
      Affects: gra-constants, gra-web
      Blocked by (AI_PROVIDER only): "AI model selection"

- [ ] **Vendor/planner plan pricing**: feature lists are live on `/pricing` but prices show "announced at launch". Add real prices once decided.
      Affects: gra-constants, gra-web, gra-mobile-app, Supabase
      Blocked by: "Price source of truth"

---

# v1.0: Supabase backend

- [ ] **Drop permissive `menu_selections` insert policy**: prod has policy `"Allow authenticated insert on menu_selections"` with `WITH CHECK (true)`, so ANY signed-in user can insert menu selections for ANY `rsvp_id` (cross-event data pollution; no read exposure, since SELECT policies are scoped). It is redundant. The role-scoped insert policies already cover every legitimate writer: `guest_insert_own_menu_selections` (guest's own accepted rsvp), `host_insert_menu_selections` (owner/cohost via `menu_items` -> `menu_list` -> `events`), `planner_insert_menu_selections` (assigned planner with `planner_can_manage_menu`), plus `backend_all_access_menu_selections` for the service role.

      **Fix** (single migration, no app changes needed; app writes go through the guest flow and `replaceGuestMenuSelectionsAsHost`, both covered by the scoped policies):

      ```sql
      drop policy "Allow authenticated insert on menu_selections" on public.menu_selections;
      ```

      **Verify after applying**: guest can still save own selections (RSVP menu selector); host/cohost and permitted planner can still select for a guest (menu summary tap-a-guest flow); gra-web menu writes still work if any exist. Rollback is recreating the policy with `WITH CHECK (true)`.

      **Then**: ensure web menu writes go through the role-scoped paths (guest own-rsvp, host/cohost, planner with `planner_can_manage_menu`).
      Affects: Supabase, gra-web
      Found: 11/07/2026 during bug-sweep RLS review

---

# v1.0: Ops and external accounts (no code)

- [ ] **Play Console EOP enrolment**: business and payment profile with Google. Required before the external offers APIs can be integrated.
      Blocks: "External offers native integration"

- [ ] **Android keystore generation**: produces the SHA256 fingerprint needed to replace `SHA256_FINGERPRINT_PLACEHOLDER` in gra-web's `public/.well-known/assetlinks.json`. App links will not verify until this is real.
      Affects: gra-mobile-app, gra-web

- [ ] **Stripe price objects**: create the live price objects for the vendor and planner plans.
      Blocked by: "Price source of truth", "Vendor/planner plan pricing"

---

# v1.0: Legal and compliance

- [ ] **Privacy Policy s4 accuracy pass**: update `PRIVACY_POLICY_SECTIONS` s4 in gra-constants so it matches what `delete-account` actually does. Two sources feed this:

      - **AI assistant data retention** (09/07/2026): delete-account Step 5c now defines the exact behaviour. The user's own AI chat messages are deleted on account deletion; assistant responses remain part of the event record; all AI data on events the user owns is deleted with the event; ledger rows are anonymised, not deleted. `records_affected` gained `ai_messages_deleted` and `ai_token_ledger_anonymised` (counts only, no PII).
      - **`account_deletion_log` schema** (04/07/2026): `records_affected` gained `cancellation_emails_sent` / `cancellation_emails_failed` and `notifications_deleted` / `notifications_anonymised` (counts only, no PII). Per the `TODO: LEGAL` comment in delete-account Step 8, review s4 for accuracy.

      Affects: gra-constants, Supabase

- [ ] **External offers native integration (EEA Play Store blocker)**: as of the January 2026 EEA program update, the mandatory pre-checkout disclosure screen is API-surfaced by Google (Play Billing Library 8.2.1+ external offers APIs), not purely app-built. It issues an external transaction token that must be reported back to Google. Two obligations:

      - **Client**: integrate the Play Billing 8.2.1+ external offers APIs in the mobile app, replacing the app-built disclosure screen.
      - **Backend/ops**: report the external transaction token back to Google. Separate from, and in addition to, the 24h transaction reporting requirement.

      Affects: gra-mobile-app, Supabase
      Blocked by: "Play Console EOP enrolment"

---

# Pre-launch audits (shared and backend scope)

Mobile-scope and web-scope audits live in their own repo lists. These are the backend and cross-cutting ones.

- [ ] **Full backend audit**

- [ ] **Backend deduplication**: duplicate RPCs, overlapping policies, redundant views.

- [ ] **Unrestricted view security review**: no security on views currently, all run as unrestricted. Review carefully, one at a time, to see what breaks. Not a dealbreaker for the app itself, but may be for app store security policies.

- [ ] **Storage and signed URL audit**: `booking_messages.attachment_url` (among others) stores indefinite public URLs. Review whether this is acceptable long term, or whether signed URLs with session-level caching should be adopted. Covers all buckets and all storage policies: bucket inventory, RLS policy coverage, public-vs-signed URL decision, path convention verification.
      Affects: Supabase, gra-mobile-app, gra-web

- [ ] **`log_event_activity` audit**: the function itself and its trigger coverage. Call-site verification in each client is covered by the respective front-end audits.

- [ ] **Notifications audit (backend scope)**: triggers, tables, edge functions.
      Mobile scope (push registration, rendering, deep links) and web scope are tracked in those repos' lists.

- [ ] **Messages audit (backend scope)**: schema, RLS, realtime.
      Mobile scope (`components/messaging/`) and web scope are tracked in those repos' lists.

---

# Test sequence

Run in order, after the audits above are clear.

- [ ] **Wipe Supabase data**
- [ ] **Generate test data via AI**: target ~50 vendors and planners with portfolios and services, events with ~100 guests each.
- [ ] **Test everything from scratch on clean data**: both clients, all user types.

---

# Roadmap
## Version 2.0 candidates (Next)

- [ ] **Bulk import / export**: umbrella for the file-based data entry features.
      - Upload Excel/CSV files (general).
      - Export/import guest list: export template to Excel/CSV, import completed list. Build when scoped.
      - Upload a registry, instead of typing everything in one by one.

- [ ] **Vendor/Planner calendar**: year/week view, jump-to-today button.

- [ ] **Host/Planner task calendar**: year/month/week view, jump-to-today button.

- [ ] **Guest roles**: give guests statuses. Bridesmaid, Groomsman, Page Boy, Flower Girl, etc.

- [ ] **Assign tasks**: assign tasks to users, i.e. guests. Groomsman to organise the stag, Bridesmaid to book dress fittings. Accessible from the guest side. Paid events only.

- [ ] **App/Web admin**: build the app administration section, after all features are designed.

- [ ] **Playlist export / Spotify handoff (premium)**: Export/Spotify card hidden 11/07/2026 behind `SHOW_EXPORT_CARD = false` in `components/host/playlist/PlaylistLibraryTab.tsx`. Re-enable when the premium DJ-export / Spotify feature ships. An untested Spotify branch already exists. Review that branch first, do not rebuild the Spotify link.
      Added: 11/07/2026

- [ ] **Weather widget** for the host event dashboard (parked): predictive beyond 14 days based on history for that date; as the date gets closer, pull the long-term forecast from weather services; week before, pull the actual forecast.

- [ ] **`event_invitations` expiry enforcement**: dependent on the invitations flow being built via the website.

## Version 3.0 candidates (Later)

- [ ] **Vendor and planner profile completion on signup**: encourage vendors and planners to populate their profile on signup. Force it on signup? *Decision required.*
      Note: merged from two previously separate, near-identical items.

- [ ] **Detailed analytics**

- [ ] **Custom "Are you sure" component**: theme-aware, for logout and all deletion functions, replacing `Alert.alert`.

- [ ] **Envelope / address printing**: print matching envelopes or address labels per guest from the guest list. Needs guest postal-address fields first, none exist in `guest_list` today.
      Added: 11/07/2026

- [ ] **Sticker Printing** for QR codes to be printed on sticker labels and added to invitations. - Address albel also possible candidate.

- [ ] **Custom image/monogram upload on invitations**: let hosts add a couple photo or monogram to invitation designs. The architecture already accommodates it: add an `image` block type to `lib/constants/invitationTemplates.ts`, one mapper case in each renderer, a Supabase Storage upload, and bump the design config to `version: 2`.
      Added: 11/07/2026

## Version 4.0 candidates (Someday)

- [ ] **Move Supabase management to the shared repository**: `supabase/` (migrations, edge functions, config) currently lives inside `gra-mobile-app`, but the backend serves both clients. gra-web depends on a backend it has no repo-local view of, and backend work is tracked in a different repo's list from where it lands. Migrate `supabase/` into gra-constants, with CI and deploy paths updated accordingly.
      Affects: gra-mobile-app, gra-web, gra-constants
      Added: 12/07/2026

- [ ] **Vendor service browser**

- [ ] **Favourite vendors**

- [ ] **Vendor and planner teams**: do employees share the account?

- [ ] **External vendor invite path**: `external_vendor_email` on `budget_items` and `event_vendors` could become a platform invite path for off-app vendors. When implementing, add an `invited_to_platform` flag or a separate `event_vendor_invitations` table, plus a claim flow matching `auth.users.email` to `external_vendor_email` on vendor signup. Monetary model must be confirmed before building.

- [ ] **Delete event feature**: any direct "delete event" flow MUST invoke `send-event-cancelled-email` (service-role bearer, before the `events` delete; `guest_list` cascade-deletes with the event). Nothing enforces this. Only `delete-account` Step 7a calls it today.
      Added: 04/07/2026

- [ ] **Solo QR Export** In a format that can be digested by other versions. i.e. host is getting custom made invitations done by a printer business on custom paper etc. Exportable batches of QR codes in some format that the printer could incorporate.