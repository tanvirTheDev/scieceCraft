import type { Metadata } from "next"
import ContactPageClient from "./ContactPageClient"

export const metadata: Metadata = {
  title: "Contact Us - ScienceCraft",
  description: "Get in touch with our team for inquiries about custom science projects.",
}

export default function ContactPage() {
  return <ContactPageClient />
}

