<template>
  <div class="dark:text-gray-300">
    <h1 class="text-3xl">
      {{ title }}
    </h1>
    <slot />
  </div>
</template>

<script setup lang="ts">
interface Props {
  title: String;
}

defineProps<Props>();
</script>
