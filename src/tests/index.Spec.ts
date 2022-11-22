import supertest from "supertest";
import app from "../index";

const request = supertest(app);

describe("test main end point", () => {
  it("get /", async () => {
    const res = await request.get("/");
    expect(res.status).toBe(200);
  });
});
