import express, { Application, Request, Response } from "express";
import errorMiddleware from "./middleware/error";
const PORT = 3000;

const app: Application = express();

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.json({
    message: "Hello World ",
  });
});
app.use(errorMiddleware);
//handle not valid routes
app.use((req: Request, res: Response) => {
  res.status(404).send("Not valid routes");
});
// start express server
app.listen(PORT, () => {
  console.log(`Server is starting at prot:${PORT}`);
});
export default app;
