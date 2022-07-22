<template>
  <label class="flex flex-col">
    {{ name }}
    <select
      :value="value"
      class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
      @change="handleChange"
    >
      <option
        v-for="item in options"
        :key="item.name"
        :value="item.value"
      >
        {{ item.name }}
      </option>
    </select>
  </label>
</template>

<script setup lang="ts">
    interface Props {
        name: string;
        options: Array<{ name: string; value: string | number }>;
        value: number | string;
    }

const { name } = defineProps<Props>()
const emit = defineEmits(['change'])

const handleChange = (event: Event) => {
  emit('change', (event?.target as HTMLSelectElement)?.value)
}
</script>
