import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Quote from "@/models/Quote";

export async function POST(req) {
  try {
    await connectDB();

    const body = await req.json();

    const quote = await Quote.create(body);

    return NextResponse.json(
      {
        success: true,
        data: quote,
      },
      { status: 201 }
    );
  } catch (error) {
    console.log(error);

    return NextResponse.json(
      {
        success: false,
        message: "Server Error",
      },
      { status: 500 }
    );
  }
}