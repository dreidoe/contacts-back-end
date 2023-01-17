import express from "express";
const app = express();
app.get("/", (_, response) => {
  response.send("<h1> hello world </h1>");
});

app.listen(3000, () => {
  console.info("server is running on port 3000");
});

app.get("/about", (_, response) => {
  response.send("<h1> hello world </h1>");
});
