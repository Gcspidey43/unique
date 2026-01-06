import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { fullName, email, phoneNumber, subject, message } = body

    // Validation
    if (!fullName || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      )
    }

    // Create contact message in database
    const contactMessage = await db.contactMessage.create({
      data: {
        fullName,
        email,
        phoneNumber: phoneNumber || null,
        subject: subject || null,
        message
      }
    })

    return NextResponse.json(
      { success: true, messageId: contactMessage.id },
      { status: 201 }
    )
  } catch (error) {
    console.error('Error creating contact message:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

export async function GET() {
  try {
    const messages = await db.contactMessage.findMany({
      orderBy: {
        createdAt: 'desc'
      }
    })

    return NextResponse.json({ messages })
  } catch (error) {
    console.error('Error fetching contact messages:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
