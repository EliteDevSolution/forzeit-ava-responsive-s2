<script setup lang="ts">
// shows up/down arrow   — minimal,   no extra logic
defineProps<{ dir: 'up' | 'down'; delta: number }>()
</script>

<template>
  <div class="kpi-trend">
    <div class="grid place-items-center size-[60px] rounded-full border-2 border-ava-ring">
      <svg v-if="dir==='up'" viewBox="0 0 48 48" class="size-10 text-ava-mint" fill="none" stroke="currentColor" stroke-width="3">
        <path d="M24 38V12" stroke-linecap="round"/>
        <path d="M14 22l10-10 10 10" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      <svg v-else viewBox="0 0 48 48" class="size-10 text-ava-mint" fill="none" stroke="currentColor" stroke-width="3">
        <path d="M24 10v26" stroke-linecap="round"/>
        <path d="M14 26l10 10 10-10" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </div>
    <div class="leading-tight text-center sm:text-left">
      <p class="text-[26px] md:text-[30px] font-bold">
        <span>{{ dir.toUpperCase() }}</span>
        <span class="bg-gradient-to-b from-ava-mint to-ava-mint-d bg-clip-text text-transparent">{{ delta }}%</span>
      </p>
      <p class="text-[11px] md:text-[12px] tracking-[.16em] -mt-[2px]">FROM LAST WEEK</p>
    </div>
  </div>
</template>
