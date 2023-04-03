import imageGeneration from "@/lib/imageGeneration";
import { NextApiRequest } from "next";
import { NextResponse } from "next/server";

export async function GET(req: NextApiRequest) {
  const { searchParams } = new URL(req.url as string);
  const prompt = searchParams.get("prompt");

  const imageURL = await imageGeneration(prompt as string);

  return NextResponse.json(imageURL);
}
