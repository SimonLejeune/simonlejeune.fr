# simonlejeune.fr

Portfolio personnel de Simon Lejeune — développeur d'applications mobiles et web.

Site single-page présentant mes projets, expériences, formations et un formulaire de contact.

🌐 **[simonlejeune.fr](https://simonlejeune.fr)**

---

## Stack

- **[Vue 3](https://vuejs.org/)** + **[TypeScript](https://www.typescriptlang.org/)** — framework et typage
- **[Vite](https://vite.dev/)** — bundler et serveur de développement
- **[PrimeVue](https://primevue.org/)** (thème Aura) — composants UI
- **[PrimeIcons](https://primevue.org/icons/)** — icônes

## Structure

```
src/
├── assets/          # CSS global et variables
├── components/
│   ├── AppHeader.vue        # Navigation sticky avec menu mobile
│   ├── HeroSection.vue      # Section d'accueil
│   ├── AboutSection.vue     # À propos, skills et centres d'intérêt
│   ├── ProjectsSection.vue  # Projets
│   ├── ExperienceSection.vue # Expériences professionnelles
│   ├── EducationSection.vue  # Formations et stages
│   └── ContactSection.vue   # Formulaire de contact et liens
└── composables/
    └── useFadeUp.ts  # Animation d'apparition au scroll
```

## Développement

```sh
# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev

# Build de production
npm run build

# Prévisualiser le build
npm run preview
```

## Déploiement

Le déploiement est automatisé via **GitHub Actions** sur chaque push sur `main`.

Le workflow (`.github/workflows/deploy.yml`) :
1. Installe les dépendances
2. Build le projet (`npm run build`)
3. Upload le dossier `dist/` sur l'hébergement OVH via FTP

Les credentials FTP sont stockés en **GitHub Secrets** :

| Secret | Description |
|--------|-------------|
| `FTP_SERVER` | Adresse du serveur FTP OVH |
| `FTP_USERNAME` | Identifiant FTP |
| `FTP_PASSWORD` | Mot de passe FTP |
| `FTP_SERVER_DIR` | Dossier de destination sur le serveur |

Sur les **Pull Requests** vers `main`, un job de vérification (`build-check`) s'exécute pour s'assurer que le build ne casse pas avant le merge.
