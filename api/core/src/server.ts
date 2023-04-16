import express, { Response, Request } from "express";

var app = express();

app.get("/", function (req: Request, res: Response) {
  res.send("Bohr Express template");
});

if (!module.parent) {
  app.listen(3000);
  console.log("Express started on port 3000");
}

export default app;
