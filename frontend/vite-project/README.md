Eneba Search Web Application

This project is a full-stack web application built as part of the Software Engineer Intern assignment for Eneba.
It implements a searchable game marketplace UI that closely matches the provided design reference.


🛠 Tech Stack
Frontend:
React (Vite)
Tailwind CSS
JavaScript (ES6+)

Backend:
Node.js
Express
REST API

Database:
SQLite
Custom schema designed based on UI & business needs

GET /list

Returns all available games.

GET /list?search=<gamename>

Returns games matching the search query.
Supports partial / fuzzy matching.


git clone https://github.com/YOUR-USERNAME/YOUR-REPO.git
cd YOUR-REPO

cd backend
npm install
npm run dev

cd frontend/vite-project
npm install
npm run dev

In app.jsx change API URL - http://localhost:4000

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
