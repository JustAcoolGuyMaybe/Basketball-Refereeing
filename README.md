# FIBA Referee Pro 2026 🏀

[![FIBA 2026 Rules Approved](https://img.shields.bg/badge/FIBA%20Rules-2026%20v1.1-orange.svg)](https://www.fiba.basketball)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-blue.svg)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-19.0-61dafb.svg)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-v4-06b6d4.svg)](https://tailwindcss.com/)

Professional mobile-first **FIBA Basketball Referee Handbook**, Rule Violation Guide, Signal Visualizer, Game Guidelines (IRS & Head Coach Challenges), and AI Referee Assistant powered by Gemini.

---

## 🌟 Key Features

- 🏀 **Rule Violations & Fouls Directory**: Comprehensive indexed rules for all official FIBA game situations (Articles 1 through 51).
- 📯 **Referee Signal Visualizer**: Official FIBA hand signals, arm mechanics, and referee silhouette diagrams for on-court game calls.
- 📋 **Game Guidelines & Regulations**: Official court dimensions, equipment standards, Table Official duties, Correctable Errors (Art. 45), Instant Replay System (IRS - App. F), and Head Coach's Challenge (HCC).
- 📊 **Team Classification & Standings Simulator**: Interactive FIBA Rule D.1 tie-breaker calculator.
- 🤖 **AI Referee Assistant**: Real-time AI official trained on official FIBA rules and interpretations.
- 📱 **Mobile Viewport & Customization**: Phone frame simulator (iPhone 16 Pro / Android Pixel / Expanded View) with custom home screen icon selector.

---

## 🚀 Deployment Options

### 1. GitHub Pages Automated Deployment (Recommended for Frontend)

This repository includes a pre-configured GitHub Action (`.github/workflows/deploy.yml`) that automatically builds the Vite TypeScript application into production JavaScript and deploys it.

**How to enable GitHub Pages without MIME type errors:**
1. In your GitHub repository, go to **Settings** -> **Pages**.
2. Under **Build and deployment** -> **Source**, change the dropdown from `"Deploy from a branch"` to **`GitHub Actions`**.
3. Push a commit or go to **Actions** -> **Deploy to GitHub Pages** -> click **Run workflow**.

> 💡 *Note: The MIME type `application/octet-stream` error occurs when GitHub Pages is set to "Deploy from a branch" (root folder) because raw `.tsx` files are served without being compiled. Selecting **GitHub Actions** compiles the project into production `.js` bundles (`dist/`) before publishing.*

### 2. Full-Stack Deployment (Cloud Run, Vercel, Railway, Render, Fly.io)

This project includes an Express server proxy for secure server-side calls to the Gemini API (`GEMINI_API_KEY`).

#### Local Development
```bash
# Install dependencies
npm install

# Set environment variables in .env
GEMINI_API_KEY=your_gemini_api_key_here

# Run development server (runs on port 3000)
npm run dev
```

#### Production Build & Run
```bash
# Build the Vite frontend and bundle server.ts with esbuild
npm run build

# Start production server
npm start
```

### 3. Docker Container Deployment

A standard Dockerfile can be built using:

```dockerfile
FROM node:22-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

---

## 🔑 Environment Variables

To enable the AI Referee Assistant, set the following environment variable on your server/hosting provider:

```env
GEMINI_API_KEY=your_google_gemini_api_key
```

---

## 📄 License

Adopted under the International Basketball Federation (FIBA) Official Basketball Rules 2026.
