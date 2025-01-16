'use server'

import { v4 as uuidv4 } from 'uuid'

interface BookingData {
  name: string
  icNumber: string
  phoneNumber: string
  date: string
  time: string
}

export async function submitBooking(data: BookingData) {
  // Here you would typically save the booking data to a database
  // For this example, we'll just return the data with a generated booking ID
  const bookingId = uuidv4()
  return {
    ...data,
    bookingId
  }
}

