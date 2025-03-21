import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Clock, FileText, MessageSquare, Settings, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ProjectStatusBadge } from "../dashboard/project-status-badge"

export const metadata: Metadata = {
  title: "Admin Dashboard - ScienceCraft",
  description: "Manage project requests, orders, and customer communications.",
}

export default function AdminDashboardPage() {
  return (
    <div className="container py-10">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col md:flex-row justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tighter">Admin Dashboard</h1>
            <p className="text-muted-foreground">Manage project requests, orders, and customer communications</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" asChild>
              <Link href="/admin/settings">
                <Settings className="mr-2 h-4 w-4" /> Settings
              </Link>
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">New Requests</CardTitle>
              <FileText className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">12</div>
              <p className="text-xs text-muted-foreground">+3 since yesterday</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Projects</CardTitle>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">24</div>
              <p className="text-xs text-muted-foreground">8 due this week</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Customers</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">142</div>
              <p className="text-xs text-muted-foreground">+8 this month</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Revenue (Monthly)</CardTitle>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="h-4 w-4 text-muted-foreground"
              >
                <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
              </svg>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">৳85,400</div>
              <p className="text-xs text-muted-foreground">+12.5% from last month</p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="new" className="w-full">
          <TabsList>
            <TabsTrigger value="new">New Requests</TabsTrigger>
            <TabsTrigger value="active">Active Projects</TabsTrigger>
            <TabsTrigger value="completed">Completed</TabsTrigger>
            <TabsTrigger value="messages">Messages</TabsTrigger>
          </TabsList>
          <TabsContent value="new" className="space-y-4">
            {newRequests.map((project) => (
              <AdminProjectCard key={project.id} project={project} />
            ))}
          </TabsContent>
          <TabsContent value="active" className="space-y-4">
            {activeProjects.map((project) => (
              <AdminProjectCard key={project.id} project={project} />
            ))}
          </TabsContent>
          <TabsContent value="completed" className="space-y-4">
            <p>Completed projects will appear here.</p>
          </TabsContent>
          <TabsContent value="messages" className="space-y-4">
            <p>Recent messages will appear here.</p>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

interface Project {
  id: string
  name: string
  category: string
  status: "pending" | "quoted" | "in_progress" | "completed" | "delivered"
  deadline: string
  price?: number
  description: string
  customer: {
    name: string
    email: string
  }
  submittedAt: string
}

function AdminProjectCard({ project }: { project: Project }) {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-start justify-between">
          <div>
            <CardTitle>{project.name}</CardTitle>
            <CardDescription>Category: {project.category}</CardDescription>
          </div>
          <ProjectStatusBadge status={project.status} />
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div>
            <p className="text-sm font-medium">Customer</p>
            <p className="text-sm text-muted-foreground">{project.customer.name}</p>
            <p className="text-xs text-muted-foreground">{project.customer.email}</p>
          </div>
          <div>
            <p className="text-sm font-medium">Submitted</p>
            <p className="text-sm text-muted-foreground">{project.submittedAt}</p>
          </div>
          <div>
            <p className="text-sm font-medium">Deadline</p>
            <p className="text-sm text-muted-foreground">{project.deadline}</p>
          </div>
          <div>
            <p className="text-sm font-medium">Price</p>
            <p className="text-sm text-muted-foreground">
              {project.price ? `৳${project.price.toLocaleString()}` : "Not quoted"}
            </p>
          </div>
        </div>
        <div className="mt-4">
          <p className="text-sm font-medium">Description</p>
          <p className="text-sm text-muted-foreground line-clamp-2">{project.description}</p>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline" size="sm" asChild>
          <Link href={`/admin/projects/${project.id}`}>
            View Details <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
        <div className="flex gap-2">
          {project.status === "pending" && (
            <Button size="sm" asChild>
              <Link href={`/admin/projects/${project.id}/quote`}>Provide Quote</Link>
            </Button>
          )}
          <Button variant="outline" size="sm" asChild>
            <Link href={`/admin/projects/${project.id}/messages`}>
              <MessageSquare className="mr-2 h-4 w-4" /> Message
            </Link>
          </Button>
        </div>
      </CardFooter>
    </Card>
  )
}

// Sample project data
const newRequests: Project[] = [
  {
    id: "req-001",
    name: "Hydroponics System",
    category: "Environmental",
    status: "pending",
    deadline: "May 15, 2025",
    description:
      "A small-scale hydroponics system for growing vegetables indoors with automated nutrient delivery and monitoring.",
    customer: {
      name: "Amit Kumar",
      email: "amit.kumar@example.com",
    },
    submittedAt: "March 18, 2025",
  },
  {
    id: "req-002",
    name: "Magnetic Levitation Demo",
    category: "Physics",
    status: "pending",
    deadline: "April 30, 2025",
    description:
      "A demonstration model showing magnetic levitation principles with a floating object that can support small weights.",
    customer: {
      name: "Priya Sharma",
      email: "priya.sharma@example.com",
    },
    submittedAt: "March 17, 2025",
  },
]

const activeProjects: Project[] = [
  {
    id: "proj-002",
    name: "Arduino Weather Station",
    category: "Electronics",
    status: "in_progress",
    deadline: "April 2, 2025",
    price: 6200,
    description:
      "A weather station using Arduino that measures temperature, humidity, pressure, and rainfall with LCD display.",
    customer: {
      name: "Rahul Ahmed",
      email: "rahul.ahmed@example.com",
    },
    submittedAt: "February 15, 2025",
  },
  {
    id: "proj-005",
    name: "Chemical Reaction Demonstrator",
    category: "Chemistry",
    status: "in_progress",
    deadline: "April 20, 2025",
    price: 5100,
    description:
      "A set of safe chemical experiments that demonstrate various types of reactions with color changes and other visible effects.",
    customer: {
      name: "Sanjay Patel",
      email: "sanjay.patel@example.com",
    },
    submittedAt: "February 25, 2025",
  },
]

