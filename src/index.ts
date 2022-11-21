import express, { Application, Request, Response } from 'express';
const PORT = 3000;

const app: Application = express();
app.get('/', (req: Request, res: Response) => {
  res.json({
    message: 'Hello World ',
  });
});
// start express server
app.listen(PORT, () => {
  console.log(`Server is starting at prot:${PORT}`);
});
export default app;
