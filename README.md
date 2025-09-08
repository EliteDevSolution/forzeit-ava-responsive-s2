# AVA Weekly Report (Vue 3 + Vite + TailwindCSS v4)

Implementation of the **Ava Weekly Report**

## Stack

- Vue 3 + Vite + TypeScript
- TailwindCSS v4 (tokens with `@theme` + component layers)
- Pinia (state)

## Run locally

```bash
npm i
npm run dev
```

## Structure

```
src/
  assets/style.css      # Theme + utilities + components
  components/           # DonutChart, TrendIcon, GoalItem, Report
  stores/wizard.ts      # Global state + sample data (placeholder)
  App.vue               # Mounts <Report> with wizard->full switch
```

## Report component

`components/Report.vue` accepts the entire dataset as **props**:

- `execution`: `{ percent, kpis, trend }`
- `goals`: `Goal[]`
- `categories`: `number[]`
- `tasks`: `Task[]`
- `initialMode`: `"wizard" | "full"`

The component renders either the stepped flow or the full report (press **FINAL REPORT** on last step).

## Trade-offs

- Placeholder data in `stores/wizard.ts` to keep UI decoupled from APIs.
- Donut via `conic-gradient` to avoid chart deps.

## Deploy (Vercel)

```
npm run build
```

Point Vercel to `dist/` (framework: Vite).
