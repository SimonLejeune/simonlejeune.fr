<template>
  <section id="contact">
    <div class="container">
      <p class="section-label">Contact</p>
      <h2 class="section-title">Parlons de votre projet</h2>

      <div class="contact-layout">
        <div class="contact-intro fade-up">
          <p class="contact-text">
            Vous cherchez un développeur pour un projet, une mission freelance
            ou simplement échanger sur la tech ? N'hésitez pas à me contacter,
            je réponds généralement sous 24–48h.
          </p>

          <div class="contact-links">
            <a
              v-for="link in socialLinks"
              :key="link.label"
              :href="link.url"
              target="_blank"
              rel="noopener"
              class="social-link"
            >
              <div class="social-icon">
                <i :class="link.icon" />
              </div>
              <div class="social-info">
                <span class="social-label">{{ link.label }}</span>
                <span class="social-value">{{ link.value }}</span>
              </div>
              <i class="pi pi-arrow-up-right social-arrow" />
            </a>
          </div>
        </div>

        <form
          class="contact-form fade-up"
          @submit.prevent="handleSubmit"
          novalidate
        >
          <div class="form-group">
            <label for="name">Votre nom</label>
            <input
              id="name"
              v-model="form.name"
              type="text"
              placeholder="Jean Dupont"
              :class="{ error: errors.name }"
              @blur="validate('name')"
            />
            <span v-if="errors.name" class="field-error">{{
              errors.name
            }}</span>
          </div>

          <div class="form-group">
            <label for="email">Votre email</label>
            <input
              id="email"
              v-model="form.email"
              type="email"
              placeholder="jean@example.com"
              :class="{ error: errors.email }"
              @blur="validate('email')"
            />
            <span v-if="errors.email" class="field-error">{{
              errors.email
            }}</span>
          </div>

          <div class="form-group">
            <label for="message">Votre message</label>
            <textarea
              id="message"
              v-model="form.message"
              placeholder="Décrivez votre projet, vos besoins…"
              rows="5"
              :class="{ error: errors.message }"
              @blur="validate('message')"
            />
            <span v-if="errors.message" class="field-error">{{
              errors.message
            }}</span>
          </div>

          <button type="submit" class="btn-submit" :disabled="loading">
            <template v-if="!loading && !sent">
              <i class="pi pi-send" />
              Envoyer le message
            </template>
            <template v-else-if="loading">
              <i class="pi pi-spin pi-spinner" />
              Envoi en cours…
            </template>
            <template v-else>
              <i class="pi pi-check" />
              Message envoyé !
            </template>
          </button>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted } from "vue";

const socialLinks = [
  {
    label: "GitHub",
    value: "@simonlejeune",
    icon: "pi pi-github",
    url: "https://github.com/simonlejeune",
  },
  {
    label: "LinkedIn",
    value: "Simon Lejeune",
    icon: "pi pi-linkedin",
    url: "https://www.linkedin.com/in/simon-lejeune/",
  },
  {
    label: "Email",
    value: 'simon.lejeune@epitech.eu',
    icon: "pi pi-envelope",
    url: 'mailto:simon.lejeune@epitech.eu',
  },
];

const form = reactive({ name: "", email: "", message: "" });
const errors = reactive({ name: "", email: "", message: "" });
const loading = ref(false);
const sent = ref(false);

function validate(field: keyof typeof form) {
  if (field === "name") {
    errors.name = form.name.trim() ? "" : "Le nom est requis.";
  }
  if (field === "email") {
    if (!form.email.trim()) errors.email = "L'email est requis.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      errors.email = "Email invalide.";
    else errors.email = "";
  }
  if (field === "message") {
    errors.message =
      form.message.trim().length > 10 ? "" : "Le message est trop court.";
  }
}

function validateAll() {
  (["name", "email", "message"] as const).forEach(validate);
  return !errors.name && !errors.email && !errors.message;
}

async function handleSubmit() {
  if (!validateAll()) return;
  loading.value = true;
  await new Promise((r) => setTimeout(r, 1500));
  loading.value = false;
  sent.value = true;
  Object.assign(form, { name: "", email: "", message: "" });
}

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
    .querySelectorAll("#contact .fade-up")
    .forEach((el) => observer.observe(el));
});
</script>

<style scoped>
.contact-layout {
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 4rem;
  align-items: start;
}

.contact-text {
  font-size: 0.95rem;
  color: var(--text-secondary);
  line-height: 1.75;
  margin-bottom: 2rem;
}

.contact-links {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.social-link {
  display: flex;
  align-items: center;
  gap: 0.85rem;
  padding: 0.85rem 1rem;
  border-radius: 12px;
  border: 1px solid var(--border-subtle);
  background: var(--bg-card);
  text-decoration: none;
  transition:
    border-color 0.2s ease,
    transform 0.2s ease,
    background 0.2s ease;
}

.social-link:hover {
  border-color: rgba(124, 106, 247, 0.35);
  background: var(--bg-card-hover);
  transform: translateX(4px);
}

.social-icon {
  width: 38px;
  height: 38px;
  border-radius: 9px;
  background: var(--accent-glow);
  border: 1px solid rgba(124, 106, 247, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--accent-light);
  font-size: 0.95rem;
  flex-shrink: 0;
}

.social-info {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.1rem;
}

.social-label {
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--text-primary);
}

.social-value {
  font-size: 0.78rem;
  color: var(--text-muted);
}

.social-arrow {
  font-size: 0.75rem;
  color: var(--text-muted);
  transition: color 0.2s ease;
}

.social-link:hover .social-arrow {
  color: var(--accent-light);
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}

label {
  font-size: 0.8rem;
  font-weight: 500;
  color: var(--text-secondary);
}

input,
textarea {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: 10px;
  padding: 0.7rem 0.9rem;
  color: var(--text-primary);
  font-family: "Inter", sans-serif;
  font-size: 0.875rem;
  outline: none;
  transition: border-color 0.2s ease;
  resize: none;
  width: 100%;
}

input::placeholder,
textarea::placeholder {
  color: var(--text-muted);
}

input:focus,
textarea:focus {
  border-color: var(--accent);
}

input.error,
textarea.error {
  border-color: #f87171;
}

.field-error {
  font-size: 0.75rem;
  color: #f87171;
}

.btn-submit {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.8rem 1.5rem;
  border-radius: 10px;
  background: var(--accent);
  color: #fff;
  font-size: 0.9rem;
  font-weight: 600;
  border: none;
  cursor: pointer;
  font-family: "Inter", sans-serif;
  transition:
    background 0.2s ease,
    transform 0.15s ease,
    opacity 0.2s ease;
}

.btn-submit:hover:not(:disabled) {
  background: var(--accent-light);
  transform: translateY(-2px);
}

.btn-submit:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

@media (max-width: 768px) {
  .contact-layout {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }

  .social-link {
    transform: none !important;
  }
}

@media (max-width: 480px) {
  .btn-submit {
    width: 100%;
    padding: 0.9rem;
  }

  input,
  textarea {
    font-size: 1rem;
  }
}
</style>
