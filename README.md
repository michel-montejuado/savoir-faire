# Savoir-Faire

A private video knowledge base for your team. Experts easily record how-to guides on mobile, making their `savoir-faire` searchable and permanent. Stop knowledge loss, train faster.

## About The Project

**Savoir-Faire** is a mobile-first SaaS platform designed to help businesses capture, preserve, and share critical hands-on knowledge. In many companies, expertise is "tribal"—it exists only in the minds of a few key people. This platform mitigates the risk of knowledge loss from employee turnover by providing a secure, internal library of short, practical video guides created by the company's own experts.

This repository contains the full source code for the Savoir-Faire platform, structured as a NodeJS monorepo using **NPM Workspaces**.

## Monorepo Structure

This project is managed as a monorepo, which allows us to manage dependencies and share code between different parts of the application seamlessly.

```text
savoir-faire/
├── apps/
│   ├── mobile/         # React Native App (for Experts & Learners)
│   └── web-dashboard/  # React Web App (for Administrators)
├── packages/
│   ├── server/         # NestJS Backend API & Video Processing
│   └── shared-types/   # Shared TypeScript types/interfaces
└── package.json        # Root package.json with workspace configuration
```

* `apps/mobile`: A React Native application for iOS and Android that allows users to record, upload, and view knowledge videos.
* `apps/web-dashboard`: A React-based web application for administrators to manage users, content, and view analytics.
* `packages/server`: The core backend built with NestJS. It handles user authentication, API requests, video processing, and database interactions.
* `packages/shared-types`: A shared package containing TypeScript types and interfaces used across the server, mobile, and web apps to ensure data consistency.

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

* [Node.js](https://nodejs.org/) (v18.x or later)
* [NPM](https://www.npmjs.com/) (v9.x or later)
* [PostgreSQL](https://www.postgresql.org/) (or a Docker instance)

### Installation

1.  **Clone the repository:**

    ```sh
    git clone [https://github.com/michel-montejuado/savoir-faire.git](https://github.com/your-username/savoir-faire.git)
    cd savoir-faire
    ```

2.  **Install dependencies:**

NPM will automatically install dependencies for all workspaces and link them together.
    ```sh
    npm install
    ```

3.  **Set up environment variables:**
    Each application (`mobile`, `web-dashboard`, `server`) has a `.env.example` file. Copy these to a new `.env` file in their respective directories and fill in the required values (database credentials, API keys, etc.).

```sh
# Example for the server package
cp packages/server/.env.example packages/server/.env
```

## Running the Project

You can run each part of the application from the root directory using the NPM workspace commands.

* **Run the Backend Server:**
    ```sh
    npm run dev --workspace=@savoir-faire/server
    ```

* **Run the Web Dashboard:**
    ```sh
    npm run dev --workspace=@savoir-faire/web-dashboard
    ```

* **Run the Mobile App:**
    First, ensure you have the React Native development environment set up. Then, run the appropriate command for your target platform.
    ```sh
    # For iOS
    npm run ios --workspace=@savoir-faire/mobile

    # For Android
    npm run android --workspace=@savoir-faire/mobile
    ```

## Running Tests

To run all unit and integration tests across all workspaces, use the following command from the root directory:

```sh
npm test
```

## Technology Stack

- Monorepo: NPM Workspaces
- Backend: NestJS, TypeScript, PostgreSQL, Prisma
- Web Dashboard: React, Vite, Tailwind CSS
- Mobile App: React Native, Expo
- Testing: Jest, React Testing Library
