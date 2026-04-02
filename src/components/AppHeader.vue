<template>
  <header :class="['header', { scrolled: isScrolled }]">
    <div class="header-inner container">
      <a href="#hero" class="logo" @click.prevent="scrollTo('hero')">
        <span class="logo-name">Simon Lejeune</span>
      </a>

      <nav class="nav-desktop">
        <a
          v-for="item in navItems"
          :key="item.id"
          href="#"
          :class="['nav-link', { active: activeSection === item.id }]"
          @click.prevent="scrollTo(item.id)"
        >
          {{ item.label }}
        </a>
      </nav>

      <div class="nav-actions">
        <button class="btn-theme" @click="toggleTheme" :aria-label="isDark ? 'Passer en mode clair' : 'Passer en mode sombre'">
          <i :class="isDark ? 'pi pi-sun' : 'pi pi-moon'" />
        </button>
        <a href="#contact" class="btn-contact" @click.prevent="scrollTo('contact')">
          <i class="pi pi-envelope" />
          <span>Contact</span>
        </a>
        <button class="burger" :class="{ open: menuOpen }" @click="menuOpen = !menuOpen" aria-label="Menu">
          <span /><span /><span />
        </button>
      </div>
    </div>

    <nav :class="['nav-mobile', { open: menuOpen }]">
      <a
        v-for="item in navItems"
        :key="item.id"
        href="#"
        class="nav-mobile-link"
        @click.prevent="() => { scrollTo(item.id); menuOpen = false }"
      >
        {{ item.label }}
      </a>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useTheme } from '../composables/useTheme'

const navItems = [
  { id: 'about', label: 'À propos' },
  { id: 'projects', label: 'Projets' },
  { id: 'experience', label: 'Expériences' },
  { id: 'education', label: 'Formations' },
  { id: 'contact', label: 'Contact' },
]

const isScrolled = ref(false)
const activeSection = ref('hero')
const menuOpen = ref(false)
const { isDark, toggle: toggleTheme } = useTheme()

function scrollTo(id: string) {
  const el = document.getElementById(id)
  if (el) {
    const offset = 80
    const top = el.getBoundingClientRect().top + window.scrollY - offset
    window.scrollTo({ top, behavior: 'smooth' })
  }
}

function onScroll() {
  isScrolled.value = window.scrollY > 20

  const sections = ['hero', 'about', 'projects', 'experience', 'education', 'contact']
  for (const id of [...sections].reverse()) {
    const el = document.getElementById(id)
    if (el && window.scrollY >= el.offsetTop - 120) {
      activeSection.value = id
      break
    }
  }
}

onMounted(() => window.addEventListener('scroll', onScroll, { passive: true }))
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  transition: background 0.3s ease, border-color 0.3s ease, backdrop-filter 0.3s ease;
  border-bottom: 1px solid transparent;
}

.header.scrolled {
  background: var(--bg-header);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border-bottom-color: var(--border-subtle);
}

.header-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 72px;
}

.logo {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;
}

.logo-name {
  font-size: 1rem;
  font-weight: 600;
  color: var(--text-primary);
  letter-spacing: -0.01em;
}

.nav-desktop {
  display: flex;
  align-items: center;
  gap: 0.25rem;
}

.nav-link {
  padding: 0.4rem 0.9rem;
  border-radius: 8px;
  font-size: 0.875rem;
  font-weight: 450;
  color: var(--text-secondary);
  transition: color 0.2s ease, background 0.2s ease;
  text-decoration: none;
}

.nav-link:hover,
.nav-link.active {
  color: var(--text-primary);
  background: var(--accent-glow);
}

.nav-link.active {
  color: var(--accent-light);
}

.nav-actions {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.btn-theme {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 8px;
  border: 1px solid var(--border);
  background: none;
  color: var(--text-secondary);
  font-size: 0.9rem;
  cursor: pointer;
  transition: color 0.2s ease, border-color 0.2s ease, background 0.2s ease, transform 0.15s ease;
}

.btn-theme:hover {
  color: var(--text-primary);
  border-color: var(--accent);
  background: var(--accent-glow);
}

@media (hover: hover) {
  .btn-theme:hover {
    transform: rotate(15deg);
  }
}

.btn-contact {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.45rem 1rem;
  border-radius: 8px;
  font-size: 0.875rem;
  font-weight: 500;
  background: var(--accent);
  color: #fff;
  border: none;
  cursor: pointer;
  text-decoration: none;
  transition: background 0.2s ease, transform 0.15s ease;
}

.btn-contact:hover {
  background: var(--accent-light);
  transform: translateY(-1px);
}

.btn-contact .pi {
  font-size: 0.8rem;
}

.burger {
  display: none;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  width: 36px;
  height: 36px;
  padding: 6px;
  background: none;
  border: 1px solid var(--border);
  border-radius: 8px;
  cursor: pointer;
}

.burger span {
  display: block;
  height: 1.5px;
  background: var(--text-secondary);
  border-radius: 2px;
  transition: transform 0.25s ease, opacity 0.25s ease;
}

.burger.open span:nth-child(1) { transform: translateY(6.5px) rotate(45deg); }
.burger.open span:nth-child(2) { opacity: 0; }
.burger.open span:nth-child(3) { transform: translateY(-6.5px) rotate(-45deg); }

.nav-mobile {
  display: none;
  flex-direction: column;
  padding: 0;
  gap: 0.25rem;
  background: var(--bg-header-solid);
  backdrop-filter: blur(16px);
  border-bottom: 1px solid transparent;
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease, padding 0.3s ease, border-color 0.3s ease;
}

.nav-mobile.open {
  max-height: 400px;
  padding: 0.75rem 1.25rem 1.25rem;
  border-bottom-color: var(--border-subtle);
}

.nav-mobile-link {
  padding: 0.6rem 0.75rem;
  border-radius: 8px;
  font-size: 0.9rem;
  color: var(--text-secondary);
  text-decoration: none;
  transition: color 0.2s ease, background 0.2s ease;
}

.nav-mobile-link:hover {
  color: var(--text-primary);
  background: rgba(255, 255, 255, 0.05);
}

@media (max-width: 768px) {
  .nav-desktop {
    display: none;
  }

  .burger {
    display: flex;
  }

  .nav-mobile {
    display: flex;
  }
}

@media (max-width: 480px) {
  .header-inner {
    padding: 0 1.25rem;
  }

  .btn-contact span {
    display: none;
  }

  .btn-contact {
    padding: 0.5rem 0.65rem;
    min-width: 36px;
    justify-content: center;
  }

  .btn-contact .pi {
    font-size: 0.95rem;
    margin: 0;
  }
}
</style>
