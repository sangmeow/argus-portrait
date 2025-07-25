import express, { Express, Request, Response } from "express";
import resultValue from "./openai";
import dotenv from "dotenv";
dotenv.config({ path: [".env", `.env.${process.env.NODE_ENV}`] });

import { payload } from "./interfaces/payload";

const app: Express = express();
const port = process.env.PORT || 3000; // heroku default post is 34381

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req: Request, res: Response) => {
  res.json({
    message: "Welcome to Argus Portrait API",
    version: process.env.npm_package_version,
  });
});

app.post("/", async (req: Request, res: Response) => {
  if (!req.body || !req.body.url) {
    return res.status(400).json({ error: "Invalid request body" });
  }
  const requestBody = req.body as payload;
  // request content
  console.log(req.body, null, 2);
  // call OpenAI API
  const result = await resultValue(requestBody);
  if (result === undefined) return res.status(500).json({ error: `Error while downloading ${requestBody.url}` });
  if (result instanceof Error) return res.status(500).json({ error: "Internal Server Error" });
  // filtering result
  console.log(result?.output_text, null, 2);
  // response content
  res.json(Object.assign(JSON.parse(result?.output_text || "{}")));
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
