<template>
  <div>
    <h1 class="text-3xl dark:text-gray-300">
      Calculate story points
    </h1>
    <div class="absolute top-5 right-16">
      <NuxtLink to="/educate">
        <img
          alias="More info"
          title="More info"
          class="w-8 h-8"
          src="~assets/info.svg"
        >
      </NuxtLink>
    </div>
    <Calculator />
  </div>
</template>
