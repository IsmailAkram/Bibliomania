# Bibliomania

### This is a MERN stack library bookstore project that uses the following technologies: [MongoDB](https://www.mongodb.com/), [Express]([https://nodejs.org/en/](https://expressjs.com/)), [React](https://react.dev/), [Node.js](https://nodejs.org/en/).
This project showcases the following:
- Backend CRUD (Create Read Update Delete)
- Backend Router ([Postman](https://www.postman.com/))
- CORS Policy
- MongoDB operations ([mongoosejs](https://mongoosejs.com/))
- Frontend CRUD
- Frontend Router

![BiblioDEMO](https://github.com/user-attachments/assets/793ab3fb-b4a9-4f5a-ad23-5f3f85fb04a9)

- [x] Project initialization: created Node.js project from scratch
- [x] Created first HTTP route
- [x] Added MongoDB and mongoose to Node.js
- [x] Created Book model with mongoose
- [x] Saved a new book with mongoose
- [x] Getting ALL books with mongoose
- [x] Getting one book by ID with mongoose
- [x] Updated a book with mongoose
- [x] Deleted a book with mongoose
- [x] Refactored Node.js with express router
- [x] CORS policy in Node js and Express js
- [x] Created React project with Vite, Tailwind, and CSS
- [x] SPA and added react router dom
- [x] Show Books List in React
- [x] Show Book Details in React
- [x] Create Book in React
- [x] Edit Book in React
- [x] Delete Book in React
- [x] Show Books List as Card
- [x] Make Book Card a single component
- [x] Added Book Modal
- [x] Improve User Experience (UX) with notistack

This project was created by following this [tutorial](https://www.youtube.com/watch?v=-42K44A1oMA) with [Tailwind](https://tailwindcss.com/docs/installation/using-vite), [notistack](https://www.npmjs.com/package/notistack/v/3.0.0-alpha.5) for UI beautification.

## How to run this locally
- Clone this repo via the git command: `git clone https://github.com/IsmailAkram/Bibliomania` and open this project in your preferred text editor.
- Log into your MongoDB [account](https://account.mongodb.com/account/login) and connect to a cluster , then select "Drivers".
- Navigate to "Database Access" to edit your `<db_password>`
![image](https://github.com/user-attachments/assets/cf34feb1-fbdf-4db7-b41f-0325a9114478)
- Update `backend\config.js` with your `mongoDBURL` and save all edits.

- `cd` to the `backend` via your terminal and run `npm run dev`. Open http://localhost:5555/
- `cd` to the `frontend` via your terminal and run `npm run dev`. Open http://localhost:5173/

- You're on the landing page! Time to add and edit some book entries.
