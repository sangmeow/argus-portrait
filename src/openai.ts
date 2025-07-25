import OpenAI from "openai";
import dotenv from "dotenv";
dotenv.config();

import { defaultConstant } from "./constant";
import { payload } from "./interfaces/payload";

const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

const response = async (payload: payload) => {
  try {
    const result = await client.responses.create({
      model: "gpt-4.1",
      input: [
        {
          role: "user",
          content: [
            {
              type: "input_text",
              text: defaultConstant.requestContent,
            },
            {
              type: "input_image",
              image_url: payload.url,
              detail: "high",
            },
          ],
        },
      ],
    });
    return result;
  } catch (error) {
    console.error("Error fetching response:", error);
  }
};

export default response;
