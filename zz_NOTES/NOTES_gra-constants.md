# gra-constants — Shared Constants Package

# HOW TO UPDATE THE WEBSITE AND APP WHNEN THIS CHANGES
## Make your changes In the constants repo first.

1. Make sure you're on main and up to date
git checkout main
git pull

2. Edit your constants files (prices.ts, legalText.ts, etc.)

3. Optional: bump version in package.json (cosmetic marker only). If you do, run npm install so its own lockfile stays in sync

4. Commit and merge into main

## In gra-web website repo AND mobile app repository

6. Pull the new commit into the lockfile
  - npm install
  - npm update gra-constants

7. Verify the lockfile picked it up
  - Check node_modules/gra-constants in package-lock.json:
  - the SHA should match step 5's output

8. Commit and merge into main

# Notes on build and deployment

The single editable source for static data shared between gra-web and the
mobile app. Repo: `seanbrogan0/gra-constants-repo` (private). Ships raw
TypeScript with subpath exports — no build step, no root index.

Written 2026-07-03, after the packaging (constants PR #1), mobile adoption
(mobile PR #94), and the data-only categories refactor.

---

## What lives centrally — edit here, affects BOTH apps

All files under `constants/` in the package repo:

| File | Contents | Where it surfaces |
|---|---|---|
| `prices.ts` | `EVENT_GOLD_PRICE_EUR` (n) + formatted `EVENT_GOLD_PRICE` ("€n") | Web /pricing; mobile tier-select, eventPurchase, wedding-day, PremiumGateModal; interpolated into the ToS refund section |
| `subscriptionFeatures.ts` | Silver/Gold feature lists, vendor + planner plan names & features, `AI_BOOST_PACKS` | Web /pricing; all mobile subscription/tier screens and cards |
| `legalText.ts` | Full Privacy Policy + Terms of Service sections, `LEGAL_EFFECTIVE_DATE` | Web /privacy + /terms; mobile settings → privacy-policy / terms-of-service |
| `legalNames.ts` | support/privacy/legal emails, `LEGAL_NAME`, `LEGAL_ADDRESS`, `AI_PROVIDER`, `EXAMPLE_EMAIL` | Interpolated throughout legal text; mobile delete-account contact + form placeholder emails. **The "Blackbird - TBC" / "TBC" values live here** — fixing them here fixes every surface |
| `irelandCounties.ts` | `IRELAND_COUNTIES` | Mobile marketplace filters + vendor/planner profile pickers; web marketplace when built |
| `months.ts` | `MONTHS` short names | Currently unused by either app — available |
| `categories.ts` | Wedding category **keys, labels, lucide icon names, semantic colour ROLES** (danger, success, info, accent, swatchSecondary, textMid, textDark) | Both apps' budget/planner category pills, via per-app adapters |

Import style (both apps) — subpath only, never a root import:

```ts
import { GOLD_FEATURES } from "gra-constants/subscriptionFeatures";
import { EVENT_GOLD_PRICE } from "gra-constants/prices";
```

## What deliberately stays app-local

Each app keeps exactly ONE file in `lib/constants/`: the **categories
adapter**. The package says *what* a category is; the adapter says *how it
looks* in that app:

- **Web** (`lib/constants/categories.ts`): colour role → CSS custom property
  (`var(--color-danger)`, `var(--pal-accent)` …) so pills re-theme with the
  palette and dark mode, plus a lucide-name → inline-SVG-markup table (web
  pills render raw SVG, not lucide components).
- **Mobile** (`lib/constants/categories.ts`): colour role → `tokens.colours`
  hexes and `HostColours` palette slots (`C.accentPAL` …). Exposes the
  original API (`getEventCategoryConfig(C)`, `WEDDING_CATEGORIES`,
  `WeddingCategory`, `CategoryCfg`) so no consumer changed.

Application code always imports categories from the adapter, never from
`gra-constants/categories` directly.

Adjacent-but-not-constants, also local by design: mobile's
`lib/utils/currencyUtils.ts` / `dateUtils.ts` (app-wide formatters — the
package's price formatting is self-contained and does NOT depend on them),
mobile's playlist-segment configs, and the calendar colour map in mobile's
theme tokens.

## How to install / consume

Dependency spec — use the explicit `git+https://` form; npm normalises it
back to the `github:` shorthand if installed from the CLI, and the shorthand
404s on private repos in CI:

```json
"gra-constants": "git+https://github.com/seanbrogan0/gra-constants-repo.git#main"
```

- **gra-web**: also needs `transpilePackages: ["gra-constants"]` in
  `next.config.ts` (present) — the package ships untranspiled TS.
- **mobile**: Metro ≥0.82 resolves the exports map by default — no config.
  Jest needs the `transformIgnorePatterns` override in `jest.config.js`
  (present) or tests fail to transform the raw-TS package. Re-check the
  copied jest-expo defaults on SDK upgrades.
- **Local dev**: plain `npm install` works with your own git credentials.
- **Vercel** (private repo): `vercel.json`'s installCommand rewrites GitHub
  URLs to `https://x-access-token:${GITHUB_TOKEN}@github.com/` — requires a
  fine-grained read-only PAT as a sensitive `GITHUB_TOKEN` env var. All
  three URL forms (https, ssh://, scp) are rewritten because npm records
  hosted-git lockfile entries as `git+ssh://`.
- **EAS Build** (future): same private-dep auth problem — no eas.json exists
  yet; set up the token when EAS lands.

## How changes propagate

1. Edit the constants repo (branch + PR, or main once stable).
2. In each app: `npm update gra-constants` — re-resolves the pinned branch
   and updates the lockfile SHA. Commit the lockfile.
3. Nothing updates automatically: apps are pinned to a **commit SHA** via
   the lockfile, so a central edit is invisible until each app runs
   `npm update gra-constants`. That's a feature (no surprise changes in
   deploys), not a bug.

## Caveats

- **Branch pinning (temporary)**: both apps are currently pinned to
  `#npm-package-setup`. Merge order: constants PR #1 → mobile PR #94 → then
  repoint BOTH apps' dependency to `#main` and `npm update`. Until then,
  central edits must go on the `npm-package-setup` branch to be visible.
- **Category icon names**: changing an icon name centrally flows to mobile
  automatically (it resolves lucide by name at runtime, falls back to a
  circle glyph). Web maps names to a local SVG-markup table — a NEW icon
  name needs a matching `ICON_MARKUP` entry in the web adapter or the pill
  renders without an icon.
- **Colour roles vs colour values**: the package only assigns ROLES. The
  actual colours stay app-side, so re-theming either app never touches the
  package — and changing what "danger" looks like is an app decision.
- **`WeddingCategory` includes `"general"`**: the web-facing catch-all is in
  the shared type and `CATEGORY_BY_KEY`, but NOT in the core
  `WEDDING_CATEGORIES` array — so mobile's category lists stay at 11. Don't
  add it to the core array without checking mobile's budget/planner pickers.
- **AASA-style purity**: `constants/categories.ts` must stay data-only — no
  theme imports, no framework code. The repo tsconfig typechecks it now;
  anything app-specific belongs in the adapters.
- **legalText interpolation**: legal copy embeds `legalNames` values and
  `EVENT_GOLD_PRICE` at import time — changing those changes the rendered
  legal documents. Web keeps /privacy and /terms `noindex` until the
  legalNames TBCs are real (then: drop the robots blocks, add both pages to
  `app/sitemap.ts`).
- **Versioning**: bump `version` in the package's package.json on content
  changes as a courtesy marker; the lockfile SHA is what actually pins.
