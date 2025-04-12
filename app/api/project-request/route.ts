import { NextResponse } from "next/server";

import connectDB from "@/lib/mongoose";
import { ProjectRequest } from "@/models/ProjectRequest";

export async function POST(req: Request) {
  try {
    await connectDB();
    const body = await req.json();

    const projectRequest = new ProjectRequest(body);
    await projectRequest.save();

    return NextResponse.json(
      { message: "Project request submitted successfully!" },
      { status: 201 }
    );
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
