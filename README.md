# Savoir-Faire

A private video knowledge base for your team. Experts easily record how-to guides on mobile, making their `savoir-faire` searchable and permanent. Stop knowledge loss, train faster.

## About The Project

**Savoir-Faire** is a mobile-first SaaS platform designed to help businesses capture, preserve, and share critical hands-on knowledge. In many companies, expertise is "tribal"—it exists only in the minds of a few key people. This platform mitigates the risk of knowledge loss from employee turnover by providing a secure, internal library of short, practical video guides created by the company's own experts.

This repository contains the full source code for the Savoir-Faire platform, structured as a NodeJS monorepo using **NPM Workspaces**.

## Technology Stack

- **Monorepo**: NPM Workspaces
- **Backend**: NestJS, TypeScript, PostgreSQL, Prisma
- **Web Dashboard**: Next.js (React), Tailwind CSS
- **Web App**: Vite, React, TypeScript
- **Mobile App**: React Native, Expo (planned)
- **Testing**: Jest, React Testing Library

## Monorepo Structure

This project is managed as a monorepo, allowing seamless dependency management and code sharing between different parts of the application.

```text
savoir-faire/
├── docs/                # Documentation package
├── packages/
│   ├── config/          # Shared configuration (TypeScript)
│   ├── core/            # Shared TypeScript types/interfaces
│   └── ui/              # Shared UI components (React/React Native)
├── projects/
│   ├── app/             # Vite/React web app (for learners/experts)
│   ├── dashboard/       # Next.js admin dashboard (for administrators)
│   └── server/          # NestJS backend API & video processing
├── specs/               # Specification package
└── package.json         # Root package.json with workspace configuration
```

- `docs`: Centralized documentation for all apps.
- `packages/config`: Shared configuration files and utilities.
- `packages/core`: Shared TypeScript types and interfaces for data consistency.
- `packages/ui`: Shared UI components for React apps.
- `projects/app`: Vite/React web app for learners and experts (browser-based usage).
- `projects/dashboard`: Next.js web dashboard for administrators (user/content management, analytics).
- `projects/server`: NestJS backend for authentication, API, video processing, and database.
- `specs`: Centralized specifications for all apps.

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- [Node.js](https://nodejs.org/) (v18.x or later)
- [NPM](https://www.npmjs.com/) (v9.x or later)
- [PostgreSQL](https://www.postgresql.org/) (or a Docker instance)

### Installation

1. **Clone the repository:**

   ```sh
   git clone [https://github.com/michel-montejuado/savoir-faire.git](https://github.com/your-username/savoir-faire.git)
   cd savoir-faire
   ```

1. **Install dependencies:**

NPM will automatically install dependencies for all workspaces and link them together.

```sh
npm install
```

1. **Set up environment variables:**

Each application (`webapp`, `dashboard`, `server`) has a `.env.example` file. Copy these to a new `.env` file in their respective directories and fill in the required values (database credentials, API keys, etc.).

```sh
# Example for the server package
cp apps/server/.env.example apps/server/.env
```

## Running the Project

You can run each part of the application from the root directory using the NPM workspace commands.

- **Run the Backend Server:**

  ```sh
  npm run dev --workspace=@savoir-faire/server
  ```

- **Run the Dashboard:**

  ```sh
  npm run dev --workspace=@savoir-faire/dashboard
  ```

- **Run the WebApp:**

  ```sh
  npm run dev --workspace=@savoir-faire/webapp
  ```

## Running Tests

To run all unit and integration tests across all workspaces, use the following command from the root directory:

```sh
npm test
```
