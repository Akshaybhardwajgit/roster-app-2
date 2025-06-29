# Roster Management Application

A lightweight roster management UI built with **React + TypeScript**, **Redux Toolkit**, **TailwindCSS**, and **Vite**.

## Features

- Provider calendar with daily slot overview
- Filter by service, type, and centre
- Fuzzy provider search (up to 5 providers)
- Color‑coded slot statuses
- Responsive layout (desktop ↔ mobile)
- Code‑splitting via `React.lazy` + `Suspense`
- Strict typing and performant selectors with **RTK** & **reselect**
- Deployed on Vercel (add your link)

## Getting started

```bash
git clone <repo>
cd roster-app
npm install
npm run dev
```

## Tech stack

| Layer | Library |
|-------|---------|
| UI    | React 18 + TypeScript |
| State | Redux Toolkit + RTK Query |
| Styling | TailwindCSS |
| Build | Vite |

## Folder structure

```
src/
  api/        # data fetching logic (mocked)
  components/ # presentational + container components
  store/      # RTK slices
  types/      # shared TS types
```

## License

MIT
