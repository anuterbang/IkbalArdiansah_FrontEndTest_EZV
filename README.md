# 📋 Todo App - Skill Test Frontend Developer
**PT. EZV Service Indonesia**

A simple Todo List app built using **Next.js**, **TypeScript**, and **Redux Toolkit RTK Query**, as part of a frontend developer skill test.

---

## 🚀 Features

- ✅ Fetch todo list from `https://jsonplaceholder.typicode.com/todos`
- ✅ Implemented using **Redux Toolkit RTK Query**
- ✅ Pagination using `_start` and `_limit` (10 items per page)
- ✅ Add new todo with `POST` request
- ✅ Type definitions with TypeScript
- ✅ SSR with `getServerSideProps`
- ✅ ISR with `getStaticProps` + `revalidate`
- ✅ Client-side re-fetch using RTK Query
- ✅ Clean, simple, and responsive UI (Tailwind CSS)

---

## 🧱 Tech Stack

- [Next.js](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Redux Toolkit + RTK Query](https://redux-toolkit.js.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [jsonplaceholder.typicode.com](https://jsonplaceholder.typicode.com/)

---

## 📁 Folder Structure

src/
├── pages/
│ ├── index.tsx # Todo list (SSR/ISR + RTK)
│ ├── add.tsx # Form to add todo
├── services/
│ └── todosApi.ts # RTK Query setup
├── types/
│ └── Todo.ts # TypeScript type
├── store.ts # Redux store config

---

## 🧪 How to Run Locally

1. Clone this repo
2. Install dependencies:

```bash
npm install

Run the App :
npm run dev

Demo Live : https://ikbal-ardiansah-front-end-test-ezv-ten.vercel.app/


Thankyou
