import { connect } from "@/utils/db";
import NextAuth from "next-auth";
import User from "@/models/User";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {},

      async authorize(credentials) {
        const { email, password } = credentials;
        await connect();
        try {
          const user = await User.findOne({ email: email });
          if (user) {
            const isPasswordCorrect = await bcrypt.compare(
              password,
              user.password
            );
            if (isPasswordCorrect) {
              return user;
            } else {
              throw new Error("Invalid credentials");
            }
          } else {
            throw new Error("User not found");
          }
        } catch (error) {
          throw new Error(error.message);
        }
      },
    }),
  ],
  callbacks: {
    async signIn({ account, profile }) {
      return true;
    },
    async signOut({ url }) {
      return { redirect: true, url: "/login" };
    },
    async session({ session, token }) {
      console.log("session:==>> ", session);
      return session;
    },
    async jwt({ token, user, trigger, session, account }) {
      if (user) {
        token.user = user;
      }
      return token;
    },
  },
  session: {
    strategy: "jwt",
  },
  secret: "secret!JWTrandom65",

  pages: {
    signIn: "/login",
    signOut: "/login",
    signUp: "/register",
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
