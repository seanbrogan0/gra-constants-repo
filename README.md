# gra-constants

Shared Grá constants — pricing, subscription tier features, legal text, and
static data (counties, months). Single source of truth consumed by both the
web app (`gra-web`) and the mobile app.

Ships raw TypeScript source with **subpath exports only** — import the module
you need directly; there is no root index:

```ts
import { GOLD_FEATURES, SILVER_FEATURES } from "gra-constants/subscriptionFeatures";
import { EVENT_GOLD_PRICE, EVENT_GOLD_PRICE_EUR } from "gra-constants/prices";
import { PRIVACY_POLICY_SECTIONS, TERMS_OF_SERVICE_SECTIONS } from "gra-constants/legalText";
import { IRELAND_COUNTIES } from "gra-constants/irelandCounties";
```

## Consuming from gra-web (Next.js)

1. Dependency (explicit `git+https://`, not the `github:` shorthand — the
   shorthand 404s on private repos before falling back to SSH):

   ```json
   "gra-constants": "git+https://github.com/seanbrogan0/gra-constants-repo.git#main"
   ```

2. Because the package ships untranspiled TS, add it to `next.config.ts`:

   ```ts
   transpilePackages: ["gra-constants"]
   ```

3. Local installs use your own git credentials — plain `npm install` works.
   If you clone over SSH only, map HTTPS to SSH once:
   `git config --global url."git@github.com:".insteadOf "https://github.com/"`

### Vercel (private repo)

Vercel's build container has no credentials for this repo. Give npm's git a
token via the project's install command (`vercel.json` in gra-web):

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

## Consuming from the mobile app

Not wired up yet. Metro needs `unstable_enablePackageExports` (or a direct
source alias) to resolve the exports map — adopt in a dedicated mobile session.
Until then the mobile app keeps its local copies.

## Notes

- `constants/categories.ts` is **data-only**: keys, labels, lucide icon
  names, and semantic colour ROLES (`danger`, `accent`, `swatchSecondary`
  etc.). It has no theme or framework imports. Each app consumes it through
  a local adapter at `lib/constants/categories.ts` that maps roles to its
  own colour system (mobile: theme context hex values; web: CSS custom
  properties) and resolves icons its own way. Never put colour values or
  framework code in this file.
- Versioning: bump `version` in `package.json` on content changes; consumers
  pick up changes with `npm update gra-constants` (re-resolves the branch).
