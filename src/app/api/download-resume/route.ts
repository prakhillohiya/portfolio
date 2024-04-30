import { NextRequest, NextResponse } from "next/server";


export async function GET(req: NextRequest, res: NextResponse) {

  const fileName = "Prakhil_Lohiya.pdf";
  const URL = "https://bit.ly/3vnTdco";

  const response = await fetch(URL);

  return new Response(response.body, {
    headers: {
      ...response.headers,
      "content-disposition": `attachment; filename="${fileName}"`,
    },
  });


}