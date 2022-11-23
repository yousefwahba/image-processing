import express, { Application, Request, Response } from "express";
import routes from "./routes";
const PORT = 3000;

const app: Application = express();

app.use(express.json());
app.use("/api", routes);
app.get("/", (req: Request, res: Response) => {
  res.setHeader("Content-type", "text/html");
  res.send(
    "welcome <a href='/api/image?filename=img1&height=250&width=220'>click here</a>"
  );
});

// start express server
app.listen(PORT, () => {
  console.log(`Server is starting at prot:${PORT}`);
});
export default app;
