import express from "express";
import morgan from "morgan";

const app = express();

app.use(morgan("dev"));
app.use(express.static("public"));

app.get("/api/health", (req, res) => {
  res.status(200).json({ message: "Hello World!" });
});

app.get("/api/hello", (req, res) => {
  res.status(200).json({ message: "Hello from the backend!" });
});

app.get("/api/users", (req, res) => {
  const users = [
    { id: 1, name: "Alice" },
    { id: 2, name: "John" },
    { id: 3, name: "Jane" },
    { id: 4, name: "Bob" },
  ];
  res.status(200).json(users);
});

// When we Build the frontend, we will serve the static files from the public folder.
app.get("*name", (req, res) => {
  res.sendFile("public/index.html", { root: __dirname });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
