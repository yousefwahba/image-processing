import { Request, Response, Router } from "express";
import imageRoute from "./api/image.route";
// import errorMiddleware from "../middleware/error";
const routes = Router();

routes.use("/image", imageRoute);
// routes.use(errorMiddleware);
//handle not valid routes
routes.use((req: Request, res: Response) => {
  res.status(404).send("Not valid routes");
});
export default routes;
