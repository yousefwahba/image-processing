import { Request, Response, Router } from "express";
import errorMiddleware from "../middleware/error";
import imageRoute from "./api/image.route";
const routes = Router();

routes.use("/image", imageRoute);
routes.use(errorMiddleware);
//handle not valid routes
routes.use((req: Request, res: Response) => {
  res.status(404).send("Not valid routes");
});
export default routes;
