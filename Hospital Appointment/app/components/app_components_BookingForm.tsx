'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Receipt from './Receipt'
import { submitBooking } from '../actions'

export default function BookingForm() {
  const [formData, setFormData] = useState({
    name: '',
    icNumber: '',
    phoneNumber: '',
    date: '',
    time: ''
  })
  const [receipt, setReceipt] = useState(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const result = await submitBooking(formData)
    setReceipt(result)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
        <div>
          <Label htmlFor="name">Name</Label>
          <Input id="name" name="name" value={formData.name} onChange={handleChange} required />
        </div>
        <div>
          <Label htmlFor="icNumber">IC Number</Label>
          <Input id="icNumber" name="icNumber" value={formData.icNumber} onChange={handleChange} required />
        </div>
        <div>
          <Label htmlFor="phoneNumber">Phone Number</Label>
          <Input id="phoneNumber" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} required />
        </div>
        <div>
          <Label htmlFor="date">Date</Label>
          <Input id="date" name="date" type="date" value={formData.date} onChange={handleChange} required />
        </div>
        <div>
          <Label htmlFor="time">Time</Label>
          <Input id="time" name="time" type="time" value={formData.time} onChange={handleChange} required />
        </div>
        <Button type="submit">Submit Booking</Button>
      </form>
      {receipt && <Receipt data={receipt} />}
    </div>
  )
}

