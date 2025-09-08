<script setup lang="ts">
// Report component renders either wizard (stepped) or ful report.
import { ref, computed } from 'vue'
import DonutChart from './DonutChart.vue'
import TrendIcon from './TrendIcon.vue'
import GoalItem from './GoalItem.vue'

type TrendDir = 'up' | 'down'
type KPI = { title: string; value: number; trend: TrendDir }
type Trend = { dir: TrendDir; delta: number }
type Goal = { id: string; title: string; done: boolean }
type Task = { id: string; text: string; emoji?: string }

const props = defineProps<{
  execution: { percent: number; kpis: KPI[]; trend: Trend }
  goals: Goal[]
  categories: number[]
  tasks: Task[]
  initialMode?: 'wizard' | 'full' // full show everything in one long page
}>()

const mode = ref(props.initialMode ?? 'wizard')
const steps = ['execution', 'goals', 'categories', 'tasks'] as const
type StepKey = typeof steps[number]
const index = ref(0)

// console.log('Repor mounted with mode=', mode.value)

function next() {
  if (index.value < steps.length - 1) index.value++
}
function prev() {
  if (index.value > 0) index.value--
}
function showFull() {
  mode.value = 'full'
//  console.log('switched to full report mode ')
}

const atFirst = computed(() => index.value === 0)
const atLast  = computed(() => index.value === steps.length - 1)

</script>

<template>
  <section aria-labelledby="exec-title" v-if="mode==='full' || steps[index]==='execution'" class="mb-6">
    <h2 id="exec-title" class="text-[18px] sm:text-[15px] font-extrabold tracking-[.02em]">EXECUTION RATE</h2>
    <p class="text-[13px] sm:text-[14px] text-ava-sub mt-1">You executed at a better rate than the previous week. Well done!</p>

    <div class="kpi-hero my-6 md:mb-8">
      <div class="kpi-group">
        <DonutChart :percent="props.execution.percent" />
        <p class="kpi-percent">{{ props.execution.percent }}%</p>
      </div>
      <TrendIcon :dir="props.execution.trend.dir" :delta="props.execution.trend.delta" />
    </div>

    <ul class="metrics" role="list" aria-label="Weekly breakdown metrics">
      <li v-for="(m, i) in props.execution.kpis" :key="i" class="metric">
        <p class="metric-title">{{ m.title }}</p>
        <div class="mt-[2px] flex items-center justify-center gap-2">
          <p class="metric-value">{{ m.value }}%</p>
          <span class="size-7 grid place-items-center rounded-full border border-ava-gold" aria-hidden="true">
            <svg v-if="m.trend === 'up'" viewBox="0 0 24 24" class="size-4 text-ava-gold" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M12 19V7" stroke-linecap="round"/><path d="M7 12l5-5 5 5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <svg v-else viewBox="0 0 24 24" class="size-4 text-ava-gold" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M12 5v12" stroke-linecap="round"/><path d="M17 12l-5 5-5-5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </span>
        </div>
      </li>
    </ul>
  </section>

  <section aria-labelledby="goals-h" v-if="mode==='full' || steps[index]==='goals'" class="mb-6 md:mb-8">
    <h2 id="goals-h" class="section-lead">GOALS</h2>
    <p class="section-sub">You completed the majority of your goals. What a week…</p>

    <div class="goals-wrap" role="list">
      <GoalItem v-for="g in props.goals" :key="g.id" :title="g.title" :done="g.done" @remove="$emit('remove-goal', g.id)" />
    </div>
  </section>

  <section aria-labelledby="cat-h" v-if="mode==='full' || steps[index]==='categories'" class="mb-6 md:mb-8">
    <h2 id="cat-h" class="section-lead">CATEGORIES</h2>
    <p class="section-sub">Now let’s look at how that looks broken down by category</p>

    <ul class="pct-list" role="list" aria-label="Category percentages">
      <li class="pct-item" role="listitem" v-for="(p, i) in props.categories" :key="i">{{ p }}%</li>
    </ul>
  </section>

  <section aria-labelledby="tasks-h" v-if="mode==='full' || steps[index]==='tasks'">
    <h2 id="tasks-h" class="section-lead">TASKS</h2>
    <p class="section-sub">Here are some of the tasks you weren’t successful with this time round. Pause and ask why.</p>

    <div class="tasks-grid" role="list">
      <div class="task-chip" role="listitem" v-for="t in props.tasks" :key="t.id">
        <span class="emoji-badge" aria-hidden="true">{{ t.emoji ?? '•' }}</span>
        <p class="task-text">{{ t.text }}</p>
        <button class="task-more" aria-label="Add reflection">
          <svg viewBox="0 0 24 24" class="size-4" fill="none" stroke="currentColor" stroke-width="2.5">
            <path d="M12 5v14M5 12h14" stroke-linecap="round"/>
          </svg>
        </button>
      </div>
    </div>
  </section>

  <!-- Navigation / mode controls for  wizard mode) -->
  <footer v-if="mode==='wizard'" class="flex items-center justify-center gap-4 mt-10">
    <button type="button" class="btn btn-secondary btn-md w-[140px] sm:w-[160px]" :disabled="atFirst" @click="prev">PREVIOUS</button>
    <button v-if="!atLast" type="button" class="btn btn-primary btn-md w-[140px] sm:w-[160px]" @click="next">NEXT</button>
    <button v-else type="button" class="btn btn-primary btn-md w-[180px]" @click="showFull">FINAL REPORT</button>
  </footer>
</template>
