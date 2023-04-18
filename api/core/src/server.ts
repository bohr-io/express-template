import express, { Response, Request } from "express";

var app = express();

const users = [
  { id: 1, name: "Lucas" },
  { id: 2, name: "Eric" },
  { id: 3, name: "Ana" },
];


app.get("/", function (req: Request, res: Response) {
  res.send("Bohr Express template");
});

app.get("/users", function (req: Request, res: Response) {
  res.send(users);
});

app.get("/users/:userId", function (req: Request, res: Response) {
  const user = users.find((user) => user.id === parseInt(req.params.userId));
  res.send(user);
});

if (!module.parent) {
  app.listen(3000);
  console.log("Express started on port 3000");
}

export default app;
