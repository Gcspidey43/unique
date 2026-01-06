import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { fullName, phoneNumber, email, consultationType, preferredDate, preferredTime } = body

    // Validation
    if (!fullName || !phoneNumber || !email || !consultationType || !preferredDate || !preferredTime) {
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

    // Create consultation booking in database
    const consultation = await db.consultationBooking.create({
      data: {
        fullName,
        phoneNumber,
        email,
        consultationType,
        preferredDate,
        preferredTime
      }
    })

    return NextResponse.json(
      { success: true, bookingId: consultation.id },
      { status: 201 }
    )
  } catch (error) {
    console.error('Error creating consultation booking:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

export async function GET() {
  try {
    const consultations = await db.consultationBooking.findMany({
      orderBy: {
        createdAt: 'desc'
      }
    })

    return NextResponse.json({ consultations })
  } catch (error) {
    console.error('Error fetching consultations:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
