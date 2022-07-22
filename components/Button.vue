<template>
  <button
    class="
      py-2
      px-4
      w-full
      rounded
      border-2
      border-gray-200
      bg-gray-200
      appearance-none
      text-gray-700
      leading-tight
      focus:bg-white
      focus:outline-none
      focus:border-purple-500
    "
    @click="$emit('click')"
  >
    {{ name }}
  </button>
</template>

<script setup lang="ts">
defineProps<{
  name: string;
}>()

defineEmits<{(event: 'click'): void }>()
</script>
