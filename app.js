import express, { response } from "express";
import cors from "cors";
import { todos } from "./data.js";

const app = express();
app.use(express.json());
app.use(cors());


app.get("/", (req, res) => {
    res.send("Hello Express.js");
});

app.listen(3000, () => {
    console.log("Server started at port: 3000");
});

app.post("/test", (req, res) => {
    res.send('Got a POST request')
});

app.put("/test", (req, res) => {
    res.send('Got a PUT request at /user')
});

app.delete("/test", (req, res) => {
  res.send("Got a DELETE request at /user");
});

app.patch("/test", (req, res) => {
  res.send("Patch");
});

app.get("/todos", (req, res) => {
    res.send(todos);
    res.end("hejsa");
});

app.post("/todos", (req, res) => {
    console.log(req.body)
    const newTodo = {
        id: new Date().getTime(),
        task: req.body.task,
        completed: req.body.completed
    };
    console.log(newTodo);
    todos.push(newTodo);
    res.json(todos);
});

app.get("/todos/:id", (req, res) => {
    const id = Number(req.params.id);
    console.log(id);
    const todo = todos.find(t => t.id === id);
    res.json(todo);
});

app.put("/todos/:id", (req, res) => {
    const id = Number(req.params.id);
    const todo = todos.find(t => t.id === id);
    console.log(id);
    console.log(req.body);
    todos.splice(todos.indexOf(todo), 1)
    todos.push(req.body);
    res.json(todos);
});