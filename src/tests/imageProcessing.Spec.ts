import resizeImage from "../utils/imageResizer";
import path from "path";

describe("test image processing function", () => {
  const imagePathBefore = `${path.resolve(
    __dirname,
    `../../images/before/img1.jpg`
  )}`;

  it("reject none valid input", async () => {
    await expectAsync(
      resizeImage(imagePathBefore, "img23", 200, 200)
    ).toBeResolved();
  });

  it("Resolve valid input", async () => {
    await expectAsync(
      resizeImage(imagePathBefore, "img1", 200, 200)
    ).toBeResolved();
  });
});
