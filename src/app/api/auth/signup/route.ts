import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/libs/prisma'
import bcrypt from 'bcrypt'

export async function POST(request: NextRequest) {
  try {
    const { email, password, wallet } = await request.json()

    // Validation - all fields are required
    if (!email || !password || !wallet) {
      return NextResponse.json(
        { error: 'Email, password, and wallet are required' },
        { status: 400 }
      )
    }
    
    // Check if user already exists
    const existingUser = await prisma.user.findUnique({
      where: { email }
    })
    
    if (existingUser) {
      return NextResponse.json(
        { error: 'User already exists' },
        { status: 409 }
      )
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 12)

    // Create user in database (wallet is required and stored)
    const user = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        wallet, // Required wallet
        emailVerified: new Date(),
      }
    })

    // Return user without password AND without wallet
    const { password: _, wallet: __, ...userWithoutSensitiveData } = user

    return NextResponse.json(
      { 
        success: true, 
        message: 'User created successfully', 
        user: userWithoutSensitiveData // Only includes id, email, timestamps
      },
      { status: 201 }
    )

  } catch (error) {
    console.error('Registration error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}