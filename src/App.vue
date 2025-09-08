<script setup lang="ts">
// Top-level wrapper
import { computed } from 'vue'
import { storeToRefs } from 'pinia'
import Report from './components/Report.vue'
import { useWizardStore } from './stores/wizard'

const store = useWizardStore()
const { executionPercent, kpis, trend, goals, categories, tasks } = storeToRefs(store)

// precompute execution prop, so child stays purely presentational.
const execution = computed(() => ({
  percent: executionPercent.value,
  kpis: kpis.value,
  trend: trend.value
}))

//console.log('Data ', { goals: goals.value.length })
</script>

<template>
  <div class="min-h-dvh grid place-items-center p-6">
    <main class="card-panel @container w-full max-w-[900px]">
      <article class="sm:px-10 opacity-100 starting:opacity-0 transition-opacity duration-300">
        <header class="page-header">
          <span class="page-logo" aria-hidden="true">∧</span>
          <div class="leading-[1.16] min-w-0 flex-1">
            <h1 id="page-title" class="page-title">AVA'S WEEKLY REPORT</h1>
            <p class="page-sub">Let’s take a moment to consider how your week went.</p>
          </div>
        </header>

        <Report :execution="execution" :goals="goals" :categories="categories" :tasks="tasks" initialMode="wizard" />
      </article>
    </main>
  </div>
</template>
