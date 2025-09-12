const { PrismaClient } = require('@prisma/client')
const bcrypt = require('bcrypt')

const prisma = new PrismaClient()

async function main() {
  console.log('Creating test users with required wallet...')
  
  // Create test users with hashed passwords and REQUIRED wallet
  const testUsers = [
    { 
      email: 'user@example.com', 
      password: 'password123',
      wallet: '0x1234567890abcdef1234567890abcdef12345678' // Required
    },
    { 
      email: 'test@example.com', 
      password: 'test123',
      wallet: '0xabcdef1234567890abcdef1234567890abcdef12' // Required
    }
  ]

  for (const userData of testUsers) {
    const hashedPassword = await bcrypt.hash(userData.password, 12)
    
    const user = await prisma.user.upsert({
      where: { email: userData.email },
      update: { 
        password: hashedPassword,
        wallet: userData.wallet // Required
      },
      create: {
        email: userData.email,
        password: hashedPassword,
        wallet: userData.wallet, // Required
        emailVerified: new Date(),
      },
    })
    
    console.log(`User ${user.email} created (wallet stored but not displayed)`)
  }
  
  console.log('Test users with required wallet created successfully!')
}

main()
  .catch((e) => {
    console.error('Error creating test users:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })