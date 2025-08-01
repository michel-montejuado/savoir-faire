---
description: Instructions for Copilot as a Developer in the Savoir-Faire project
applyTo: "**/*.{ts,tsx}"
---

# Copilot Developer Instructions for Savoir-Faire

## Project conventions

- Documentation is in the `docs/` folder, specifications in `specs/`, update them accordingly each time.
- Use absolute imports for components and utilities (e.g., `import Button from "@/components/Button"`).
- Group related files together (e.g., components, hooks, utils) and use index.ts for re-exports.

## 🧠 General Principles & Clean Code

- Apply KISS, YAGNI, SOLID, DRY principles at all times.
- Every file must start with a commented header: context, purpose.
- Comment every function, component, and complex logic block.
- Use explicit, descriptive names in English only.
- Structure folders and files in kebab-case.
- Components, types, interfaces: PascalCase. Variables, functions: camelCase. Constants: ALL_CAPS.

## ⚛️ React (see https://fr.react.dev/reference/react)

- Only use functional components and React hooks. No classes, no untyped local state.
- Use useState, useEffect, useMemo, useCallback, useRef as needed, never in conditions or loops.
- Prefer component composition (one component = one responsibility).
- Use Context API for global state sharing, but avoid putting all state in it.
- Use <Suspense> and lazy loading for heavy components.
- Use Error Boundaries for UI error capture.
- Use fragments (<>...</>) to avoid unnecessary divs.
- Use props for downward data, callbacks for upward events.
- Always type props and state with TypeScript.

## 🎨 MUI (see https://mui.com/)

- NO custom CSS.
- Use only MUI components and utility classes for everything: layout, color, typography, responsive, dark mode, etc.
- Structure MUI classes in order: layout → box model → typography → color → effects.
- Use components from components/ui before creating new ones.
- If you create a component, it must be generic, reusable, and documented.
- See MUI documentation for guidelines and best practices.

## 🛣️ React Router (see https://reactrouter.com/home)

- Structure routes in a dedicated folder (src/routes/).
- Use <Outlet /> for nested rendering.
- Navigation: always declarative (<Link>, <NavLink>), never imperative except in rare cases.
- Handle navigation errors with dedicated pages.
- Use lazy loading for heavy routes.
- **React Router v7** - Use modern hooks (`useNavigate`, `useParams`, `useLocation`)
- **Import from react-router** - Use `import { Outlet } from "react-router"`
- **Navigation** - Declarative with UI components, avoid imperative navigation
- **Error handling** - Dedicated error pages and boundaries

## Forms

- **Labels**: Always use `label` prop on FormInput
- **Required fields**: Use `required` attribute and visual indicators
- **Error messages**: Automatically linked with `aria-describedby`
- **Form submission**: Disable fieldset during submission
- **Validation timing**: On blur, not on every keystroke
- **Schema caching**: Zod schemas are automatically cached
- Forms are always stored as a partial in src/components/partials/forms/
- Always use the Form component from components/ui/forms

## 🟦 TypeScript

- Enable strict mode in tsconfig.json.
- Never use any, use unknown if needed.
- Always type all props, state, and function returns.
- Use interfaces for objects, types for unions.
- Use enum for fixed value sets.
- Use ESLint and Prettier for linting/formatting
- Always test your code with unit tests.
- Prefer immutable data (const, readonly).
- Never commit code in production file that is dedicated to development or testing.
- Use optional chaining (?.) and nullish coalescing (??).
- Use known design patterns to organize your code.
- Use **zod** for runtime validation and type inference of data structures (see https://zod.dev/).
- Validate all external data (API, user input) with zod.

## 📁 Naming & Organization Conventions

- Files and folders: kebab-case (e.g., my-util.ts).
- Components and component files, types, interfaces: PascalCase (e.g., UserCard.tsx, function ProductList({...}: ProductListProps)).
- Variables, functions: camelCase (e.g., fetchUser, handleClick).
- Constants: ALL_CAPS (e.g., API_URL).
- One component = one file. If a component exceeds 200 lines, split it.
- Place UI components in src/components/ui/, hooks in src/hooks/, types in src/types/ folder.

## 📝 Documentation & Comments

- Every file starts with a header: context, purpose.
- Comment every function, component, and complex block.
- No useless or obvious comments.
- Comments are in English, concise, and informative.

For more details, see the project documentation in the `docs` folder and specifications in the `specs` folder.
