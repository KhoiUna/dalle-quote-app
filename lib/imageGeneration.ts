import { Configuration, OpenAIApi } from "openai";

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export default async function imageGeneration(prompt: string) {
  try {
    if (process.env.PRODUCTION === "false") {
      await sleep(3000);
      return "/next.svg";
    }

    const configuration = new Configuration({
      apiKey: process.env.OPENAI_KEY,
    });

    const openai = new OpenAIApi(configuration);

    const response = await openai.createImage({
      prompt:
        "Draw a 3D image representing this quote: " +
        prompt +
        " (remove any letters/sentences/words in the image!)",
      n: 1,
      size: "256x256",
    });

    const imageURL = response.data.data[0].url;

    return imageURL;
  } catch (error) {
    console.error("Error generating image", error);
    return;
  }
}
