import BookingForm from './components/BookingForm'

export default function Home() {
  return (
    <main className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Hospital Appointment Booking</h1>
      <BookingForm />
    </main>
  )
}

