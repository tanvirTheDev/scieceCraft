import Link from "next/link"
import type { Metadata } from "next"
import { CheckCircle } from "lucide-react"

import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Thank You - ScienceCraft",
  description: "Your project request has been submitted successfully.",
}

export default function ThankYouPage() {
  return (
    <div className="container py-20">
      <div className="mx-auto max-w-md text-center">
        <div className="flex justify-center mb-4">
          <div className="rounded-full bg-primary/10 p-3">
            <CheckCircle className="h-12 w-12 text-primary" />
          </div>
        </div>
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4">Thank You!</h1>
        <p className="text-muted-foreground mb-8">
          Your project request has been submitted successfully. We'll review your requirements and get back to you
          within 24 hours with a quote.
        </p>
        <div className="space-y-4">
          <Button asChild className="w-full">
            <Link href="/dashboard">Go to Dashboard</Link>
          </Button>
          <Button variant="outline" asChild className="w-full">
            <Link href="/">Return to Home</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

