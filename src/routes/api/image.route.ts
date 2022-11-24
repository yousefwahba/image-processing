import { Router, Request, Response } from "express";
import path from "path";
import { promises as fsPromises } from "fs";
import fs from "fs";
import resizeImage from "../../utils/imageResizer";
const routes = Router();

routes.get("/", async (req: Request, res: Response) => {
  //query processing
  try {
    const filename = req.query.filename as unknown as string;
    const height = parseInt(req.query.height as unknown as string);
    const width = parseInt(req.query.width as unknown as string);

    //get image path (before resize and after resize)
    //before
    const imagePathBefore = `${path.resolve(
      __dirname,
      `../../../images/before/${filename}.jpg`
    )}`;
    //after
    const imagePathAfter = `${path.resolve(
      __dirname,
      `../../../images/after/${filename}-${height}-${width}.jpg`
    )}`;

    //image file processing
    if (!fs.existsSync(imagePathAfter) && fs.existsSync(imagePathBefore)) {
      const resizedImage = await resizeImage(
        imagePathBefore,
        filename,
        height,
        width
      );

      await fsPromises.writeFile(imagePathAfter, resizedImage);
    }
    res.sendFile(path.resolve(imagePathAfter));
  } catch (err) {
    res.send("none valid parameters");
  }
});

export default routes;
