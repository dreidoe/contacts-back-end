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
// Express uses middleware to parse the body of a request
// this is required to access the body of a POST request
app.use(express.json());

app.post("/api/contacts", (request, response) => {
  console.log(request.body);
  response.send("ok");
});
