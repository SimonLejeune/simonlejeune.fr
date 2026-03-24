import { ref, watchEffect } from 'vue'

const isDark = ref(true)

// Initialise depuis localStorage ou préférence système
const stored = localStorage.getItem('theme')
if (stored) {
  isDark.value = stored === 'dark'
} else {
  isDark.value = window.matchMedia('(prefers-color-scheme: dark)').matches
}

watchEffect(() => {
  document.documentElement.classList.toggle('dark', isDark.value)
  document.documentElement.classList.toggle('light', !isDark.value)
  localStorage.setItem('theme', isDark.value ? 'dark' : 'light')
})

export function useTheme() {
  function toggle() {
    isDark.value = !isDark.value
  }

  return { isDark, toggle }
}
