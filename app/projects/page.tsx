import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export const metadata: Metadata = {
  title: "Example Projects - ScienceCraft",
  description: "Browse our portfolio of custom science projects we've built for students and educators.",
}

export default function ProjectsPage() {
  return (
    <div className="container py-10">
      <div className="flex flex-col gap-8">
        <div className="space-y-4 text-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Example Projects</h1>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
            Browse our portfolio of custom science projects we've built for students and educators
          </p>
        </div>

        <Tabs defaultValue="all" className="w-full">
          <div className="flex justify-center">
            <TabsList className="mb-8">
              <TabsTrigger value="all">All Projects</TabsTrigger>
              <TabsTrigger value="physics">Physics</TabsTrigger>
              <TabsTrigger value="chemistry">Chemistry</TabsTrigger>
              <TabsTrigger value="biology">Biology</TabsTrigger>
              <TabsTrigger value="electronics">Electronics</TabsTrigger>
              <TabsTrigger value="robotics">Robotics</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="all" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {exampleProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </TabsContent>

          {["physics", "chemistry", "biology", "electronics", "robotics"].map((category) => (
            <TabsContent key={category} value={category} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {exampleProjects
                  .filter((project) => project.category.toLowerCase() === category)
                  .map((project) => (
                    <ProjectCard key={project.id} project={project} />
                  ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        <div className="mt-12 text-center">
          <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl mb-4">Need Something Custom?</h2>
          <p className="mx-auto max-w-[600px] text-muted-foreground mb-6">
            Don't see what you're looking for? We can build a custom science project tailored to your specific
            requirements.
          </p>
          <Button size="lg" asChild>
            <Link href="/request">
              Request a Custom Project <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

interface ExampleProject {
  id: string
  title: string
  category: string
  description: string
  image: string
  difficulty: "Beginner" | "Intermediate" | "Advanced"
  estimatedPrice: number
}

function ProjectCard({ project }: { project: ExampleProject }) {
  return (
    <Card className="overflow-hidden flex flex-col h-full">
      <div className="relative h-48 w-full">
        <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
      </div>
      <CardHeader>
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="line-clamp-1">{project.title}</CardTitle>
            <CardDescription>{project.category}</CardDescription>
          </div>
          <span className="inline-flex items-center rounded-md bg-muted px-2 py-1 text-xs font-medium">
            {project.difficulty}
          </span>
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-muted-foreground line-clamp-3">{project.description}</p>
        <p className="mt-4 font-medium">Estimated Price: ৳{project.estimatedPrice.toLocaleString()}</p>
      </CardContent>
      <CardFooter>
        <Button className="w-full" asChild>
          <Link href={`/request?project=${project.id}`}>Request Similar Project</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}

const exampleProjects: ExampleProject[] = [
  {
    id: "proj-ex-001",
    title: "Solar System Model",
    category: "Physics",
    description:
      "A scale model of the solar system with all planets and major moons. Includes lighting for the sun and detailed information cards for each celestial body.",
    image: "/placeholder.svg?height=200&width=400",
    difficulty: "Intermediate",
    estimatedPrice: 4500,
  },
  {
    id: "proj-ex-002",
    title: "Arduino Weather Station",
    category: "Electronics",
    description:
      "A weather station using Arduino that measures temperature, humidity, pressure, and rainfall with LCD display. Includes data logging capabilities.",
    image: "/placeholder.svg?height=200&width=400",
    difficulty: "Advanced",
    estimatedPrice: 6200,
  },
  {
    id: "proj-ex-003",
    title: "DNA Extraction Kit",
    category: "Biology",
    description:
      "A complete kit for extracting DNA from various fruits and vegetables with all necessary reagents and equipment. Includes detailed instruction manual.",
    image: "/placeholder.svg?height=200&width=400",
    difficulty: "Beginner",
    estimatedPrice: 3800,
  },
  {
    id: "proj-ex-004",
    title: "Robotic Arm",
    category: "Robotics",
    description:
      "A programmable robotic arm capable of picking up and moving small objects with precision. Includes programming guide and sample projects.",
    image: "/placeholder.svg?height=200&width=400",
    difficulty: "Advanced",
    estimatedPrice: 7500,
  },
  {
    id: "proj-ex-005",
    title: "Chemical Reaction Demonstrator",
    category: "Chemistry",
    description:
      "A set of safe chemical experiments that demonstrate various types of reactions with color changes and other visible effects. Includes all necessary chemicals and equipment.",
    image: "/placeholder.svg?height=200&width=400",
    difficulty: "Intermediate",
    estimatedPrice: 5100,
  },
  {
    id: "proj-ex-006",
    title: "Hydroponics System",
    category: "Biology",
    description:
      "A small-scale hydroponics system for growing plants without soil. Includes nutrient solutions, growing medium, and detailed instructions.",
    image: "/placeholder.svg?height=200&width=400",
    difficulty: "Intermediate",
    estimatedPrice: 4800,
  },
  {
    id: "proj-ex-007",
    title: "Magnetic Levitation Demo",
    category: "Physics",
    description:
      "A demonstration model showing magnetic levitation principles with a floating object that can support small weights. Includes explanatory materials.",
    image: "/placeholder.svg?height=200&width=400",
    difficulty: "Advanced",
    estimatedPrice: 5500,
  },
  {
    id: "proj-ex-008",
    title: "LED Cube",
    category: "Electronics",
    description:
      "A 4x4x4 LED cube that can display 3D patterns and animations. Programmable via Arduino with sample patterns included.",
    image: "/placeholder.svg?height=200&width=400",
    difficulty: "Advanced",
    estimatedPrice: 4200,
  },
  {
    id: "proj-ex-009",
    title: "Line Following Robot",
    category: "Robotics",
    description:
      "A robot that can follow a line drawn on the floor using infrared sensors. Includes programming guide and obstacle avoidance capabilities.",
    image: "/placeholder.svg?height=200&width=400",
    difficulty: "Intermediate",
    estimatedPrice: 3900,
  },
]

