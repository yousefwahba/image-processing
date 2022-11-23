import express, { Application, Request, Response } from "express";
import routes from "./routes";
const PORT = 3000;

const app: Application = express();

app.use(express.json());
app.use("/api", routes);
app.get("/", (req: Request, res: Response) => {
  res.send("Hello World ");
});

// start express server
app.listen(PORT, () => {
  console.log(`Server is starting at prot:${PORT}`);
});
export default app;
