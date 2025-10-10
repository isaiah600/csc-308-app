import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

let users_list = [
  { id: "1", name: "Isaiah", job: "Student" },
  { id: "2", name: "Alex", job: "Teacher" },
  { id: "3", name: "Jordan", job: "Developer" },
  { id: "4", name: "Taylor", job: "Designer" }
];

app.get("/users", (req, res) => {
  res.send({ users_list });
});

app.post("/users", (req, res) => {
  users_list.push(req.body);
  res.sendStatus(200);
});

app.listen(8000, () => {
  console.log("Backend server running on http://localhost:8000");
});

app.post("/users", (req, res) => {
  const { name, job } = req.body || {};
  if (!name || !job) return res.status(400).send({ error: "name and job required" });
  const newUser = {
    id: String(Math.floor(Math.random() * 1000000)),
    name,
    job,
  };
  users_list.push(newUser);
  res.status(201).send(newUser);
});

app.delete("/users/:id", (req, res) => {
  const { id } = req.params;
  const idx = users_list.findIndex((u) => u.id === id);
  if (idx === -1) return res.status(404).send();
  users_list.splice(idx, 1);
  res.status(204).send();
});

