<template>
  <section id="hero" class="hero">
    <div class="container hero-inner">
      <div class="hero-badge fade-up">
        <span class="badge-dot" />
        Disponible pour de nouvelles missions
      </div>

      <h1 class="hero-title fade-up">
        <span class="line">Simon</span>
        <span class="line accent-text">Lejeune</span>
      </h1>

      <p class="hero-subtitle fade-up">
        Parti du développement mobile — Swift, puis Flutter — je me suis tourné vers
        le frontend web avec Vue.js. Curieux, bricoleur, toujours partant pour un nouveau
        projet ou une techno à explorer.
      </p>

      <div class="hero-stack fade-up">
        <span v-for="tech in stack" :key="tech" class="tag">{{ tech }}</span>
      </div>

      <div class="hero-cta fade-up">
        <a href="#projects" class="cta-primary" @click.prevent="scrollTo('projects')">
          Voir mes projets
          <i class="pi pi-arrow-right" />
        </a>
        <a href="#contact" class="cta-secondary" @click.prevent="scrollTo('contact')">
          Me contacter
        </a>
      </div>

      <div class="hero-links fade-up">
        <a v-for="link in links" :key="link.label" :href="link.url" target="_blank" rel="noopener" class="hero-link">
          <i :class="link.icon" />
          {{ link.label }}
        </a>
      </div>
    </div>

    <div class="hero-glow" />
  </section>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'

const stack = ['Vue.js', 'Flutter', 'TypeScript', 'Swift', 'Kotlin', 'Git']

const links = [
  { label: 'GitHub', icon: 'pi pi-github', url: 'https://github.com/simonlejeune' },
  { label: 'LinkedIn', icon: 'pi pi-linkedin', url: 'https://www.linkedin.com/in/simon-lejeune/' },
]

function scrollTo(id: string) {
  const el = document.getElementById(id)
  if (el) {
    const top = el.getBoundingClientRect().top + window.scrollY - 80
    window.scrollTo({ top, behavior: 'smooth' })
  }
}

onMounted(() => {
  const els = document.querySelectorAll('#hero .fade-up')
  els.forEach((el, i) => {
    setTimeout(() => el.classList.add('visible'), 100 + i * 120)
  })
})
</script>

<style scoped>
.hero {
  min-height: 100svh;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  padding: 8rem 0 4rem;
}

.hero-inner {
  position: relative;
  z-index: 1;
}

.hero-glow {
  position: absolute;
  top: -20%;
  left: 50%;
  transform: translateX(-50%);
  width: 800px;
  height: 600px;
  background: radial-gradient(ellipse at center, rgba(124, 106, 247, 0.1) 0%, transparent 70%);
  pointer-events: none;
}

.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.35rem 0.85rem;
  border-radius: 999px;
  border: 1px solid rgba(124, 106, 247, 0.3);
  background: rgba(124, 106, 247, 0.06);
  font-size: 0.8rem;
  color: var(--accent-light);
  margin-bottom: 2rem;
}

.badge-dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #4ade80;
  box-shadow: 0 0 8px rgba(74, 222, 128, 0.7);
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.4; }
}

.hero-title {
  display: flex;
  flex-direction: column;
  font-size: clamp(3.5rem, 8vw, 6rem);
  font-weight: 800;
  line-height: 1;
  letter-spacing: -0.03em;
  margin-bottom: 1.5rem;
}

.line {
  display: block;
}

.accent-text {
  color: var(--accent-light);
}

.hero-subtitle {
  font-size: clamp(1rem, 2vw, 1.15rem);
  color: var(--text-secondary);
  max-width: 520px;
  line-height: 1.7;
  margin-bottom: 2rem;
}

.hero-stack {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 2.5rem;
}

.hero-cta {
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
  margin-bottom: 2.5rem;
}

.cta-primary {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  border-radius: 10px;
  background: var(--accent);
  color: #fff;
  font-size: 0.9rem;
  font-weight: 600;
  text-decoration: none;
  transition: background 0.2s ease, transform 0.15s ease;
}

.cta-primary:hover {
  background: var(--accent-light);
  transform: translateY(-2px);
}

.cta-primary .pi {
  font-size: 0.8rem;
  transition: transform 0.2s ease;
}

.cta-primary:hover .pi {
  transform: translateX(3px);
}

.cta-secondary {
  display: inline-flex;
  align-items: center;
  padding: 0.75rem 1.5rem;
  border-radius: 10px;
  border: 1px solid var(--border);
  color: var(--text-secondary);
  font-size: 0.9rem;
  font-weight: 500;
  text-decoration: none;
  transition: border-color 0.2s ease, color 0.2s ease, transform 0.15s ease;
}

.cta-secondary:hover {
  border-color: var(--accent);
  color: var(--text-primary);
  transform: translateY(-2px);
}

.hero-links {
  display: flex;
  gap: 1.25rem;
}

.hero-link {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.875rem;
  color: var(--text-muted);
  text-decoration: none;
  transition: color 0.2s ease;
}

.hero-link:hover {
  color: var(--text-primary);
}

.hero-link .pi {
  font-size: 1rem;
}

@media (max-width: 768px) {
  .hero {
    padding: 6rem 0 3rem;
    align-items: flex-start;
  }

  .hero-badge {
    margin-bottom: 1.5rem;
  }

  .hero-title {
    margin-bottom: 1.25rem;
  }

  .hero-subtitle {
    max-width: 100%;
    margin-bottom: 1.5rem;
  }

  .hero-stack {
    margin-bottom: 2rem;
  }

  .hero-cta {
    flex-direction: column;
    align-items: stretch;
    margin-bottom: 2rem;
  }

  .cta-primary,
  .cta-secondary {
    justify-content: center;
    padding: 0.85rem 1.5rem;
  }
}

@media (max-width: 480px) {
  .hero {
    padding: 5.5rem 0 2.5rem;
  }
}
</style>
