import Link from "next/link"
import type { Metadata } from "next"
import { ArrowLeft, Calendar, Clock, MessageSquare, ShoppingCart } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { ProjectStatusBadge } from "../../project-status-badge"

export const metadata: Metadata = {
  title: "Project Details - ScienceCraft",
  description: "View the details of your science project order.",
}

export default function ProjectDetailsPage({ params }: { params: { id: string } }) {
  // In a real app, you would fetch the project data from your API
  const project = {
    id: params.id,
    name: "Arduino Weather Station",
    category: "Electronics",
    status: "in_progress" as const,
    deadline: "April 2, 2025",
    price: 6200,
    description:
      "A weather station using Arduino that measures temperature, humidity, pressure, and rainfall with LCD display.",
    createdAt: "February 15, 2025",
    updates: [
      {
        date: "February 15, 2025",
        status: "Request Submitted",
        description: "Your project request has been received and is under review.",
      },
      {
        date: "February 16, 2025",
        status: "Quote Provided",
        description: "We've reviewed your request and provided a quote of ৳6,200.",
      },
      {
        date: "February 17, 2025",
        status: "Payment Received",
        description: "Payment received. Your project is now in our queue.",
      },
      {
        date: "February 20, 2025",
        status: "In Progress",
        description: "We've started working on your Arduino Weather Station. Components have been ordered.",
      },
    ],
  }

  return (
    <div className="container py-10">
      <div className="flex flex-col gap-8">
        <div className="flex items-center gap-4">
          <Button variant="outline" size="icon" asChild>
            <Link href="/dashboard">
              <ArrowLeft className="h-4 w-4" />
              <span className="sr-only">Back to Dashboard</span>
            </Link>
          </Button>
          <div>
            <h1 className="text-3xl font-bold tracking-tighter">{project.name}</h1>
            <p className="text-muted-foreground">Project ID: {project.id}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle>Project Details</CardTitle>
                    <CardDescription>Category: {project.category}</CardDescription>
                  </div>
                  <ProjectStatusBadge status={project.status} />
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-medium">Description</h3>
                  <p className="text-muted-foreground">{project.description}</p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h3 className="font-medium">Deadline</h3>
                    <p className="text-muted-foreground flex items-center gap-2">
                      <Calendar className="h-4 w-4" /> {project.deadline}
                    </p>
                  </div>
                  <div>
                    <h3 className="font-medium">Submitted On</h3>
                    <p className="text-muted-foreground flex items-center gap-2">
                      <Clock className="h-4 w-4" /> {project.createdAt}
                    </p>
                  </div>
                </div>
                <div>
                  <h3 className="font-medium">Price</h3>
                  <p className="text-xl font-bold">৳{project.price.toLocaleString()}</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Project Timeline</CardTitle>
                <CardDescription>Track the progress of your project</CardDescription>
              </CardHeader>
              <CardContent>
                <ol className="relative border-l border-muted">
                  {project.updates.map((update, index) => (
                    <li key={index} className="mb-6 ml-6">
                      <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs">
                        {index + 1}
                      </span>
                      <h3 className="font-medium">{update.status}</h3>
                      <time className="text-xs text-muted-foreground">{update.date}</time>
                      <p className="text-sm text-muted-foreground mt-1">{update.description}</p>
                    </li>
                  ))}
                </ol>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button className="w-full" asChild>
                  <Link href={`/dashboard/projects/${project.id}/messages`}>
                    <MessageSquare className="mr-2 h-4 w-4" /> Message Us
                  </Link>
                </Button>
                {project.status === "quoted" && (
                  <Button className="w-full" asChild>
                    <Link href={`/dashboard/projects/${project.id}/payment`}>
                      <ShoppingCart className="mr-2 h-4 w-4" /> Pay Now
                    </Link>
                  </Button>
                )}
                <Button variant="outline" className="w-full" asChild>
                  <Link href="/request">Request Similar Project</Link>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Need Help?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  If you have any questions or need to make changes to your project, please contact us.
                </p>
                <Separator />
                <div className="space-y-2">
                  <p className="text-sm font-medium">Email</p>
                  <p className="text-sm text-muted-foreground">support@sciencecraft.com</p>
                </div>
                <div className="space-y-2">
                  <p className="text-sm font-medium">Phone</p>
                  <p className="text-sm text-muted-foreground">+880 1XXX-XXXXXX</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

