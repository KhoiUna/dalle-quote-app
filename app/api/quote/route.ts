import { NextApiRequest } from "next";
import { NextResponse } from "next/server";
import axios from "axios";

export async function GET(req: NextApiRequest) {
  try {
    const url = "https://zenquotes.io/api/today";
    const { data } = await axios(url);

    return NextResponse.json({
      success: data[0],
      error: false,
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      error: "Internal server error",
    });
  }
}
