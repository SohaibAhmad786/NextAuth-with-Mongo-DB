"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
const DashBoardPage = () => {
  const router = useRouter();
  const session = useSession();
  useEffect(() => {
    if (session.status === "unauthenticated") {
      router.replace("/login");
    }
  }, [session, router]);

  return <div>DashBoardPage</div>;
};

export default DashBoardPage;
