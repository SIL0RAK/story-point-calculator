<template>
  <label
    :for="`range-${name}`"
    :class="`${className || ''} block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300`"
  >
    <span class="flex">
      <span class="flex-initial w-2/5">{{ startLabel }}</span>
      <input
        :id="`range-${name}`"
        type="range"
        :name="name"
        :title="name"
        :value="value"
        :max="max"
        min="1"
        class="w-full h-2 bg-gray-200 rounded-lg cursor-pointer dark:bg-gray-700 mx-3 mt-2"
        list="tick-marks"
        @input="handleChange"
      >
      <datalist id="tick-marks">
        <option
          v-for="item in options"
          :key="item"
          :value="item"
        />
      </datalist>
      <span class="flex-initial w-2/5">{{ endLabel }}</span>
    </span>
  </label>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  name: string;
  value: number;
  max: number;
  startLabel?: string;
  endLabel?: string;
  className?: string;
}

const props = defineProps<Props>()
const emit = defineEmits(['change'])

const options = computed(() => Array(props.max).fill(0).map((_, index) => index + 1))

const handleChange = (event: Event) => {
  emit('change', (event.target as HTMLInputElement).value)
}
</script>
