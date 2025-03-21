import Link from "next/link"
import { ArrowRight, Beaker, BookOpen, Microscope, Rocket } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-background to-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                Custom Science Projects Built For You
              </h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Submit your requirements, get a quote, and we'll build your science project from scratch.
              </p>
            </div>
            <div className="space-x-4">
              <Button asChild size="lg">
                <Link href="/request">
                  Request a Project <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/projects">Browse Examples</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">How It Works</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Our simple process to bring your science project to life
              </p>
            </div>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 mt-8">
              <Card>
                <CardHeader>
                  <div className="flex justify-center mb-2">
                    <div className="rounded-full bg-primary/10 p-3">
                      <BookOpen className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <CardTitle>1. Submit Requirements</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Fill out our detailed form with your project specifications and requirements.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <div className="flex justify-center mb-2">
                    <div className="rounded-full bg-primary/10 p-3">
                      <Beaker className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <CardTitle>2. Get a Quote</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We'll review your request and provide a detailed quote based on complexity.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <div className="flex justify-center mb-2">
                    <div className="rounded-full bg-primary/10 p-3">
                      <Microscope className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <CardTitle>3. Project Development</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    After payment, our experts will start building your custom science project.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <div className="flex justify-center mb-2">
                    <div className="rounded-full bg-primary/10 p-3">
                      <Rocket className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <CardTitle>4. Delivery</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Receive your completed project with documentation and support.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Project Categories */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Project Categories</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                We specialize in a wide range of science projects
              </p>
            </div>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 mt-8">
              {categories.map((category) => (
                <Card key={category.name} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle>{category.name}</CardTitle>
                    <CardDescription>{category.description}</CardDescription>
                  </CardHeader>
                  <CardFooter>
                    <Button variant="outline" className="w-full" asChild>
                      <Link href={`/request?category=${category.slug}`}>Request {category.name} Project</Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">What Our Clients Say</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Success stories from students and educators
              </p>
            </div>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 mt-8">
              {testimonials.map((testimonial, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle>{testimonial.name}</CardTitle>
                    <CardDescription>{testimonial.role}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">"{testimonial.quote}"</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Ready to Start Your Project?
              </h2>
              <p className="mx-auto max-w-[700px] md:text-xl">
                Get in touch today and let us bring your science project to life.
              </p>
            </div>
            <div className="space-x-4">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/request">
                  Request a Project <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

const categories = [
  {
    name: "Physics",
    slug: "physics",
    description: "Mechanics, electricity, magnetism, and more",
  },
  {
    name: "Chemistry",
    slug: "chemistry",
    description: "Chemical reactions, compounds, and experiments",
  },
  {
    name: "Electronics",
    slug: "electronics",
    description: "Circuits, microcontrollers, and electronic devices",
  },
  {
    name: "Biology",
    slug: "biology",
    description: "Ecosystems, genetics, and biological processes",
  },
  {
    name: "Robotics",
    slug: "robotics",
    description: "Automated systems and robotic applications",
  },
  {
    name: "Environmental",
    slug: "environmental",
    description: "Sustainability and environmental science projects",
  },
]

const testimonials = [
  {
    name: "Rahul Ahmed",
    role: "High School Student",
    quote:
      "My physics project was delivered on time and exceeded my expectations. I got an A+ and impressed my teacher!",
  },
  {
    name: "Priya Sharma",
    role: "Science Teacher",
    quote:
      "The demonstration models created for our school were excellent. They've made teaching complex concepts much easier.",
  },
  {
    name: "Arif Khan",
    role: "College Student",
    quote:
      "The electronics project was perfectly built according to my specifications. The documentation was thorough and helped me understand the concepts.",
  },
]

