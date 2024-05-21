"use client";
import React, { useState, useTransition,useEffect } from "react";
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
import { signIn, useSession } from "next-auth/react";

const LoginForm = () => {
  const [obsecurePassword, setObsecurePassword] = useState(false);
  const [error, setError] = useState("");
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const session = useSession();
  useEffect(() => {
    if (session.status === "authenticated") {
      router.replace("/dashboard");
    }
  }, [session, router]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;
    console.log(email, password);
    startTransition(async () => {
      setError("");
      if ( !email || !password) {
        setError("All fields are required.");
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
      const res = await signIn("credentials", {
        redirect: false,
        email,
        password,
      });
      if (res?.error) {
        setError("Invalid email or password");
        if (res?.url) {
          router.replace("/dashboard");
        }
      } else {
        setError("");
      }
    });
  };
  return (
    <>
      <div className="md:mx-auto max-w-md space-y-6">
        <Card>
          <CardHeader className="space-y-2 text-center">
            <CardTitle className="text-3xl font-bold">Login</CardTitle>
            <CardDescription className="text-gray-500 dark:text-gray-400">
              Enter your credentials to access your account.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <form onSubmit={handleSubmit} className="space-y-4">
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
                  "Login"
                )}
              </Button>
            </form>
          </CardContent>
          <CardFooter className="flex justify-center items-center text-center">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Don't have an account?{"  "}
              <Link
                className="font-medium text-blue-600 hover:underline"
                href="/register"
              >
                Register
              </Link>
            </p>
          </CardFooter>
        </Card>
      </div>
    </>
  );
};

export default LoginForm;
