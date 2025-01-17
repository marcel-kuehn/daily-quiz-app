<template>
  <div class="flex flex-col items-center gap-4 justify-center h-screen">
    <h1 class="text-primary-500 text-6xl font-bold">{{ $t('notFoundView.title') }}</h1>
    <p class="text-center">{{ $t('notFoundView.description') }}</p>
    <Button @click="$router.push('/')">{{ $t('notFoundView.button') }}</Button>
  </div>
</template>
