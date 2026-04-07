<template>
  <section id="projects">
    <div class="container">
      <p class="section-label">Réalisations</p>
      <h2 class="section-title">Mes projets</h2>

      <div class="projects-grid">
        <article
          v-for="(project, i) in projects"
          :key="project.title"
          class="project-card fade-up"
          :style="{ transitionDelay: `${i * 80}ms` }"
        >
          <div class="card-header">
            <div class="card-icon">
              <i :class="project.icon" />
            </div>
            <div class="card-links">
              <a
                v-if="project.github"
                :href="project.github"
                target="_blank"
                rel="noopener"
                class="card-link"
                title="Code source"
              >
                <i class="pi pi-github" />
              </a>
              <a
                v-if="project.url"
                :href="project.url"
                target="_blank"
                rel="noopener"
                class="card-link"
                title="Voir le site"
              >
                <i class="pi pi-external-link" />
              </a>
            </div>
          </div>

          <div class="card-badge" v-if="project.type">{{ project.type }}</div>

          <h3 class="card-title">{{ project.title }}</h3>
          <p class="card-desc">{{ project.description }}</p>

          <div class="card-tags">
            <span v-for="tag in project.tags" :key="tag" class="tag">{{
              tag
            }}</span>
          </div>
        </article>
      </div>

      <div class="projects-footer fade-up">
        <a
          href="https://github.com/simonlejeune"
          target="_blank"
          rel="noopener"
          class="cta-secondary"
        >
          <i class="pi pi-github" />
          Voir plus sur GitHub
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted } from "vue";

const projects = [
  {
    title: "De gauche ou de droite",
    description:
      "Application web pour débattre et voter si un sujet est plutôt de gauche ou de droite.",
    icon: "pi pi-envelope",
    type: "Projet perso",
    tags: ["Vue.js", "Node.js", "TypeScript", "Vite"],
    // github: "https://github.com/SimonLejeune/de-gauche-ou-de-droite",
    url: "https://degaucheoudedroite.simonlejeune.fr/",
  },
  {
    title: "Pokédex",
    description:
      "Application web de Pokédex permettant de consulter tous les Pokémon, leurs stats, types et évolutions. Données récupérées depuis la PokéAPI, interface fluide et réactive construite avec Vue.js.",
    icon: "pi pi-star",
    type: "Projet perso",
    tags: ["Vue.js", "PokéAPI", "TypeScript", "Vite"],
    github: "https://github.com/SimonLejeune",
    url: null,
  },
  {
    title: "simonlejeune.fr",
    description:
      "Mon portfolio personnel — le site que vous consultez en ce moment. Single page app construite avec Vue 3, TypeScript et PrimeVue (thème Aura), déployée sur simonlejeune.fr.",
    icon: "pi pi-user",
    type: "Portfolio",
    tags: ["Vue.js", "TypeScript", "PrimeVue", "Vite"],
    github: "https://github.com/SimonLejeune",
    url: "https://simonlejeune.fr",
  },
];

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.1 },
  );
  document
    .querySelectorAll("#projects .fade-up")
    .forEach((el) => observer.observe(el));
});
</script>

<style scoped>
.projects-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.25rem;
  margin-bottom: 3rem;
}

.project-card {
  background: var(--bg-card);
  border: 1px solid var(--border-subtle);
  border-radius: 14px;
  padding: 1.75rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  transition:
    border-color 0.25s ease,
    transform 0.25s ease,
    background 0.25s ease;
}

.project-card:hover {
  border-color: rgba(124, 106, 247, 0.3);
  background: var(--bg-card-hover);
  transform: translateY(-3px);
}

.card-header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
}

.card-icon {
  width: 42px;
  height: 42px;
  border-radius: 10px;
  background: var(--accent-glow);
  border: 1px solid rgba(124, 106, 247, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--accent-light);
  font-size: 1.1rem;
}

.card-links {
  display: flex;
  gap: 0.5rem;
}

.card-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 8px;
  border: 1px solid var(--border);
  color: var(--text-muted);
  font-size: 0.85rem;
  transition:
    color 0.2s ease,
    border-color 0.2s ease,
    background 0.2s ease;
}

.card-link:hover {
  color: var(--text-primary);
  border-color: var(--accent);
  background: var(--accent-glow);
}

.card-badge {
  font-size: 0.7rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--text-muted);
}

.card-title {
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--text-primary);
  line-height: 1.3;
}

.card-desc {
  font-size: 0.875rem;
  color: var(--text-secondary);
  line-height: 1.65;
  flex: 1;
}

.card-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  margin-top: 0.25rem;
}

.projects-footer {
  text-align: center;
}

.cta-secondary {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.7rem 1.4rem;
  border-radius: 10px;
  border: 1px solid var(--border);
  color: var(--text-secondary);
  font-size: 0.875rem;
  font-weight: 500;
  text-decoration: none;
  transition:
    border-color 0.2s ease,
    color 0.2s ease,
    transform 0.15s ease;
}

.cta-secondary:hover {
  border-color: var(--accent);
  color: var(--text-primary);
  transform: translateY(-2px);
}

@media (max-width: 768px) {
  .projects-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  .project-card {
    padding: 1.25rem;
  }
}

@media (max-width: 480px) {
  .projects-footer {
    display: flex;
    justify-content: center;
  }

  .cta-secondary {
    width: 100%;
    justify-content: center;
  }
}
</style>
