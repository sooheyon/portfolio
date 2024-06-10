
import supabaseClient from "@/public/lib/supabaseClient";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
  try {
    const { name, email, password, message } = await req.json();

    if (!(name && email && password && message)) {
      return NextResponse.json({ message: "Not exist data." }, { status: 200 });
    }

    if (message.length > 300) {
      return NextResponse.json({ message: "Message length is over 300" });
    }

    const response = await supabaseClient.from("guest").upsert({
      name,
      email,
      password,
      message,
    }).select().limit(1).single();

    console.log(response)

    const guest = response.data

    if(!guest){
      throw 'not create'
    }

    return NextResponse.json({ guest }, { status: 200 });
  } catch (error) {
    console.log(error);

    return NextResponse.json({ message: "Server Error" }, { status: 500 });
  }
};
