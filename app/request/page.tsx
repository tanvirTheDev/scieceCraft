import type { Metadata } from "next"
import { ProjectRequestForm } from "./project-request-form"

export const metadata: Metadata = {
  title: "Request a Project - ScienceCraft",
  description: "Submit your custom science project requirements and get a quote.",
}

export default function RequestPage() {
  return (
    <div className="container py-10">
      <div className="mx-auto max-w-3xl space-y-6">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Request a Custom Science Project
          </h1>
          <p className="text-muted-foreground">
            Fill out the form below with your project requirements and we'll get back to you with a quote.
          </p>
        </div>
        <ProjectRequestForm />
      </div>
    </div>
  )
}

