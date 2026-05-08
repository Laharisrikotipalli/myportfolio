# Lahari Sri Kotipalli — Portfolio

**Live Site:** [https://laharisri.vercel.app](https://laharisri.vercel.app)

A modern, production-grade developer portfolio built with React + Vite, showcasing cloud, DevOps, and backend engineering projects.

---

## Author

**Lahari Sri Kotipalli** — Cloud & Backend Developer  
B.Tech CSE, Aditya College of Engineering & Technology (2023–2027)

---

## Tech Stack

- React 18 + Vite 5 — component-based UI with fast builds
- Framer Motion — parallax scrolling, scroll-reveal animations, staggered reveals
- Canvas API — particle network background (dark) and pastel orbs (light)
- Google Fonts — Syne, JetBrains Mono, and DM Sans
- CSS Variables — complete dark/light theme system
- FormSubmit — contact form backend integration

---

## Project Description

A fully responsive personal portfolio website featuring:

- Hero section with parallax scrolling depth effects
- About, Skills, Projects, Resume, and Contact sections
- Dark/light theme toggle persisted using localStorage
- Animated particle canvas background
- On-scroll animations including staggered reveals and slide-in transitions
- `prefers-reduced-motion` accessibility support
- Responsive layouts for mobile, tablet, and desktop devices

---

## Features

- Parallax scrolling effects in Hero section
- Multiple on-scroll animations
- Dark and Light theme toggle
- Sticky responsive navigation bar
- Mobile hamburger navigation menu
- Contact form with FormSubmit integration
- Semantic HTML with SEO meta tags
- Accessibility support using `prefers-reduced-motion`
- Lazy-loaded assets and optimized rendering

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm 9+

---

## Installation & Development

```bash
# Clone the repository
git clone https://github.com/Laharisrikotipalli/portfolio.git

# Navigate into project directory
cd portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

Application runs locally at:

```bash
http://localhost:5173
```

---

## Build for Production

```bash
npm run build

# Preview production build
npm run preview
```

Production-ready files are generated inside the `dist/` directory.

---

## Deployment

This portfolio is deployed using Vercel.

### Deployment Steps

1. Push project to GitHub
2. Import repository into Vercel
3. Set build command:

```bash
npm run build
```

4. Set output directory:

```bash
dist
```

5. Deploy project

Every push to the `main` branch automatically triggers redeployment.

---

## Project Structure

```plaintext
src/
├── components/
│   ├── Navbar.jsx
│   ├── ParticleCanvas.jsx
│   ├── Hero.jsx
│   ├── About.jsx
│   ├── Skills.jsx
│   ├── Projects.jsx
│   ├── Resume.jsx
│   ├── Contact.jsx
│   └── Footer.jsx
├── hooks/
│   └── useScrollReveal.js
├── App.jsx
├── main.jsx
└── index.css

public/
├── profile.jpeg
├── favicon.svg
└── Lahari_Sri_Resume.pdf
```

---

## Lighthouse Targets

| Category        | Target |
|----------------|---------|
| Performance    | ≥ 80    |
| Accessibility  | ≥ 90    |
| Best Practices | ≥ 90    |
| SEO            | ≥ 85    |

---

## Featured Projects

### Docker Image Optimization Analyzer
AI-powered Docker optimization tool that reduced image size from 1102MB to 11MB using layer analysis and optimization techniques.

### Multi-Layer Cache System
Distributed caching architecture with L1 in-memory cache, Redis L2 cache, TTL management, and cache stampede protection.

### Hybrid Cloud Architecture
Terraform-based multi-cloud infrastructure integrating AWS LocalStack, GCP, Docker, and monitoring services.

### AWS ECS CI/CD Pipeline
Automated deployment pipeline using Terraform, Docker, GitHub Actions, and AWS ECS with zero-manual deployment workflow.

---

## Contact

- GitHub: https://github.com/Laharisrikotipalli
- LinkedIn: https://linkedin.com/in/lahari-sri-kotipalli
- Portfolio: https://laharisri.vercel.app