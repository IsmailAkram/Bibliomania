import express from "express";
import { PORT } from "./config.js";

const app = express();

app.get("/", (request, response) => {
  console.log(request);
  return response
    .status(200)
    .send("Welcome to the MERN stack project, Bibliomania!");
});

app.listen(PORT, () => {
  console.log(`App is listening to port: ${PORT}`);
});
