<template>
  <section id="experience">
    <div class="container">
      <p class="section-label">Parcours</p>
      <h2 class="section-title">Expériences</h2>

      <!-- Expériences professionnelles -->
      <div class="timeline">
        <div
          v-for="(exp, i) in experiences"
          :key="exp.company + exp.period"
          class="timeline-item fade-up"
          :style="{ transitionDelay: `${i * 100}ms` }"
        >
          <div class="timeline-line">
            <div class="timeline-dot" :class="{ current: exp.current }" />
          </div>

          <div class="timeline-content">
            <div class="exp-header">
              <div>
                <h3 class="exp-title">{{ exp.role }}</h3>
                <div class="exp-meta">
                  <span class="exp-company">{{ exp.company }}</span>
                  <span class="exp-sep">·</span>
                  <span class="exp-type">{{ exp.type }}</span>
                </div>
              </div>
              <div class="exp-right">
                <div class="exp-period">
                  <i class="pi pi-calendar" />
                  {{ exp.period }}
                </div>
                <span v-if="exp.current" class="exp-current-badge"
                  >En poste</span
                >
              </div>
            </div>

            <p v-if="exp.description" class="exp-desc">{{ exp.description }}</p>

            <!-- Missions -->
            <div v-if="exp.missions?.length" class="exp-missions">
              <div
                v-for="mission in exp.missions"
                :key="mission.client"
                class="mission-item"
              >
                <div class="mission-dot" />
                <div class="mission-body">
                  <span class="mission-client">{{ mission.client }}</span>
                  <span class="mission-desc">{{ mission.desc }}</span>
                </div>
              </div>
            </div>

            <ul v-if="exp.highlights?.length" class="exp-highlights">
              <li v-for="h in exp.highlights" :key="h">
                <i class="pi pi-arrow-right" />
                {{ h }}
              </li>
            </ul>

            <div class="exp-tags">
              <span v-for="tag in exp.tags" :key="tag" class="tag">{{
                tag
              }}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Vie associative -->
      <div class="assoc-header fade-up">
        <span class="assoc-label">Vie associative & extra</span>
      </div>

      <div class="assoc-grid">
        <div
          v-for="(item, i) in associatif"
          :key="item.role"
          class="assoc-card fade-up"
          :style="{ transitionDelay: `${i * 80}ms` }"
        >
          <div class="assoc-icon">
            <i :class="item.icon" />
          </div>
          <div class="assoc-content">
            <h4 class="assoc-role">{{ item.role }}</h4>
            <p class="assoc-org">{{ item.org }}</p>
            <p class="assoc-period">{{ item.period }}</p>
            <p v-if="item.desc" class="assoc-desc">{{ item.desc }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted } from "vue";

const experiences = [
  {
    role: "Développeur d'applications mobiles",
    company: "Niji",
    type: "CDI",
    period: "Sept. 2021 – aujourd'hui",
    current: true,
    description:
      "ESN spécialisée en transformation digitale. Intervenant sur des missions clients variées en développement mobile (Flutter, Swift) et web.",
    missions: [
      {
        client: "ADEO (Leroy Merlin, Bricoman…) — depuis févr. 2022",
        desc: "Refonte complète de deux apps Flutter (demandes de stock et traitement), migration React → Vue.js pour la topologie des magasins, développement de routes BFF, participation au backend, contribution au Design System Flutter.",
      },
      {
        client: "Coopérative U — application Courses U",
        desc: "Maintenance et correction de bugs sur l'application iOS Swift, refonte complète du parcours de paiement.",
      },
    ],
    highlights: [],
    tags: [
      "Flutter",
      "Vue.js",
      "Swift",
      "iOS",
      "BFF",
      "Design System",
      "Git",
      "GitHub",
      "JIRA",
      "GitFlow",
    ],
  },
  {
    role: "Développeur d'applications mobiles",
    company: "Niji",
    type: "Stage → CDI",
    period: "Mars 2021 – aujourd'hui",
    current: false,
    description:
      "Stage de fin d'études chez Niji, converti en CDI à l'issue. Mission sur l'application Courses U de la Coopérative U en Swift iOS.",
    missions: [],
    highlights: [],
    tags: ["Swift", "iOS", "Git", "GitLab", "JIRA"],
  },
];

const associatif = [
  {
    icon: "pi pi-users",
    role: "Vice-président",
    org: "Association E-mma · Epitech Lille",
    period: "Avr. 2018 – Avr. 2019",
    desc: "Association promouvant la mixité dans le numérique sur le campus Epitech Lille.",
  },
  {
    icon: "pi pi-graduation-cap",
    role: "Accompagnateur Développement",
    org: "EPITECH Lille",
    period: "Nov. 2018 – Mars 2019",
    desc: "Animation d'ateliers de code, développement d'une plateforme e-learning, contact avec des lycées.",
  },
  {
    icon: "pi pi-map",
    role: "Participant",
    org: "4L Trophy",
    period: "Févr. 2019",
    desc: "Raid humanitaire étudiant à travers le Maroc au profit d'enfants défavorisés.",
  },
];

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add("visible");
      });
    },
    { threshold: 0.1 },
  );
  document
    .querySelectorAll("#experience .fade-up")
    .forEach((el) => observer.observe(el));
});
</script>

<style scoped>
/* ── Timeline ── */
.timeline {
  display: flex;
  flex-direction: column;
  gap: 0;
  margin-bottom: 3rem;
}

.timeline-item {
  display: grid;
  grid-template-columns: 32px 1fr;
  gap: 1.5rem;
  padding-bottom: 3rem;
}

.timeline-item:last-child {
  padding-bottom: 0;
}

.timeline-line {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
}

.timeline-dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: var(--accent);
  border: 2px solid var(--bg-primary);
  box-shadow: 0 0 0 3px rgba(124, 106, 247, 0.2);
  flex-shrink: 0;
  margin-top: 5px;
  z-index: 1;
}

.timeline-dot.current {
  background: #4ade80;
  box-shadow:
    0 0 0 3px rgba(74, 222, 128, 0.2),
    0 0 10px rgba(74, 222, 128, 0.4);
}

.timeline-line::after {
  content: "";
  position: absolute;
  top: 18px;
  bottom: -3rem;
  left: 50%;
  transform: translateX(-50%);
  width: 1px;
  background: var(--border-subtle);
}

.timeline-item:last-child .timeline-line::after {
  display: none;
}

.timeline-content {
  background: var(--bg-card);
  border: 1px solid var(--border-subtle);
  border-radius: 14px;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  transition: border-color 0.25s ease;
}

.timeline-content:hover {
  border-color: rgba(124, 106, 247, 0.25);
}

.exp-header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1rem;
  flex-wrap: wrap;
}

.exp-title {
  font-size: 1.05rem;
  font-weight: 700;
  color: var(--text-primary);
  line-height: 1.3;
}

.exp-meta {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  margin-top: 0.2rem;
  font-size: 0.85rem;
  color: var(--text-secondary);
}

.exp-company {
  font-weight: 500;
}

.exp-sep {
  color: var(--text-muted);
}

.exp-type {
  color: var(--accent-light);
  font-size: 0.78rem;
  font-weight: 500;
}

.exp-right {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 0.4rem;
  flex-shrink: 0;
}

.exp-period {
  display: flex;
  align-items: center;
  gap: 0.35rem;
  font-size: 0.78rem;
  color: var(--text-muted);
  white-space: nowrap;
}

.exp-period .pi {
  font-size: 0.75rem;
}

.exp-current-badge {
  display: inline-flex;
  align-items: center;
  padding: 0.15rem 0.55rem;
  border-radius: 999px;
  font-size: 0.68rem;
  font-weight: 600;
  background: rgba(74, 222, 128, 0.1);
  color: #4ade80;
  border: 1px solid rgba(74, 222, 128, 0.25);
  white-space: nowrap;
}

.exp-desc {
  font-size: 0.875rem;
  color: var(--text-secondary);
  line-height: 1.65;
}

/* ── Missions ── */
.exp-missions {
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  padding: 0.75rem 0.85rem;
  background: rgba(124, 106, 247, 0.04);
  border: 1px solid rgba(124, 106, 247, 0.1);
  border-radius: 10px;
}

.mission-item {
  display: flex;
  align-items: flex-start;
  gap: 0.6rem;
}

.mission-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--accent);
  flex-shrink: 0;
  margin-top: 6px;
}

.mission-body {
  display: flex;
  flex-direction: column;
  gap: 0.1rem;
}

.mission-client {
  font-size: 0.82rem;
  font-weight: 600;
  color: var(--text-primary);
}

.mission-desc {
  font-size: 0.8rem;
  color: var(--text-secondary);
}

/* ── Highlights ── */
.exp-highlights {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}

.exp-highlights li {
  display: flex;
  align-items: baseline;
  gap: 0.5rem;
  font-size: 0.85rem;
  color: var(--text-secondary);
}

.exp-highlights .pi {
  font-size: 0.65rem;
  color: var(--accent);
  flex-shrink: 0;
  margin-top: 2px;
}

.exp-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  margin-top: 0.25rem;
}

/* ── Vie associative ── */
.assoc-header {
  margin-bottom: 1.25rem;
}

.assoc-label {
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--text-muted);
}

.assoc-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}

.assoc-card {
  display: flex;
  gap: 0.85rem;
  background: var(--bg-card);
  border: 1px solid var(--border-subtle);
  border-radius: 12px;
  padding: 1.1rem;
  transition:
    border-color 0.2s ease,
    transform 0.2s ease;
}

.assoc-card:hover {
  border-color: rgba(124, 106, 247, 0.2);
  transform: translateY(-2px);
}

.assoc-icon {
  width: 34px;
  height: 34px;
  border-radius: 8px;
  background: var(--accent-glow);
  border: 1px solid rgba(124, 106, 247, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--accent-light);
  font-size: 0.85rem;
  flex-shrink: 0;
}

.assoc-content {
  display: flex;
  flex-direction: column;
  gap: 0.15rem;
}

.assoc-role {
  font-size: 0.875rem;
  font-weight: 700;
  color: var(--text-primary);
  line-height: 1.3;
}

.assoc-org {
  font-size: 0.78rem;
  color: var(--accent-light);
  font-weight: 500;
}

.assoc-period {
  font-size: 0.72rem;
  color: var(--text-muted);
  margin-bottom: 0.25rem;
}

.assoc-desc {
  font-size: 0.78rem;
  color: var(--text-secondary);
  line-height: 1.5;
}

/* ── Responsive ── */
@media (max-width: 768px) {
  .timeline-item {
    grid-template-columns: 1fr;
    gap: 0;
    padding-bottom: 1.5rem;
  }

  .timeline-line {
    display: none;
  }

  .timeline-content {
    padding: 1.25rem;
  }

  .assoc-grid {
    grid-template-columns: 1fr;
  }

  .assoc-card:hover {
    transform: none;
  }
}

@media (max-width: 480px) {
  .exp-header {
    flex-direction: column;
    gap: 0.4rem;
  }

  .exp-right {
    align-items: flex-start;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 0.5rem;
  }

  .exp-period {
    white-space: normal;
  }
}
</style>
