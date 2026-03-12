<template>
  <div class="app">
    <AppHeader />
    <main>
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ExperienceSection />
      <EducationSection />
      <ContactSection />
    </main>
    <footer class="footer">
      <div class="container footer-inner">
        <span class="footer-copy">© {{ new Date().getFullYear() }} Simon Lejeune</span>
        <span class="footer-made">Made with <span class="heart">♥</span> from Lille by Simon</span>
        <div class="footer-links">
          <a href="https://github.com/simonlejeune" target="_blank" rel="noopener" aria-label="GitHub">
            <i class="pi pi-github" />
          </a>
          <a href="https://www.linkedin.com/in/simon-lejeune/" target="_blank" rel="noopener" aria-label="LinkedIn">
            <i class="pi pi-linkedin" />
          </a>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import AppHeader from './components/AppHeader.vue'
import HeroSection from './components/HeroSection.vue'
import AboutSection from './components/AboutSection.vue'
import ProjectsSection from './components/ProjectsSection.vue'
import ExperienceSection from './components/ExperienceSection.vue'
import EducationSection from './components/EducationSection.vue'
import ContactSection from './components/ContactSection.vue'
</script>

<style scoped>
.app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

main {
  flex: 1;
}

.footer {
  border-top: 1px solid var(--border-subtle);
  padding: 2rem 0;
  margin-top: 4rem;
}

.footer-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.footer-copy {
  font-size: 0.8rem;
  color: var(--text-muted);
}

.footer-made {
  font-size: 0.8rem;
  color: var(--text-muted);
}

.heart {
  color: #f87171;
  display: inline-block;
  animation: heartbeat 1.8s ease infinite;
}

@keyframes heartbeat {
  0%, 100% { transform: scale(1); }
  15% { transform: scale(1.3); }
  30% { transform: scale(1); }
  45% { transform: scale(1.2); }
  60% { transform: scale(1); }
}

.footer-links {
  display: flex;
  gap: 1rem;
}

.footer-links a {
  color: var(--text-muted);
  font-size: 1rem;
  transition: color 0.2s ease;
}

.footer-links a:hover {
  color: var(--text-primary);
}

@media (max-width: 640px) {
  .footer-inner {
    flex-direction: column;
    gap: 0.75rem;
    text-align: center;
  }
}

@media (max-width: 480px) {
  .footer {
    padding: 1.5rem 0;
    margin-top: 2rem;
  }
}
</style>
