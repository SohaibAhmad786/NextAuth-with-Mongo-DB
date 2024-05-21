"use client";

import React, { useState, useTransition } from "react";
import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  CardFooter,
  Card,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { ImSpinner8 } from "react-icons/im";
import { useRouter } from "next/navigation";

const RegisterForm = () => {
  const router = useRouter();
  const [obsecurePassword, setObsecurePassword] = useState(false);
  const [error, setError] = useState("");
  const [isPending, startTransition] = useTransition();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    console.log(name, email, password);
    startTransition(async () => {
      setError("");
      if (!name || !email || !password) {
        setError("All fields are required.");
        return;
      }
      const nameRegex = /^[a-zA-Z\s]+$/;
      if (!nameRegex.test(name)) {
        setError("Name can only contain letters and spaces.");
        return;
      }
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        setError("Email is Invalid");
        return;
      }
      if (!password || password.length < 8) {
        setError("Password must be at least 8 characters long.");
        return;
      }

      try {
        const res = await fetch("/backend/register", {
          method: "Post",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            password,
          }),
        });
        if (res.status === 400) {
          setError("This email is already registered");
        }
        if (res.status === 200) {
          setError("");
          router.push("/login");
        }
      } catch (err) {
        setError("Error, Try Again");
        console.log(err);
      }
    });
  };
  return (
    <div>
      <div className="mx-auto max-w-md space-y-6">
        <Card>
          <CardHeader className="space-y-2 text-center">
            <CardTitle className="text-3xl font-bold">Register</CardTitle>
            <CardDescription className="text-gray-500 dark:text-gray-400">
              Create your account to get started.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Enter your name" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  placeholder="Enter your email"
                  required
                  type="email"
                />
              </div>
              <div className="space-y-2 pb-5">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Input
                    id="password"
                    placeholder="Enter your password"
                    required
                    type={obsecurePassword ? "text" : "password"}
                  />
                  <div
                    className="absolute inset-y-0 right-0 flex items-center mr-2 cursor-pointer text-zinc-400"
                    onClick={() => setObsecurePassword(!obsecurePassword)}
                  >
                    {obsecurePassword ? (
                      <FaEyeSlash size={20} />
                    ) : (
                      <FaEye size={20} />
                    )}
                  </div>
                </div>
              </div>
              {error && <p className="text-red-500 text-sm">{error}</p>}
              <Button disabled={isPending} className="w-full" type="submit">
                {isPending ? (
                  <ImSpinner8 className="animate-spin-fast" />
                ) : (
                  "Register"
                )}
              </Button>
            </form>
          </CardContent>
          <CardFooter className="flex justify-center items-center text-center">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Already have an account?{"  "}
              <Link
                className="font-medium text-blue-600 hover:underline"
                href="/login"
              >
                Login
              </Link>
            </p>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default RegisterForm;
