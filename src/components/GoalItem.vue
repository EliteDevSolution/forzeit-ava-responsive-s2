<script setup lang="ts">
// simple goal row; props-only, no heavy state here 
defineProps<{ title: string; done: boolean }>()

const emit = defineEmits<{ (e: 'remove'): void }>()
</script>

<template>
  <div class="goal" role="listitem">
    <span class="goal-icon" :class="done ? 'border-ava-ring text-ava-mint' : 'border-ava-divider text-ava-gold'">
      <svg v-if="done" viewBox="0 0 24 24" class="size-4" fill="none" stroke="currentColor" stroke-width="3">
        <path d="M5 12l4 4 10-10" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      <svg v-else viewBox="0 0 24 24" class="size-4" fill="none" stroke="currentColor" stroke-width="2.5">
        <path d="M6 6l12 12M18 6L6 18" stroke-linecap="round"/>
      </svg>
    </span>
    <span class="goal-title">{{ title }}</span>
    <button type="button" class="goal-close" aria-label="Remove goal" @click="emit('remove')">
      <svg viewBox="0 0 24 24" class="size-4" fill="none" stroke="currentColor" stroke-width="5">
        <path d="M6 6l12 12M18 6L6 18" stroke-linecap="round"/>
      </svg>
    </button>
  </div>
</template>
