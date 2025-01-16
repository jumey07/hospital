import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface ReceiptProps {
  data: {
    name: string
    icNumber: string
    phoneNumber: string
    date: string
    time: string
    bookingId: string
  }
}

export default function Receipt({ data }: ReceiptProps) {
  return (
    <Card className="mt-8 max-w-md">
      <CardHeader>
        <CardTitle>Booking Receipt</CardTitle>
      </CardHeader>
      <CardContent>
        <dl className="space-y-2">
          <div>
            <dt className="font-semibold">Booking ID:</dt>
            <dd>{data.bookingId}</dd>
          </div>
          <div>
            <dt className="font-semibold">Name:</dt>
            <dd>{data.name}</dd>
          </div>
          <div>
            <dt className="font-semibold">IC Number:</dt>
            <dd>{data.icNumber}</dd>
          </div>
          <div>
            <dt className="font-semibold">Phone Number:</dt>
            <dd>{data.phoneNumber}</dd>
          </div>
          <div>
            <dt className="font-semibold">Date:</dt>
            <dd>{data.date}</dd>
          </div>
          <div>
            <dt className="font-semibold">Time:</dt>
            <dd>{data.time}</dd>
          </div>
        </dl>
      </CardContent>
    </Card>
  )
}

