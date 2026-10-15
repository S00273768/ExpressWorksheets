import request from "supertest";
import {app} from "../../src/app";

describe("GET /ping", () => {
    it("should return Hello from Eliska", async () => {
        const response = await request(app)
            .get("/ping");

        expect(response.status).toBe(200);

        expect(response.body).toEqual({
            message: "Hello from Eliska"
        });
    });
});