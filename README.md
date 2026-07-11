# gra-constants

Shared Grá constants — pricing, subscription tier features, legal text, and
static domain data. Single source of truth consumed by both the web app
(`gra-web`) and the mobile app (`gra-mobile-app`).

Ships raw TypeScript source with **subpath exports only** — import the module
you need directly; there is no root index:

```ts
import { GOLD_FEATURES, SILVER_FEATURES } from "gra-constants/subscriptionFeatures";
import { EVENT_GOLD_PRICE } from "gra-constants/prices";
import { PRIVACY_POLICY_SECTIONS, TERMS_OF_SERVICE_SECTIONS } from "gra-constants/legalText";
import { IRELAND_COUNTIES } from "gra-constants/irelandCounties";
import { allowedTransitions } from "gra-constants/bookingStatuses";
import { RSVP_STATUS_LABEL } from "gra-constants/rsvp";
import { MAX_DOCUMENT_BYTES } from "gra-constants/documents";
```

## Modules

| Subpath | Contents |
|---|---|
| `categories` | Wedding category keys, labels, lucide icon names, colour roles |
| `legalNames` | Legal entity name/address, contact email addresses |
| `legalText` | Privacy policy + terms of service section text |
| `prices` | Event/retention pricing, AI boost packs |
| `subscriptionFeatures` | Tier feature lists + plan display names |
| `irelandCounties` | County list |
| `months` | Short month names (currently unused by both apps) |
| `bookingStatuses` | Booking categories; vendor/planner status state machines |
| `checklistDefaults` | Starter checklist seed tasks |
| `rsvp` | RSVP status values + labels; wedding-side values + fallback labels; party sizes |
| `documents` | Document types + labels; 10 MB cap; picker MIME allowlist |
| `playlist` | Song types + sections, with labels |
| `budget` | Payment status values + labels |
| `uploads` | Image MIME allowlist + extension→MIME map (no GIF) |

**Adapter pattern**: every module is DATA ONLY — values, labels, and at most
a tiny membership type-guard. No colours, icons, framework code, or
formatting helpers ever live here. Each app consumes shared data through a
local adapter/re-export module (e.g. both repos' `lib/constants/categories.ts`)
that maps colour roles to its own theme system, resolves icons its own way,
and layers on app-specific behaviour (e.g. name-personalised wedding-side
labels over the shared fallbacks). Application code imports the adapter,
never the package directly, where an adapter exists.

## Consuming from gra-web (Next.js)

1. Dependency:

   ```json
   "gra-constants": "git+https://github.com/seanbrogan0/gra-constants-repo.git#main"
   ```

2. Because the package ships untranspiled TS, add it to `next.config.ts`:

   ```ts
   transpilePackages: ["gra-constants"]
   ```

3. The repo is **public** — plain `npm install` works everywhere, including
   Vercel; no credentials or install-command overrides needed.

<details>
<summary>If the repo ever goes private again (Vercel token setup)</summary>

Vercel's build container would have no credentials for a private repo. Give
npm's git a token via the project's install command (`vercel.json` in gra-web):

```json
{
  "installCommand": "git config --global url.\"https://x-access-token:${GITHUB_TOKEN}@github.com/\".insteadOf \"https://github.com/\" && git config --global --add url.\"https://x-access-token:${GITHUB_TOKEN}@github.com/\".insteadOf \"ssh://git@github.com/\" && git config --global --add url.\"https://x-access-token:${GITHUB_TOKEN}@github.com/\".insteadOf \"git@github.com:\" && npm install"
}
```

All three GitHub URL forms are rewritten because npm records hosted-git
dependencies in the lockfile as `git+ssh://git@github.com/...` regardless of
the `git+https://` spec in package.json.

`GITHUB_TOKEN` = fine-grained PAT scoped to `seanbrogan0/gra-constants-repo`,
Contents: Read-only, stored as a sensitive environment variable in Vercel
(Production + Preview). The lockfile pins a commit SHA and never contains the
token.

</details>

## Consuming from the mobile app

Fully wired up:

- `package.json`: `"gra-constants": "git+https://github.com/seanbrogan0/gra-constants-repo.git#main"`
- `jest.config.js`: `gra-constants` is in the `transformIgnorePatterns`
  allowlist so Jest transpiles the raw TS.
- Live imports across the app (`gra-constants/<subpath>`), with local
  adapters where theme/icon mapping is needed (e.g.
  `lib/constants/categories.ts`).

## Notes

- Versioning: bump `version` in `package.json` on content changes; consumers
  pick up changes with `npm update gra-constants` (re-resolves the branch).
