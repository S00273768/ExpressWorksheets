import request from "supertest";
import {app} from "../../src/app";

//Do not need since connected already in app.ts
/*import { connectDB } from "../../src/config/database";

beforeAll(async () => {
    await connectDB();
});*/

describe("GET /cars", () => {
    it("return all cars", async () => {
        const response = await request(app)
            .get('/api/v1/cars');
        
        expect(response.status).toBe(200);
    });
});

