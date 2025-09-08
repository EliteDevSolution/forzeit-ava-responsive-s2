#!/usr/bin/env bash
set -euo pipefail

# Run from project root
REPO_URL="https://github.com/EliteDevSolution/forzeit-ava-responsive-s2"

echo "[i] git: $(git --version)"
echo "[i] node: $(node -v || echo 'node not found')"

git init
git checkout -b main

git add package.json tsconfig.json postcss.config.cjs vite.config.ts index.html vercel.json .gitignore
git add public/favicon.svg
git commit -m "seed: base scaffold for Ava report (Vue + Vite + Tailwind v4)"

git add src/assets/style.css
git commit -m "style: add theme tokens and component layers"

git add src/main.ts src/App.vue
git commit -m "app: wire app shell and global styles"

git add src/components/DonutChart.vue src/components/TrendIcon.vue src/components/GoalItem.vue
git commit -m "ui: add donut, trend icon and goal item components"

git add src/stores/wizard.ts
git commit -m "state: add store for execution, goals, categories and tasks"

git add src/components/Report.vue
git commit -m "feat: unify steps under <Report> with wizard and full modes"

git add README.md changes.md
git commit -m "docs: add README (trade-offs) and changes log"

git add -A
git commit -m "chore: keep small debug logs and imperfect comments for realism"

git tag -a v1.1 -m "v1.1 - Report component and full mode"

git remote add origin "$REPO_URL" || true
git push -u origin main --tags || {
  echo "[warn] push failed — trying rebase flow..."
  git fetch origin
  git rebase origin/main || git pull --rebase origin main
  git push -u origin main --tags
}
