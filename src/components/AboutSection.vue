<template>
  <section id="about">
    <div class="container">
      <p class="section-label">À propos</p>
      <h2 class="section-title">Qui suis-je ?</h2>

      <div class="about-layout">

        <!-- Texte de présentation -->
        <div class="about-intro fade-up">
          <p>
            Mon parcours dev a démarré sur <strong>mobile</strong> — d'abord avec <strong>Swift</strong>
            sur iOS, puis <strong>Flutter</strong> pour le cross-platform. Avec le temps j'ai voulu
            élargir mon terrain de jeu et je me suis orienté vers le <strong>frontend web avec Vue.js</strong>,
            qui est aujourd'hui ma stack principale.
          </p>
          <p>
            En parallèle je m'intéresse de plus en plus au <strong>backend</strong> (Kotlin, Java, Spring Boot)
            et au <strong>DevOps</strong> — parce que comprendre ce qu'il y a derrière l'interface,
            ça change vraiment la façon de coder.
          </p>
          <p>
            En dehors du travail, j'aime bidouiller. Dernièrement je me suis lancé dans le
            <strong>self-hosting</strong> et franchement j'adore ça — héberger ses propres services,
            comprendre l'infra, garder le contrôle. Quand quelque chose m'accroche, je suis dedans
            à fond jusqu'à en maîtriser les rouages.
          </p>
        </div>

        <!-- Skills par catégorie -->
        <div class="skills-grid fade-up">
          <div v-for="category in skillCategories" :key="category.label" class="skill-category">
            <div class="skill-cat-header">
              <div class="skill-cat-icon">
                <i :class="category.icon" />
              </div>
              <span class="skill-cat-label">{{ category.label }}</span>
            </div>
            <div class="skill-tags">
              <span
                v-for="skill in category.skills"
                :key="skill.name"
                class="skill-tag"
                :class="skill.level"
              >
                {{ skill.name }}
              </span>
            </div>
          </div>
        </div>

      </div>

      <!-- Centres d'intérêt -->
      <div class="interests fade-up">
        <div v-for="interest in interests" :key="interest.label" class="interest-item">
          <div class="interest-icon">
            <i :class="interest.icon" />
          </div>
          <div class="interest-info">
            <span class="interest-label">{{ interest.label }}</span>
            <span class="interest-desc">{{ interest.desc }}</span>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'

const skillCategories = [
  {
    label: 'Mobile',
    icon: 'pi pi-mobile',
    skills: [
      { name: 'Flutter', level: 'strong' },
      { name: 'Dart', level: 'strong' },
      { name: 'Swift', level: 'medium' },
      { name: 'iOS', level: 'medium' },
    ],
  },
  {
    label: 'Frontend',
    icon: 'pi pi-desktop',
    skills: [
      { name: 'Vue.js', level: 'strong' },
      { name: 'TypeScript', level: 'strong' },
      { name: 'HTML / CSS', level: 'strong' },
      { name: 'Vite', level: 'medium' },
    ],
  },
  {
    label: 'Backend & Intérêts',
    icon: 'pi pi-server',
    skills: [
      { name: 'Kotlin', level: 'learning' },
      { name: 'Java', level: 'learning' },
      { name: 'Spring Boot', level: 'learning' },
      { name: 'Node.js', level: 'medium' },
    ],
  },
  {
    label: 'Outils & DevOps',
    icon: 'pi pi-wrench',
    skills: [
      { name: 'Git / GitHub', level: 'strong' },
      { name: 'Docker', level: 'medium' },
      { name: 'Self-hosting', level: 'medium' },
      { name: 'CI/CD', level: 'learning' },
    ],
  },
]

const interests = [
  {
    icon: 'pi pi-home',
    label: 'Self-hosting',
    desc: 'Héberger ses propres services, bidouiller son infra, garder le contrôle.',
  },
  {
    icon: 'pi pi-star',
    label: 'Projets perso',
    desc: 'Des side projects pour explorer de nouvelles technos, souvent à fond.',
  },
  {
    icon: 'pi pi-wrench',
    label: 'Bricolage tech',
    desc: 'Raspberry Pi, home lab, automatisation — si c\'est bidouillable, je teste.',
  },
  {
    icon: 'pi pi-search',
    label: 'Veille techno',
    desc: 'Toujours à l\'affût de nouvelles stacks, frameworks ou patterns.',
  },
]

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add('visible')
      })
    },
    { threshold: 0.1 },
  )
  document.querySelectorAll('#about .fade-up').forEach((el) => observer.observe(el))
})
</script>

<style scoped>
.about-layout {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  margin-bottom: 3rem;
  align-items: start;
}

/* ── Intro ── */
.about-intro {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.about-intro p {
  font-size: 0.925rem;
  color: var(--text-secondary);
  line-height: 1.8;
}

.about-intro strong {
  color: var(--text-primary);
  font-weight: 600;
}

/* ── Skills ── */
.skills-grid {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.skill-category {
  background: var(--bg-card);
  border: 1px solid var(--border-subtle);
  border-radius: 12px;
  padding: 1rem 1.1rem;
  transition: border-color 0.2s ease;
}

.skill-category:hover {
  border-color: rgba(124, 106, 247, 0.2);
}

.skill-cat-header {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.75rem;
}

.skill-cat-icon {
  width: 28px;
  height: 28px;
  border-radius: 7px;
  background: var(--accent-glow);
  border: 1px solid rgba(124, 106, 247, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--accent-light);
  font-size: 0.75rem;
  flex-shrink: 0;
}

.skill-cat-label {
  font-size: 0.78rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--text-secondary);
}

.skill-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
}

.skill-tag {
  display: inline-flex;
  align-items: center;
  padding: 0.2rem 0.65rem;
  border-radius: 999px;
  font-size: 0.72rem;
  font-weight: 500;
  letter-spacing: 0.03em;
  transition: opacity 0.2s ease;
}

/* Niveaux */
.skill-tag.strong {
  background: rgba(124, 106, 247, 0.12);
  color: var(--accent-light);
  border: 1px solid rgba(124, 106, 247, 0.25);
}

.skill-tag.medium {
  background: rgba(99, 179, 237, 0.1);
  color: #90cdf4;
  border: 1px solid rgba(99, 179, 237, 0.2);
}

.skill-tag.learning {
  background: rgba(246, 173, 85, 0.08);
  color: #f6ad55;
  border: 1px solid rgba(246, 173, 85, 0.18);
}

/* ── Intérêts ── */
.interests {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
}

.interest-item {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  background: var(--bg-card);
  border: 1px solid var(--border-subtle);
  border-radius: 12px;
  padding: 1.1rem;
  transition: border-color 0.2s ease, transform 0.2s ease;
}

.interest-item:hover {
  border-color: rgba(124, 106, 247, 0.2);
  transform: translateY(-2px);
}

.interest-icon {
  width: 36px;
  height: 36px;
  border-radius: 9px;
  background: var(--accent-glow);
  border: 1px solid rgba(124, 106, 247, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--accent-light);
  font-size: 0.9rem;
}

.interest-info {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.interest-label {
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--text-primary);
}

.interest-desc {
  font-size: 0.78rem;
  color: var(--text-muted);
  line-height: 1.5;
}

/* ── Légende niveaux ── */
.legend {
  display: flex;
  align-items: center;
  gap: 1.25rem;
  margin-top: 0.5rem;
}

.legend-item {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.72rem;
  color: var(--text-muted);
}

.legend-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
}

.legend-dot.strong { background: var(--accent-light); }
.legend-dot.medium { background: #90cdf4; }
.legend-dot.learning { background: #f6ad55; }

/* ── Responsive ── */
@media (max-width: 900px) {
  .about-layout {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .interests {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 480px) {
  .interests {
    grid-template-columns: 1fr 1fr;
    gap: 0.75rem;
  }

  .interest-item:hover {
    transform: none;
  }
}
</style>
