import { NextApiRequest, NextApiResponse } from "next";


export async function GET(req: NextApiRequest, res: NextApiResponse) {

  try {
    const fileName = "Prakhil_Lohiya.pdf";
    const URL = "https://bit.ly/3vnTdco";

    const response = await fetch(URL);

    return new Response(response.body, {
      headers: {
        ...response.headers,
        "content-disposition": `attachment; filename="${fileName}"`,
      },
    });
  } catch (error) {
    console.error("Error downloading file:", error);
    res.status(500).end();
  }



}