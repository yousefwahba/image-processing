import path from "path";
import sharp from "sharp";

const resizeImage = (
  outputPath: string,
  filename: string,
  height: number,
  width: number
): Promise<Buffer> => {
  return sharp(path.resolve(outputPath))
    .resize({
      width: width,
      height: height,
    })
    .toBuffer();
};
export default resizeImage;
