# OctoFit Tracker Frontend (React + Vite)

## API configuration

The app calls the Express API on port `8000`. The base URL is built from the
`VITE_CODESPACE_NAME` Vite environment variable (read via `import.meta.env`).

**`VITE_CODESPACE_NAME` must be defined when running in GitHub Codespaces.**
Create `octofit-tracker/frontend/.env.local` (git-ignored):

```bash
echo "VITE_CODESPACE_NAME=$CODESPACE_NAME" > octofit-tracker/frontend/.env.local
```

| `VITE_CODESPACE_NAME` | API base URL                                         |
| --------------------- | ---------------------------------------------------- |
| set                   | `https://$VITE_CODESPACE_NAME-8000.app.github.dev`   |
| unset                 | `http://localhost:8000` (local fallback)             |

Restart `npm run dev --prefix octofit-tracker/frontend` after changing `.env.local`.
Port `8000` must be public in Codespaces for the browser to reach the API.

Endpoints used: `/api/activities/`, `/api/leaderboard/`, `/api/teams/`,
`/api/users/`, `/api/workouts/`. Responses may be a plain array or a paginated
object (`{ results: [...] }` or `{ data: [...] }`).

---

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
