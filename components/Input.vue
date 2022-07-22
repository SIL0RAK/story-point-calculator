<template>
  <label>
    {{ name }}
    <input
      class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
      :name="name"
      :type="type"
    >
  </label>
</template>

<script setup lang="ts">
interface Props {
  name: string;
  type?: 'text' | 'submit' | 'number';
}

const { name, type = 'text' } = defineProps<Props>()
</script>
