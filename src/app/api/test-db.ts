import { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '@/libs/prisma'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    // Test database connection
    await prisma.$queryRaw`SELECT 1`
    
    // Get users count
    const usersCount = await prisma.user.count()
    
    // Get posts count
    const postsCount = await prisma.post.count()
    
    res.status(200).json({
      success: true,
      message: 'Database connection successful',
      data: {
        usersCount,
        postsCount
      }
    })
  } catch (error) {
    console.error('Database test failed:', error)
    res.status(500).json({
      success: false,
      message: 'Database connection failed',
      error: error instanceof Error ? error.message : 'Unknown error'
    })
  }
}