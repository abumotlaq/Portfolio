# Osama Abu Motlaq — Portfolio

A modern personal portfolio website showcasing my work, technical skills, and experience as a Full Stack JavaScript Developer.

**Live Website:** https://osamaabumotlaq.vercel.app

---

## Overview

This portfolio is designed to present my development work, technical capabilities, selected projects, and professional journey in a clean and focused interface.

The project was built with a modern JavaScript/TypeScript stack and includes a responsive portfolio experience, project showcase, skills section, services, and a contact form backed by Supabase.

---

## Tech Stack

### Frontend

* Next.js
* React
* TypeScript
* Tailwind CSS
* React Hook Form
* Zod
* Framer Motion

### Backend & Data

* Next.js API Routes
* Node.js
* Supabase
* PostgreSQL

### Development Tools

* Git
* GitHub
* ESLint
* Prettier
* npm
* Vercel

---

## Features

* Responsive and modern portfolio design
* Dark, editorial-style visual system
* Project showcase with category filtering
* Project search
* Skills organized by category
* Services section
* Professional journey / experience section
* Contact form with validation
* Supabase integration for contact submissions
* Responsive navigation
* Optimized production deployment with Vercel
* Type-safe development with TypeScript

---

## Project Structure

```text
portfolio/
├── app/
│   ├── api/
│   │   └── contact/
│   ├── layout.tsx
│   └── page.tsx
│
├── public/
│   └── assets/
│
├── src/
│   ├── components/
│   ├── integrations/
│   └── lib/
│
├── supabase/
│   └── migrations/
│
├── next.config.js
├── package.json
├── postcss.config.cjs
├── tailwind.config.cjs
├── tsconfig.json
└── README.md
```

---

## Getting Started

### Prerequisites

Make sure you have the following installed:

* Node.js 20+
* npm

### 1. Clone the repository

```bash
git clone https://github.com/abumotlaq/portfolio.git
```

### 2. Navigate to the project

```bash
cd portfolio
```

### 3. Install dependencies

```bash
npm install
```

### 4. Configure environment variables

Create a `.env.local` file in the project root:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

Do not commit `.env.local` or any file containing private credentials to the repository.

### 5. Start the development server

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

---

## Available Scripts

| Command         | Description                               |
| --------------- | ----------------------------------------- |
| `npm run dev`   | Starts the development server             |
| `npm run build` | Creates a production build                |
| `npm run start` | Starts the production server              |
| `npm run lint`  | Runs ESLint and checks for linting errors |

---

## Supabase

The portfolio uses Supabase/PostgreSQL to handle contact form submissions.

The application communicates with the backend through a Next.js API endpoint, while Supabase is responsible for persistent data storage.

For local development, configure the required Supabase environment variables in `.env.local`.

---

## Deployment

The portfolio is deployed using Vercel.

**Live:** https://osamaabumotlaq.vercel.app

Every production deployment is generated from the project's Git repository.

---

## Design & Development

The portfolio focuses on:

* Clear visual hierarchy
* Responsive layouts
* Accessible interfaces
* Reusable components
* Type-safe development
* Maintainable project structure
* Performance-conscious implementation

---

## About Me

I'm Osama Abu Motlaq, a Computer Science student and Full Stack JavaScript Developer focused on building modern web applications.

My primary technologies include React, Next.js, TypeScript, Node.js, Express, databases, and modern frontend tooling.

I'm interested in building products that combine thoughtful UI design with maintainable and reliable engineering.

---

## Connect With Me

* **Portfolio:** https://osamaabumotlaq.vercel.app
* **GitHub:** https://github.com/abumotlaq
* **LinkedIn:** https://www.linkedin.com/in/osama-abumotlaq/
* **X:** https://x.com/OsamaAbuMotlaq

---

## License

This project is for personal portfolio and demonstration purposes.
