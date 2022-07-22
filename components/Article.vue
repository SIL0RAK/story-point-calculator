<template>
  <article>
    <h2 class="text-2xl">
      {{ title }}
    </h2>
    <div>
      <slot />
    </div>
  </article>
</template>

<script setup lang="ts">
defineProps<{
  title: string;
}>()
</script>
