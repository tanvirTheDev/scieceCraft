import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Clock, FileText, MessageSquare, Package, Plus, ShoppingCart } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ProjectStatusBadge } from "./project-status-badge"

export const metadata: Metadata = {
  title: "Dashboard - ScienceCraft",
  description: "Manage your science project orders and track their progress.",
}

export default function DashboardPage() {
  return (
    <div className="container py-10">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col md:flex-row justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tighter">Dashboard</h1>
            <p className="text-muted-foreground">Manage your projects and track their progress</p>
          </div>
          <Button asChild>
            <Link href="/request">
              <Plus className="mr-2 h-4 w-4" /> Request New Project
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Projects</CardTitle>
              <FileText className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">3</div>
              <p className="text-xs text-muted-foreground">Projects in progress</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Pending Quotes</CardTitle>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">2</div>
              <p className="text-xs text-muted-foreground">Awaiting price quotes</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Completed Projects</CardTitle>
              <Package className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">7</div>
              <p className="text-xs text-muted-foreground">Successfully delivered</p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="all" className="w-full">
          <TabsList>
            <TabsTrigger value="all">All Projects</TabsTrigger>
            <TabsTrigger value="pending">Pending</TabsTrigger>
            <TabsTrigger value="active">Active</TabsTrigger>
            <TabsTrigger value="completed">Completed</TabsTrigger>
          </TabsList>
          <TabsContent value="all" className="space-y-4">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </TabsContent>
          <TabsContent value="pending" className="space-y-4">
            {projects
              .filter((project) => project.status === "pending" || project.status === "quoted")
              .map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
          </TabsContent>
          <TabsContent value="active" className="space-y-4">
            {projects
              .filter((project) => project.status === "in_progress")
              .map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
          </TabsContent>
          <TabsContent value="completed" className="space-y-4">
            {projects
              .filter((project) => project.status === "completed" || project.status === "delivered")
              .map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
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
}

function ProjectCard({ project }: { project: Project }) {
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
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-sm font-medium">Deadline</p>
            <p className="text-sm text-muted-foreground">{project.deadline}</p>
          </div>
          <div>
            <p className="text-sm font-medium">Price</p>
            <p className="text-sm text-muted-foreground">
              {project.price ? `৳${project.price.toLocaleString()}` : "Awaiting Quote"}
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
          <Link href={`/dashboard/projects/${project.id}`}>
            View Details <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
        <div className="flex gap-2">
          {project.status === "quoted" && (
            <Button size="sm" asChild>
              <Link href={`/dashboard/projects/${project.id}/payment`}>
                <ShoppingCart className="mr-2 h-4 w-4" /> Pay Now
              </Link>
            </Button>
          )}
          <Button variant="outline" size="sm" asChild>
            <Link href={`/dashboard/projects/${project.id}/messages`}>
              <MessageSquare className="mr-2 h-4 w-4" /> Messages
            </Link>
          </Button>
        </div>
      </CardFooter>
    </Card>
  )
}

// Sample project data
const projects: Project[] = [
  {
    id: "proj-001",
    name: "Solar System Model",
    category: "Physics",
    status: "delivered",
    deadline: "March 15, 2025",
    price: 4500,
    description: "A scale model of the solar system with all planets and major moons, including lighting for the sun.",
  },
  {
    id: "proj-002",
    name: "Arduino Weather Station",
    category: "Electronics",
    status: "in_progress",
    deadline: "April 2, 2025",
    price: 6200,
    description:
      "A weather station using Arduino that measures temperature, humidity, pressure, and rainfall with LCD display.",
  },
  {
    id: "proj-003",
    name: "DNA Extraction Kit",
    category: "Biology",
    status: "quoted",
    deadline: "April 10, 2025",
    price: 3800,
    description:
      "A complete kit for extracting DNA from various fruits and vegetables with all necessary reagents and equipment.",
  },
  {
    id: "proj-004",
    name: "Robotic Arm",
    category: "Robotics",
    status: "pending",
    deadline: "May 5, 2025",
    description: "A programmable robotic arm capable of picking up and moving small objects with precision.",
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
  },
]

