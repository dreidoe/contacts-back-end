import express from "express";

const app = express();
import contactsRouter from "./contacts/routes.js";
app.use(express.json());
app.use("/api/contacts/", contactsRouter);
app.listen(3000, () => {
  console.info("Server is running on port 3000");
});
