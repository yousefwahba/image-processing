import { Router, Request, Response } from "express";
import path from "path";
import sharp from "sharp";
import { promises as fsPromises } from "fs";
import fs from "fs";
const routes = Router();

routes.get("/", async (req: Request, res: Response) => {
  const filename = req.query.filename as string;
  const height = parseInt(req.query.height as string);
  const width = parseInt(req.query.width as string);

  //query processing
  if (!filename) throw new Error("enter filename as string after ?filename=");
  if (!height || height <= 0) throw new Error("enter valid height");
  if (!width || width <= 0) throw new Error("enter valid width");

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
  console.log(!fs.existsSync(imagePathAfter), !fs.existsSync(imagePathBefore));
  //image file processing
  if (!fs.existsSync(imagePathAfter) && fs.existsSync(imagePathBefore)) {
    const temp = await sharp(path.resolve(imagePathBefore))
      .resize({
        width: width,
        height: height,
      })
      .toBuffer();
    await fsPromises.writeFile(imagePathAfter, temp);
  }
  res.sendFile(path.resolve(imagePathAfter));
});

export default routes;
