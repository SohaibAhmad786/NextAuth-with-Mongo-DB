import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import { getServerSession } from "next-auth";
import AuthProvider from "@/utils/SessionProvider";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});
export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({ children }) {
  const session = await getServerSession();
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider session={session}>
          <div className="mx-auto text-xl gap-2 mb-10">
            <NavBar />
            <div className="p-5"></div>
            <div className="px-3 md:px-10">{children}</div>
          </div>
        </AuthProvider>
      </body>
    </html>
  );
}
