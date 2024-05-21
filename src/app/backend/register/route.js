import user from "@/models/User";
import connect from "@/utils/db";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

export const POST = async (request) => {
  const { name, email, password } = await request.json();
  await connect();
  const existingUser = await user.findOne({ email });
  if (existingUser) {
    return new NextResponse("Email is already in use", {
      status: 400,
    });
  }
  const hashedPassword = await bcrypt.hash(password, 5);
  const newUser = user({
    name: name,
    email: email,
    password: hashedPassword,
  });
  try {
    await newUser.save();
    return new NextResponse("User Registered Successfully", {
      status: 200,
    });
  } catch (err) {
    return new NextResponse(err, {
      status: 500,
    });
  }
};
