import { NextRequest, NextResponse } from 'next/server'

// Simple in-memory storage (replace with database in production)
let users: any[] = [
  { id: "1", email: "user@example.com", password: "password123" },
  { id: "2", email: "test@example.com", password: "test123" }
]

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json()

    // Validation
    if (!email || !password) {
      return NextResponse.json(
        { error: 'Email and password are required' },
        { status: 400 }
      )
    }
    
    // ОТСЮДА ВНИЗ (НУ И ВЫШЕ ТАМ УБРАТЬ)

    // Check if user already exists
    const existingUser = users.find(user => user.email === email)
    
    if (existingUser) {
      return NextResponse.json(
        { error: 'User already exists' },
        { status: 409 }
      )
    }

    // In production, you would:
    // 1. Hash the password (using bcrypt)
    // 2. Store in database
    // 3. Send verification email

    // Create new user
    const newUser = {
      id: (users.length + 1).toString(),
      email,
      password, // In real app, store hashed password!
    }

    users.push(newUser)

    return NextResponse.json(
      { message: 'User created successfully', userId: newUser.id },
      { status: 201 }
    )

  } catch (error) {
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}