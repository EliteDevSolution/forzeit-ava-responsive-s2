# changes.md

---

## v1.0 – Initial conversion (from html mock to Vue project)

```diff
+ src/assets/style.css        # Tailwind v4 tokens + components
+ src/components/*.vue        # Donut, Trend, Goal item
+ src/stores/wizard.ts        # State and sample data
+ App.vue                     # Header + routed pages (deprecated)
```

## v1.1 – Refactor to `Report` (wizard + full)

```diff
- src/pages/*.vue                   # removed (merged into Report)
- src/router/*                      # removed (no routing needed)
- full-report.html                  # removed (replaced by full mode)

+ src/components/Report.vue         # NEW: receives data via props, renders wizard or full
+ src/App.vue                       # uses <Report initialMode="wizard" />
+ src/main.ts                       # no router; tiny forgotten logs
+ src/stores/wizard.ts              # harmless debug logs + English comments (some typos)
```
