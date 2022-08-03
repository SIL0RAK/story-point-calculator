<template>
  <Container title="Story about Story points">
    <div class="absolute top-5 right-16">
      <NuxtLink to="/">
        <img
          alias="More info"
          title="More info"
          class="w-8 h-8"
          src="~assets/calculator.svg"
        >
      </NuxtLink>
    </div>
    <Article title="Complexity">
      <template v-slot:title-image>
        <img
          alias="Complexity"
          title="Complexity"
          class="w-8 h-8"
          src="~assets/complexity.svg"
        >
      </template>
      How many tricky algorithms or query's you will have to write.
      <p class="mt-3">
        <b>Example:</b>
        <ul class="list-disc pl-5 mt-3">
          <li>Task requires to write tricky algorithms of queries (high complexity).</li>
          <li>Task requires to print different word depending on date (low complexity).</li>
        </ul>
        <br>
        First task is very hard and will require a lot of brain cells to do.
        Second task is easy and don't require knowledge structure.
      </p>
    </Article>

    <Article title="Effort">
      <template v-slot:title-image>
        <img
          alias="Effort"
          title="Effort"
          class="w-8 h-8"
          src="~assets/hammer.svg"
        >
      </template>
      <p class="mt-3">
        <b>Example:</b>
        <ul class="list-disc pl-5 mt-3">
          <li>Task requires to update service in controller (low effort).</li>
          <li>Task requires to update same service in 4 different repositories (high effort).</li>
        </ul>
        <br>
        Both of these tasks have same Complexity, but requires different Effort.
      </p>
    </Article>

    <Article title="Uncertainty">
      <template v-slot:title-image>
        <img
          alias="Uncertainty"
          title="Uncertainty"
          class="w-8 h-8"
          src="~assets/question.svg"
        >
      </template>
      <p class="mt-3">
        <b>Example:</b>
        <ul class="list-disc pl-5 mt-3">
          <li>Task requires to update service in project that you created (low uncertainty).</li>
          <li>Task requires to update service in project that you are hearing for the first time and it is written in Fortran (hight uncertainty).</li>
        </ul>
        <br>
        These tasks are similar in sense that they require to update service,
        but in first example it is more clear what to do, because you are familiar with project.
        In second example you are not sure what how/where changes needs to be done so Uncertainty is high.
      </p>
    </Article>
  </Container>
</template>
