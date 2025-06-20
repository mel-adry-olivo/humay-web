# Changelog

All notable changes to this project will be documented in this section. Follows the convention: **Added**, **Changed**, **Removed**, **Deprecated**, **Fixed**, and **Security**.

## [0.0.3] – June 19-20, 2025

### Added

- **Optimization**
  Added `memo` to `HumayBaseHeader` component to prevent unnecessary re-renders.
  Added `useMemo` to `HumayBaseHeader`'s breadcrumbs calculation to prevent unnecessary re-renders.

- **Sign out functionality**
  Added `useSignOut` hook for signing out users and clearing their session.
- **Session check on login page**
  Added `useEffect` to check if user is logged in before loading in login page to make sure user is not logged in.
- **Route metadata**
  Added `HeadContent` in RootRoute and `head` prop to each of the routes to set page title.
- **Auth context**
  Added `AuthContext` to manage auth state. Added `AuthProvider` to wrap app.
- **Toast**
  Added shadcn/ui Sonner for toasts and created toast configuration and toast wrapper functions.

### Changed

- **Auth state management**
  Used context to manage auth state instead of zustand.
- **Login page**
  Inlined `LoginPage` component into `login.tsx` route file.
- Moved setting global user state from Login page to `useSignIn` hook.
- Extracted `signInUser` function from `useSignIn` hook to `api/sign-in.ts`.
- Extracted `fetchUserWithRoles` function from `useSignIn` hook to `api/fetch-user.ts`.
- Localized auth loading state from `useAuth` hook to the login page.
- Improved validation using `zod`.
- Changed function structure of `useSignIn` hook to return user data and error.

### Removed

- **Removed**
  Removed unused `tooltip` prop from `SidebarMenuButton`.
  Removed `<title>` tag from `index.html` as it is now set in `HeadContent`.

## [0.0.2a] – June 18, 2025

### Added

- **Shared layout for Manager and Admin dashboards**
  Introduced `HumayBaseLayout` (sidebar, header, content slots) to unify protected pages.
- **Dynamic sidebar generation**
  Sidebar items now auto-generated from `staticData.metadata` (TanStack Router) using shared `RouteMetadata`. Supports:
  - Role‑based visibility (`for`)
  - Grouping (`group`)
  - Ordering & visibility (`sidebarOptions`)
  - Title & icon via metadata
    Added `useSidebarData` hook to build per‑role sidebar groups.
- **Manager dashboard scaffolding**
  - Placeholder routes for key form sections (Cultural Management, Damage Assessment, Field Profile, Monitoring, Nutrient Management, Production, Rice/Non‑Rice Classification)
  - Working sidebar nav, breadcrumb integration, footer with user profile dropdown.
- **Role & access utilities**
  - `getRedirectPath`: maps roles → default dashboards
  - `roleHasAccess`: checks route permissions per role
- **Sidebar metadata & typing**
  - `groupOrderMap` for sidebar sort order (e.g. Core, Forms)
  - `mapRole` for user‑friendly role labels
  - Shared TypeScript types: `Role` (with wildcard `*`), `RouteGroup`, `RouteMetadata`, `SidebarRouteOptions`, `SidebarDataItem`, `SidebarDataGroup`

### Changed

- Refactored Manager dashboard routes into directory‑based layout
- Enhanced session & access control with stricter role type safety
- Updated `ProtectedRoute` to leverage `roleHasAccess` for centralized, cleaner logic

### Removed

- Unused placeholder components and redundant utilities

---

## [0.0.1] - June 17, 2025

### Added

- Integrated [TanStack Router](https://tanstack.com/router/latest) for routing.
- Integrated [Zustand](https://zustand-demo.pmnd.rs/) for state management.
- Integrated [TanStack Query](https://tanstack.com/query/latest) for data fetching and caching.
- Integrated [Supabase](https://supabase.com/dashboard/) for backend services.
- Added initial route definitions with placeholder pages.
- Developed `HumayForm` – a wrapper around `shadcn/ui` forms and `react-hook-form` to simplify form handling.
- Developed `HumayTextField` – a generic form input component with label, error message, and input type support.
- Implemented login flow with form validation using `zod` and `react-hook-form`.
- Created `LoginPage` with loading and error handling using `useSignIn` mutation.
- Added `LoginForm` component with reusable form fields (`HumayTextField`, `HumayForm`).
- Added `useSignIn` hook for authenticating users and mapping Supabase user data.
- Defined Zod schema (`loginFormSchema`) and `UserCredentials` type for login validation.
- Created `useAuthStore` with Zustand for managing authenticated user state.
- Implemented `ProtectedRoute` component to guard routes based on user role.

### Changed

- Adopted a modular and feature-based project file structure.
- Moved core setup & config files into the `/app` directory.
- Refactored login logic to use a modular and composable hook (`useSignIn`).
- Centralized form handling logic using custom `HumayForm` components to promote consistency and reuse.
