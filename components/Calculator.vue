<template>
  <div>
    <div class="text-9xl flex justify-center items-center pt-3 dark:text-gray-300">
      <div class="flex flex-col text-center">
        {{ state.score }}
        <span class="text-3xl">
          {{ message }}
        </span>
      </div>
    </div>
    <Range
      :max="4"
      :value="state.uncertainty"
      name="Uncertainty"
      start-label="I know exactly what to do"
      end-label="No Idea what to do"
      class="mt-5"
      @change="handleUncertaintyChange"
    />
    <Range
      :max="4"
      :value="state.effort"
      name="Effort"
      start-label="It takes no effort"
      end-label="It will take a lot of effort"
      class="mt-5"
      @change="handleEffortChange"
    />
    <Range
      :max="4"
      :value="state.complexity"
      name="Complexity"
      start-label="Low Complexity"
      end-label="High Complexity"
      class="mt-5"
      @change="handleComplexityChange"
    />
    <div class="flex justify-center mt-10">
      <div class="flex-initial w-64">
        <Button
          class="mt-3"
          name="Reset"
          @click="resetState"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, reactive } from 'vue'
import Range from '~/components/Range.vue'
import { getStoryPoints } from '~/utils/getStoryPoints'
import { Criteria, MESSAGES } from '~/constants'

interface Emits {
     (eventName: 'change', score: number): void
}

const emit = defineEmits<Emits>()

// state management
const INITIAL_STATE = {
  [Criteria.Uncertainty]: 1,
  [Criteria.Complexity]: 1,
  [Criteria.Effort]: 1,
  score: 1
}

const state = reactive({ ...INITIAL_STATE })
const message = computed(() => MESSAGES[state.score])

const calculateScore = () => {
  state.score = getStoryPoints({
    uncertainty: state[Criteria.Uncertainty],
    complexity: state[Criteria.Complexity],
    effort: state[Criteria.Effort]
  })

  emit('change', state.score)
}

const resetState = () => {
  state[Criteria.Complexity] = INITIAL_STATE[Criteria.Complexity]
  state[Criteria.Effort] = INITIAL_STATE[Criteria.Effort]
  state[Criteria.Uncertainty] = INITIAL_STATE[Criteria.Uncertainty]
  calculateScore()
}

// change handlers
const getChangeHandler = (criteria: Criteria) => (value: string) => {
  state[criteria] = Number(value)
  calculateScore()
}

const handleUncertaintyChange = getChangeHandler(Criteria.Uncertainty)
const handleComplexityChange = getChangeHandler(Criteria.Complexity)
const handleEffortChange = getChangeHandler(Criteria.Effort)

</script>
