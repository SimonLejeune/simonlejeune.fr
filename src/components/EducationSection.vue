<template>
  <section id="education">
    <div class="container">
      <p class="section-label">Formations</p>
      <h2 class="section-title">Parcours académique</h2>

      <!-- Diplôme principal -->
      <div class="epitech-card fade-up">
        <div class="epitech-left">
          <div class="epitech-logo">
            <i class="pi pi-graduation-cap" />
          </div>
          <div class="epitech-info">
            <div class="epitech-badge">Bac+5</div>
            <h3 class="epitech-title">Expert en Technologies de l'Information</h3>
            <p class="epitech-school">Epitech — European Institute of Technology · Lille</p>
          </div>
        </div>
        <div class="epitech-right">
          <span class="epitech-years">2016 – 2021</span>
          <span class="epitech-duration">5 ans</span>
        </div>
        <p class="epitech-desc">
          À travers des projets concrets et une pédagogie par la pratique, Epitech m'a permis d'acquérir
          une solide maîtrise du développement logiciel. Autonomie, résolution de problèmes complexes,
          travail en équipe et innovation technique sont au cœur de cette formation d'excellence.
        </p>
      </div>

      <!-- Année à l'étranger -->
      <div class="exchange-card fade-up">
        <div class="exchange-icon">
          <i class="pi pi-globe" />
        </div>
        <div class="exchange-content">
          <div class="exchange-header">
            <div>
              <div class="exchange-badge">Échange universitaire</div>
              <h3 class="exchange-title">Année académique à l'étranger</h3>
              <p class="exchange-school">UQAR — Université du Québec à Rimouski · Lévis, Québec, Canada</p>
            </div>
            <div class="exchange-period">
              <span class="exchange-years">2019</span>
              <span class="exchange-duration">1 an</span>
            </div>
          </div>
          <p class="exchange-desc">
            Année académique passée au Québec dans le cadre du programme d'échange Epitech.
            Une expérience enrichissante sur le plan humain et technique, avec une immersion
            complète dans la culture nord-américaine et un environnement académique anglophone.
          </p>
        </div>
      </div>

      <!-- Stages -->
      <div class="stages-header fade-up">
        <span class="stages-label">Stages réalisés pendant la formation</span>
      </div>

      <div class="stages-grid">
        <div
          v-for="(stage, i) in stages"
          :key="stage.company"
          class="stage-card fade-up"
          :style="{ transitionDelay: `${i * 80}ms` }"
        >
          <div class="stage-top">
            <div class="stage-icon">
              <i :class="stage.icon" />
            </div>
            <div class="stage-period">
              <span class="stage-type">{{ stage.type }}</span>
              <span class="stage-years">{{ stage.years }}</span>
            </div>
          </div>
          <h4 class="stage-role">{{ stage.role }}</h4>
          <p class="stage-company">{{ stage.company }} · {{ stage.city }}</p>
          <p v-if="stage.description" class="stage-desc">{{ stage.description }}</p>
          <div class="stage-tags">
            <span v-for="tag in stage.tags" :key="tag" class="tag">{{ tag }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'

const stages = [
  {
    role: 'Développeur d\'applications mobiles',
    company: 'Niji',
    city: 'Lille',
    type: 'Stage',
    years: 'Mars – Août 2021',
    icon: 'pi pi-mobile',
    description: 'Stage de fin d\'études. Mission sur l\'application Courses U de la Coopérative U, développée en Swift pour iOS.',
    tags: ['Swift', 'iOS', 'Git', 'GitLab', 'JIRA'],
  },
  {
    role: 'Développeur iOS',
    company: 'Tymate',
    city: 'Lille',
    type: 'Stage',
    years: 'Avr. – Août 2019',
    icon: 'pi pi-server',
    description: 'Développement d\'applications mobiles, dont une application de centralisation de blogs et des solutions digitales pour Sergic.',
    tags: ['Swift', 'iOS', 'Mobile'],
  },
  {
    role: 'Développeur iOS',
    company: 'WAZAPP',
    city: 'Lille',
    type: 'Stage',
    years: 'Juil. – Déc. 2017',
    icon: 'pi pi-code',
    description: 'Application de guidage à vélo pour la Métropole de Lille et plateforme de gestion de fichiers pour Naval Group.',
    tags: ['Swift', 'iOS', 'Mobile'],
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
  document.querySelectorAll('#education .fade-up').forEach((el) => observer.observe(el))
})
</script>

<style scoped>
/* ── Epitech card ── */
.epitech-card {
  display: grid;
  grid-template-columns: 1fr auto;
  grid-template-rows: auto auto;
  gap: 0.75rem 1.5rem;
  background: var(--bg-card);
  border: 1px solid rgba(124, 106, 247, 0.25);
  border-radius: 16px;
  padding: 1.75rem;
  margin-bottom: 2.5rem;
  position: relative;
  overflow: hidden;
  transition: border-color 0.25s ease;
}

.epitech-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(90deg, var(--accent), var(--accent-light), transparent);
  border-radius: 16px 16px 0 0;
}

.epitech-card:hover {
  border-color: rgba(124, 106, 247, 0.45);
}

.epitech-left {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  grid-column: 1;
  grid-row: 1;
}

.epitech-logo {
  width: 48px;
  height: 48px;
  border-radius: 12px;
  background: var(--accent-glow);
  border: 1px solid rgba(124, 106, 247, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--accent-light);
  font-size: 1.2rem;
  flex-shrink: 0;
}

.epitech-info {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.epitech-badge {
  display: inline-flex;
  align-items: center;
  padding: 0.15rem 0.6rem;
  border-radius: 999px;
  font-size: 0.68rem;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  background: rgba(124, 106, 247, 0.12);
  color: var(--accent-light);
  border: 1px solid rgba(124, 106, 247, 0.2);
  width: fit-content;
}

.epitech-title {
  font-size: 1.05rem;
  font-weight: 700;
  color: var(--text-primary);
  line-height: 1.3;
  margin-top: 0.1rem;
}

.epitech-school {
  font-size: 0.85rem;
  color: var(--accent-light);
  font-weight: 500;
}

.epitech-right {
  grid-column: 2;
  grid-row: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 0.1rem;
  flex-shrink: 0;
}

.epitech-years {
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--text-secondary);
}

.epitech-duration {
  font-size: 0.75rem;
  color: var(--text-muted);
}

.epitech-desc {
  grid-column: 1 / -1;
  grid-row: 2;
  font-size: 0.875rem;
  color: var(--text-secondary);
  line-height: 1.7;
}

/* ── Échange universitaire ── */
.exchange-card {
  display: flex;
  gap: 1.25rem;
  background: var(--bg-card);
  border: 1px solid var(--border-subtle);
  border-radius: 14px;
  padding: 1.5rem;
  margin-bottom: 2.5rem;
  transition: border-color 0.25s ease, transform 0.25s ease;
}

.exchange-card:hover {
  border-color: rgba(124, 106, 247, 0.25);
  transform: translateX(4px);
}

.exchange-icon {
  width: 44px;
  height: 44px;
  border-radius: 10px;
  background: var(--accent-glow);
  border: 1px solid rgba(124, 106, 247, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--accent-light);
  font-size: 1.1rem;
  flex-shrink: 0;
}

.exchange-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
}

.exchange-header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1rem;
  flex-wrap: wrap;
}

.exchange-badge {
  display: inline-flex;
  align-items: center;
  padding: 0.15rem 0.6rem;
  border-radius: 999px;
  font-size: 0.68rem;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  background: rgba(74, 222, 128, 0.08);
  color: #4ade80;
  border: 1px solid rgba(74, 222, 128, 0.2);
  width: fit-content;
  margin-bottom: 0.2rem;
}

.exchange-title {
  font-size: 1rem;
  font-weight: 700;
  color: var(--text-primary);
  line-height: 1.3;
}

.exchange-school {
  font-size: 0.85rem;
  color: var(--accent-light);
  font-weight: 500;
  margin-top: 0.15rem;
}

.exchange-period {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 0.1rem;
  flex-shrink: 0;
}

.exchange-years {
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--text-secondary);
}

.exchange-duration {
  font-size: 0.75rem;
  color: var(--text-muted);
}

.exchange-desc {
  font-size: 0.875rem;
  color: var(--text-secondary);
  line-height: 1.7;
}

/* ── Stages ── */
.stages-header {
  margin-bottom: 1.25rem;
}

.stages-label {
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--text-muted);
}

.stages-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}

.stage-card {
  background: var(--bg-card);
  border: 1px solid var(--border-subtle);
  border-radius: 14px;
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  transition: border-color 0.25s ease, transform 0.25s ease, background 0.25s ease;
}

.stage-card:hover {
  border-color: rgba(124, 106, 247, 0.25);
  background: var(--bg-card-hover);
  transform: translateY(-3px);
}

.stage-top {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 0.5rem;
}

.stage-icon {
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
  flex-shrink: 0;
}

.stage-period {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 0.05rem;
}

.stage-type {
  font-size: 0.68rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--text-muted);
}

.stage-years {
  font-size: 0.75rem;
  color: var(--text-muted);
}

.stage-role {
  font-size: 0.95rem;
  font-weight: 700;
  color: var(--text-primary);
  line-height: 1.3;
}

.stage-company {
  font-size: 0.82rem;
  color: var(--accent-light);
  font-weight: 500;
}

.stage-desc {
  font-size: 0.82rem;
  color: var(--text-secondary);
  line-height: 1.6;
  flex: 1;
}

.stage-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.35rem;
  margin-top: 0.25rem;
}

/* ── Responsive ── */
@media (max-width: 768px) {
  .exchange-card {
    padding: 1.25rem;
    transform: none !important;
  }

  .exchange-card:hover {
    transform: none;
  }

  .exchange-header {
    flex-direction: column;
    gap: 0.4rem;
  }

  .exchange-period {
    flex-direction: row;
    align-items: center;
    gap: 0.5rem;
  }

  .epitech-card {
    grid-template-columns: 1fr;
    grid-template-rows: auto auto auto;
    padding: 1.25rem;
  }

  .epitech-right {
    grid-column: 1;
    grid-row: 2;
    flex-direction: row;
    align-items: center;
    gap: 0.5rem;
  }

  .epitech-desc {
    grid-row: 3;
  }

  .stages-grid {
    grid-template-columns: 1fr;
  }

  .stage-card:hover {
    transform: none;
  }
}

@media (max-width: 480px) {
  .epitech-left {
    flex-direction: column;
    gap: 0.75rem;
  }

  .exchange-card {
    flex-direction: column;
    gap: 0.75rem;
  }
}
</style>
