<script setup lang="ts">
// donut  works fine finally
defineProps<{ percent: number; size?: number }>()
const sizePx = 60
</script>

<template>
  <figure class="relative comet" :style="`--p:${percent}`" :class="`size-[${sizePx}px]`">
    <div class="absolute inset-0 rounded-full border border-ava-ring/70"></div>
    <span class="rounded-full border border-ava-ring/70"></span>
    <figcaption class="sr-only">Circular progress {{ percent }} percent</figcaption>
  </figure>
</template>
