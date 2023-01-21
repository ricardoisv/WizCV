import NextAuth from "next-auth/next"
import  GoogleProvider from "next-auth/providers/google"

export default NextAuth  ({ 
  site: process.env.NEXTAUTH_URL,
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    // ...add more providers here
  ],
  secret:process.env.JWT_SECRET
})
