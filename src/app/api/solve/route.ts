import { NextResponse } from "next/server"

export async function POST(req: Request) {
  const data = await req.formData()
  const question = data.get("question")

  return NextResponse.json({
    message: "Backend received:",
    question,
  })
}
