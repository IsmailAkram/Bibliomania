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
1. Clone this repo via the git command: `git clone https://github.com/IsmailAkram/Bibliomania` and open this project in your preferred text editor.
2. Log into your MongoDB [account](https://account.mongodb.com/account/login) (if you already have a cluster, move to step 4), navigate DATABASE > Clusters and build/connect to a cluster.
![image](https://github.com/user-attachments/assets/be43b258-d24e-4b3d-9ec6-e98b1dc5cf26)

3. Choose your payment template (Free for new users) and uncheck "preload sample dataset"! And Create Deployment
![image](https://github.com/user-attachments/assets/61df08c0-4896-4d5a-8a05-7b10730c2aa4)

4. Connect to Cluster and click "Drivers" and then copy the connection string.
![image](https://github.com/user-attachments/assets/62d0842f-9590-4e43-b4f4-5ae10bd8aca5)

5. Navigate to "Database Access" to edit your `<db_password>` in the connection string.
![image](https://github.com/user-attachments/assets/8fb53c54-687b-41e7-8a84-09cd5c40d277)

   
6. In your text editor, update `backend\config.js` with your `mongoDBURL` and save all edits.

7. `cd` to the `backend` via your terminal and run `npm install mongodb` then `npm install`. Finally run `npm run dev`. You will know this step was succesful if you see `App is listening to port: 5555` \
![image](https://github.com/user-attachments/assets/deeff3ca-475f-4be8-9967-eae4e1fda224)

9. `cd` to the `frontend` via your terminal and run `npm install` and then run `npm run dev`. Once the project is running, open your web browser of choice and type localhost:5173 in the address bar. Alternatively, you can click on this [link](http://localhost:5173/) and it will open the localhost in your default web browser. \
![image](https://github.com/user-attachments/assets/9b6cd135-a35c-46b9-bc3f-859d9fd7db6f)

You're on the landing page! Time to add and edit some book entries.
