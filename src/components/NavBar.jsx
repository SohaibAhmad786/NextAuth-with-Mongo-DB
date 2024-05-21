"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const { data: session, status } = useSession();
  const router = useRouter();

  const handleLogout = async (e) => {
    e.preventDefault();
    if (isOpen === true) {
      toggleMenu();
    }
    try {
      const data = await signOut({
        callbackUrl: "/login",
      });
      router.refresh();
    } catch (err) {
      throw new Error(err);
    }
  };

  return (
    <div className="flex items-center justify-between bg-white px-10 py-3 shadow-sm dark:bg-gray-950 transition-all duration-300 ease-in-out hover:shadow-lg">
      <Link
        className="flex items-center gap-2 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
        href={`${status === "authenticated" ? "#" : "/"}`}
      >
        <span className="text-lg font-medium text-gray-700 dark:text-gray-300 transition-colors">
          Home
        </span>
      </Link>
      <div className="md:hidden">
        <button
          onClick={toggleMenu}
          className="text-gray-700 dark:text-gray-300 focus:outline-none"
        >
          {isOpen ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          )}
        </button>
      </div>
      <nav className="hidden md:flex items-center gap-4">
        {status === "authenticated" && <span>{session?.user?.email}</span>}
        {status === "authenticated" && (
          <Link
            className="text-sm font-medium text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
            href="/dashboard"
          >
            Dashboard
          </Link>
        )}
        {status === "authenticated" && (
          <Link
            onClick={handleLogout}
            className="text-sm font-medium text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
            href="#"
          >
            Log Out
          </Link>
        )}
        {status === "unauthenticated" && (
          <Link
            className="text-sm font-medium text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
            href="/login"
          >
            Login
          </Link>
        )}
        {status === "unauthenticated" && (
          <Link
            className="text-sm font-medium text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
            href="/register"
          >
            Register
          </Link>
        )}
      </nav>
      <div
        className={`md:hidden ${
          isOpen ? "block" : "hidden"
        } absolute top-14 left-0 right-0 bg-white dark:bg-gray-950 shadow-lg`}
      >
        <div className="flex flex-col items-start p-4">
          {status === "authenticated" && <span>{session?.user?.email}</span>}
          {status === "authenticated" && (
            <Link
              className="text-sm font-medium text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
              href="/dashboard"
              onClick={toggleMenu}
            >
              Dashboard
            </Link>
          )}
          {status === "authenticated" && (
            <Link
              className="text-sm font-medium text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
              href="#"
              onClick={handleLogout}
            >
              Log Out
            </Link>
          )}
          {status === "unauthenticated" && (
            <Link
              className="text-sm font-medium text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
              href="/login"
              onClick={toggleMenu}
            >
              Login
            </Link>
          )}
          {status === "unauthenticated" && (
            <Link
              className="text-sm font-medium text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
              href="/register"
              onClick={toggleMenu}
            >
              Register
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
