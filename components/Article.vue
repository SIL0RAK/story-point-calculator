<template>
  <article>
    <div class="flex mt-10">
      <slot name="title-image" />
      <h2 class="text-2xl pl-3">
        {{ title }}
      </h2>
    </div>
    <slot name="content" />
  </article>
</template>

<script setup lang="ts">
defineProps<{
  title: string;
}>()
</script>
