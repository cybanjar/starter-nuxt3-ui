<template>
  <div class="bg-slate-50 w-full">
    <div class="md:container mx-auto py-4"> 
      <!-- <ClientOnly>
        <UButton
          :icon="isDark ? 'i-heroicons-moon-20-solid' : 'i-heroicons-sun-20-solid'"
          color="gray"
          variant="ghost"
          aria-label="Theme"
          @click="isDark = !isDark"
        />

        <template #fallback>
          <div class="w-8 h-8" />
        </template>
      </ClientOnly> -->
      
      <ul class="w-full md:w-auto flex space-x-4 list-none">
        <li>
          <div class="flex ml-4 md:flex hidden cursor-pointer">
            Package Home
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
const colorMode = useColorMode()

const isDark = computed({
  get () {
    return colorMode.value === 'dark'
  },
  set () {
    colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
  }
})
</script>