"use client"

import { useState } from "react"
import Link from "next/link"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Loader2, Mail, MapPin, Phone } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { toast } from "@/components/ui/use-toast"

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  phone: z.string().min(10, {
    message: "Please enter a valid phone number.",
  }),
  subject: z.string({
    required_error: "Please select a subject.",
  }),
  message: z.string().min(20, {
    message: "Message must be at least 20 characters.",
  }),
})

export default function ContactPageClient() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)

    toast({
      title: "Message Sent",
      description: "We've received your message and will get back to you soon.",
    })

    // In a real app, you would submit to your API here
    console.log(values)

    form.reset()
  }

  return (
    <div className="container py-10">
      <div className="flex flex-col gap-8">
        <div className="space-y-4 text-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Contact Us</h1>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
            Have questions or need more information? Get in touch with our team.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Phone className="h-5 w-5" /> Phone
              </CardTitle>
              <CardDescription>Call us directly</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="font-medium">Main Office</p>
              <p className="text-muted-foreground">+880 1XXX-XXXXXX</p>
              <p className="mt-4 font-medium">Customer Support</p>
              <p className="text-muted-foreground">+880 1XXX-XXXXXX</p>
              <p className="mt-4 text-sm text-muted-foreground">Available Monday-Friday, 9am-6pm</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Mail className="h-5 w-5" /> Email
              </CardTitle>
              <CardDescription>Send us an email</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="font-medium">General Inquiries</p>
              <p className="text-muted-foreground">info@sciencecraft.com</p>
              <p className="mt-4 font-medium">Project Support</p>
              <p className="text-muted-foreground">support@sciencecraft.com</p>
              <p className="mt-4 font-medium">Business Partnerships</p>
              <p className="text-muted-foreground">partners@sciencecraft.com</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="h-5 w-5" /> Address
              </CardTitle>
              <CardDescription>Visit our office</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="font-medium">Main Office</p>
              <p className="text-muted-foreground">
                123 Science Street
                <br />
                Gulshan, Dhaka 1212
                <br />
                Bangladesh
              </p>
              <p className="mt-4 text-sm text-muted-foreground">Open for visits by appointment only</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">Send Us a Message</h2>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name</FormLabel>
                      <FormControl>
                        <Input placeholder="John Doe" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="john@example.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone Number</FormLabel>
                        <FormControl>
                          <Input placeholder="+880 1XXX-XXXXXX" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Subject</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a subject" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="general">General Inquiry</SelectItem>
                          <SelectItem value="project">Project Information</SelectItem>
                          <SelectItem value="quote">Request a Quote</SelectItem>
                          <SelectItem value="support">Technical Support</SelectItem>
                          <SelectItem value="partnership">Business Partnership</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Please describe how we can help you..."
                          className="min-h-32"
                          {...field}
                        />
                      </FormControl>
                      <FormDescription>
                        Please provide as much detail as possible so we can best assist you.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    "Send Message"
                  )}
                </Button>
              </form>
            </Form>
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>

            <div className="space-y-4">
              <div className="space-y-2">
                <h3 className="font-medium">What areas do you serve?</h3>
                <p className="text-muted-foreground">
                  We primarily serve customers throughout Bangladesh. For international orders, please contact us
                  directly to discuss shipping and logistics options.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="font-medium">How quickly can you complete a project?</h3>
                <p className="text-muted-foreground">
                  Our standard turnaround time is 2-4 weeks depending on project complexity. For urgent requests, we
                  offer expedited services at an additional cost.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="font-medium">Do you offer consultations before starting a project?</h3>
                <p className="text-muted-foreground">
                  Yes, we offer free initial consultations to discuss your project requirements and provide guidance.
                  These can be conducted via phone, video call, or in person at our office.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="font-medium">Can you help with project presentations?</h3>
                <p className="text-muted-foreground">
                  We can provide presentation materials, display boards, and documentation to help you effectively
                  present your science project.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="font-medium">What if I'm not satisfied with my project?</h3>
                <p className="text-muted-foreground">
                  Customer satisfaction is our priority. If you're not completely satisfied with your project, we'll
                  work with you to make necessary adjustments or improvements at no additional cost.
                </p>
              </div>
            </div>

            <div className="bg-muted p-6 rounded-lg mt-8">
              <h3 className="font-medium mb-2">Need an immediate response?</h3>
              <p className="text-muted-foreground mb-4">
                For urgent inquiries, you can reach our customer support team directly.
              </p>
              <Button variant="outline" asChild>
                <Link href="tel:+8801XXXXXXXXX">
                  <Phone className="mr-2 h-4 w-4" /> Call Us Now
                </Link>
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t">
          <h2 className="text-2xl font-bold mb-6 text-center">Our Location</h2>
          <div className="aspect-video w-full rounded-lg overflow-hidden border">
            {/* In a real implementation, you would embed a Google Map here */}
            <div className="w-full h-full bg-muted flex items-center justify-center">
              <p className="text-muted-foreground">Map Embed Would Appear Here</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

