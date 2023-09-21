<template>
  <div class="h-screen flex items-center justify-center">
    <h1>{{ $t('hello', { name: 'vue-i18n' }) }} 👋 </h1>

    <USelect 
      v-model="locale" 
      :options="countries" 
      option-attribute="name" />

  </div>
</template>

<script setup>
const { locale } = useI18n()
const localePath = useLocalePath()

const countries = [
  {
    name: 'English',
    value: 'en'
  }, 
  {
    name: 'France',
    value: 'fr',
  }
]
</script>