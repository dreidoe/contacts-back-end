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

app.get("/api/contacts/:id", (request, response) => {
  console.log(request.params.id);
  response.send(request.params.id);
});
// Express uses middleware to parse the body of a request
// this is required to access the body of a POST request
app.use(express.json());

app.post("/api/contacts", (request, response) => {
  console.log(request.body);
  response.send("ok");
});

app.get("/api/contacts", (_, response) => {
  response.json([
    { id: 1, name: "John" },
    { id: 2, name: "Jane" },
  ]);
});
