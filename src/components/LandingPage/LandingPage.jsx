"use client"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import Image from "next/image";
import HeroBackgroud from "@/assets/heroBackground.png";

import React from "react";

const LandingPage = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <section className="relative w-full h-[80dvh] flex items-center justify-center">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            alt="Hero Background"
            className="w-full h-full object-cover
            object-center"
            height={1080}
            src={HeroBackgroud}
            style={{
              aspectRatio: "1920/1080",
              objectFit: "cover",
            }}
            width={1920}
          ></Image>
        </div>
        <div className="relative z-10 text-center space-y-6 px-4 md:px-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white">
            Unlock Your Digital Potential
          </h1>
          <p className="text-lg md:text-xl text-gray-200">
            Discover our innovative solutions and transform your business.
          </p>
          <Button className="inline-flex h-12 items-center justify-center rounded-md bg-gray-900 px-6 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300">
            Get Started
          </Button>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
        <div className="container px-4 md:px-6 space-y-12">
          <div className="flex flex-col items-center justify-center text-center space-y-4">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                Key Features
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Elevate Your Digital Experience
              </h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Our cutting-edge solutions empower you to achieve your digital
                goals with ease.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group relative overflow-hidden rounded-lg bg-white shadow-lg transition-all duration-300 dark:bg-gray-950">
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative z-10 p-6 space-y-4">
                <RocketIcon className="h-10 w-10 text-gray-900 dark:text-gray-50" />
                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-50">
                  Rapid Deployment
                </h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Get your application up and running in no time with our
                  streamlined deployment process.
                </p>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-lg bg-white shadow-lg transition-all duration-300 dark:bg-gray-950">
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative z-10 p-6 space-y-4">
                <BoltIcon className="h-10 w-10 text-gray-900 dark:text-gray-50" />
                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-50">
                  Blazing Performance
                </h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Deliver lightning-fast experiences with our optimized
                  infrastructure and cutting-edge technologies.
                </p>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-lg bg-white shadow-lg transition-all duration-300 dark:bg-gray-950">
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative z-10 p-6 space-y-4">
                <ShieldIcon className="h-10 w-10 text-gray-900 dark:text-gray-50" />
                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-50">
                  Robust Security
                </h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Safeguard your data and applications with our comprehensive
                  security measures.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-900 dark:bg-gray-950">
        <div className="container px-4 md:px-6 space-y-12 text-center">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter text-white sm:text-5xl">
              Ready to Elevate Your Digital Presence?
            </h2>
            <p className="max-w-[700px] mx-auto text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Take the first step towards transforming your business. Get in
              touch with our experts today.
            </p>
          </div>
          <form
            onSubmit={handleSubmit}
            className="mx-auto w-full max-w-sm space-y-2"
          >
            <div className="flex space-x-2">
              <Input
                className="max-w-lg flex-1"
                placeholder="Enter your email"
                type="email"
              />
              <Button
                className="inline-flex h-10 items-center justify-center rounded-md bg-gray-50 px-6 text-sm font-medium text-gray-900 shadow transition-colors hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-800 dark:text-gray-50 dark:hover:bg-gray-700"
                type="submit"
              >
                Get Started
              </Button>
            </div>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              By submitting, you agree to our
              <Link className="underline underline-offset-2" href="#">
                Terms & Conditions
              </Link>
            </p>
          </form>
        </div>
      </section>
    </div>
  );
};

function BoltIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      <circle cx="12" cy="12" r="4" />
    </svg>
  );
}

function RocketIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
    </svg>
  );
}

function ShieldIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
    </svg>
  );
}
export default LandingPage;
