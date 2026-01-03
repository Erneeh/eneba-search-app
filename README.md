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


git clone https://github.com/Erneeh/eneba-search-app
cd eneba-search-app

cd backend
npm install
node seed.js (not necessary)
db.js (copy and insert the code to create table)
npm run dev


cd frontend/vite-project
npm install
npm run dev

In app.jsx change API URL - http://localhost:4000
