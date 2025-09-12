import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        // ТУТ НАША ЛОГИКА 
        // Simple hardcoded users - replace with database
        const users = [
          { id: "1", email: "user@example.com", password: "password123" },
          { id: "2", email: "test@example.com", password: "test123" }
        ]

        const user = users.find(
          (u) => u.email === credentials?.email && u.password === credentials?.password
        )

        if (user) {
          return { id: user.id, email: user.email }
        }
        return null
      }
    })
  ],
  pages: {
    signIn: '/auth/signin',
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id
      }
      return token
    },
    async session({ session, token }) {
      if (token && session.user) {
        session.user.id = token.id as string
      }
      return session
    }
  },
  session: {
    strategy: 'jwt',
    maxAge: 30 * 24 * 60 * 60,
  }
})

export { handler as GET, handler as POST }