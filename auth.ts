import NextAuth from "next-auth";
import authConfig from "./auth.config";
import { PrismaAdapter } from "@auth/prisma-adapter"
import { db } from "./lib/db";

export const {
    handlers: { GET, POST },
    auth,
    signIn,
    signOut
    // auth is the universal auth export from next-auth
} = NextAuth({
    adapter: PrismaAdapter(db),
    session: { strategy: "jwt" },
    ...authConfig
})