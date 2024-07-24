import connect from "@/lib/db";
import User from "@/lib/modals/user.modal";
import Animal from "@/lib/modals/animal";
import { NextResponse } from "next/server";
import { Types } from "mongoose";

export const GET = async () => {
  try {
    await connect();
    const animals = await Animal.find();
    return new NextResponse(JSON.stringify(animals), { status: 200 });
  } catch (error: any) {
    return new NextResponse("Error in fetching animals" + error.message, {
      status: 500,
    });
  }
}

export const POST = async (request: Request) => {
    try {
      const body = await request.json();
      await connect();
      const newAnimal = new Animal(body);
      await newAnimal.save();
  
      return new NextResponse(
        JSON.stringify({ message: "User is created", animal: newAnimal }),
        { status: 200 }
      );
    } catch (error: any) {
      return new NextResponse("Error in creating animal" + error.message, {
        status: 500,
      });
    }
  };
  