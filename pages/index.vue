<template>
  <div class="py-10 space-y-10">
    <p class="text-center font-bold capitalize text-2xl">
      my template
      <NuxtLink to="https://v3.nuxtjs.org/">
        <span class="cursor-pointer hover:text-blue-500">nuxt3</span>
      </NuxtLink>
    </p>
    <div class="px-10 md:px-40 space-y-10 flex flex-col">
      <NuxtLink to="https://heroicons.com">
        <span
          class="text-xl font-semibold capitalize cursor-pointer hover:text-blue-500"
          >With heroicons 2.0</span
        >
      </NuxtLink>
      <div class="flex justify-around">
        <div class="flex flex-col items-center">
          <span class="uppercase text-lg font-medium">outline</span>
          <HeroIcon
            class-name="h-10 w-10 text-blue-500"
            type="outline"
            icon="AcademicCapIcon"
          />
        </div>
        <div class="flex flex-col items-center">
          <span class="uppercase text-lg font-medium">solid</span>
          <HeroIcon
            class-name="h-10 w-10 text-blue-500"
            type="solid"
            icon="AcademicCapIcon"
          />
        </div>
        <div class="flex flex-col items-center">
          <span class="uppercase text-lg font-medium">mini</span>
          <HeroIcon
            class-name="h-8 w-8 text-blue-500"
            type="mini"
            icon="AcademicCapIcon"
          />
        </div>
      </div>
      <NuxtLink to="https://headlessui.com">
        <span
          class="text-xl font-semibold capitalize cursor-pointer hover:text-blue-500"
          >With headlessUI 1.7</span
        >
      </NuxtLink>
      <NuxtLink to="https://tailwindcss.nuxtjs.org">
        <span
          class="text-xl font-semibold capitalize cursor-pointer hover:text-blue-500"
          >With NuxtTailwind</span
        >
      </NuxtLink>
    </div>
  </div>
</template>
