import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Check } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export const metadata: Metadata = {
  title: "Pricing - ScienceCraft",
  description: "View our pricing plans for custom science projects and educational models.",
}

export default function PricingPage() {
  return (
    <div className="container py-10">
      <div className="flex flex-col gap-8">
        <div className="space-y-4 text-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Transparent Pricing</h1>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
            Choose the right pricing option for your science project needs
          </p>
        </div>

        <Tabs defaultValue="category" className="w-full">
          <div className="flex justify-center">
            <TabsList className="mb-8">
              <TabsTrigger value="category">By Category</TabsTrigger>
              <TabsTrigger value="complexity">By Complexity</TabsTrigger>
              <TabsTrigger value="packages">Packages</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="category" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {categoryPricing.map((category) => (
                <PricingCard
                  key={category.name}
                  title={category.name}
                  description={category.description}
                  price={category.priceRange}
                  features={category.features}
                />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="complexity" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {complexityPricing.map((level) => (
                <PricingCard
                  key={level.level}
                  title={level.level}
                  description={level.description}
                  price={level.priceRange}
                  features={level.features}
                  highlight={level.level === "Standard"}
                />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="packages" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {packagePricing.map((pkg) => (
                <PricingCard
                  key={pkg.name}
                  title={pkg.name}
                  description={pkg.description}
                  price={pkg.price}
                  features={pkg.features}
                  highlight={pkg.name === "Premium"}
                />
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <div className="bg-muted rounded-lg p-6 mt-8">
          <h2 className="text-xl font-bold mb-4">Custom Pricing</h2>
          <p className="text-muted-foreground mb-4">
            Need something that doesn't fit into our standard pricing categories? We offer fully customized pricing
            based on your specific requirements.
          </p>
          <ul className="space-y-2 mb-6">
            <li className="flex items-start">
              <Check className="mr-2 h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
              <span>Detailed project assessment and requirements gathering</span>
            </li>
            <li className="flex items-start">
              <Check className="mr-2 h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
              <span>Transparent quote with breakdown of costs</span>
            </li>
            <li className="flex items-start">
              <Check className="mr-2 h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
              <span>Flexible payment options for larger projects</span>
            </li>
          </ul>
          <Button asChild>
            <Link href="/request">
              Request a Custom Quote <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold tracking-tighter text-center">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {faqs.map((faq, index) => (
              <div key={index} className="space-y-2">
                <h3 className="font-medium">{faq.question}</h3>
                <p className="text-muted-foreground">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

interface PricingCardProps {
  title: string
  description: string
  price: string
  features: string[]
  highlight?: boolean
}

function PricingCard({ title, description, price, features, highlight = false }: PricingCardProps) {
  return (
    <Card className={`flex flex-col h-full ${highlight ? "border-primary shadow-lg" : ""}`}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="mb-4">
          <span className="text-3xl font-bold">{price}</span>
        </div>
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <Check className="mr-2 h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button className="w-full" variant={highlight ? "default" : "outline"} asChild>
          <Link href="/request">Request Project</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}

const categoryPricing = [
  {
    name: "Physics Projects",
    description: "Models, demonstrations, and experiments",
    priceRange: "৳3,000 - ৳8,000",
    features: [
      "Scale models of physical systems",
      "Demonstration kits for physics principles",
      "Interactive physics experiments",
      "Detailed documentation and theory",
      "Setup and calibration assistance",
    ],
  },
  {
    name: "Chemistry Projects",
    description: "Safe experiments and demonstrations",
    priceRange: "৳3,500 - ৳7,500",
    features: [
      "Safe chemical experiment kits",
      "Reaction demonstration models",
      "Molecular structure models",
      "Lab safety equipment included",
      "Detailed procedure guides",
    ],
  },
  {
    name: "Biology Projects",
    description: "Models, specimens, and ecosystems",
    priceRange: "৳3,000 - ৳9,000",
    features: [
      "Anatomical models and displays",
      "Ecosystem and habitat models",
      "Plant growth and genetics kits",
      "Microscopy preparations",
      "Detailed biological explanations",
    ],
  },
  {
    name: "Electronics Projects",
    description: "Circuits, sensors, and displays",
    priceRange: "৳4,000 - ৳12,000",
    features: [
      "Custom electronic circuits",
      "Sensor integration and data collection",
      "Microcontroller programming",
      "Interactive displays and outputs",
      "Technical documentation and code",
    ],
  },
  {
    name: "Robotics Projects",
    description: "Automated systems and robots",
    priceRange: "৳5,000 - ৳15,000",
    features: [
      "Custom robotic assemblies",
      "Programmable movement systems",
      "Sensor integration for autonomy",
      "Control systems and interfaces",
      "Programming guides and examples",
    ],
  },
  {
    name: "Environmental Projects",
    description: "Sustainability and eco-systems",
    priceRange: "৳3,500 - ৳10,000",
    features: [
      "Renewable energy demonstrations",
      "Ecosystem models and simulations",
      "Water and air quality testing kits",
      "Sustainability demonstrations",
      "Environmental impact analysis",
    ],
  },
]

const complexityPricing = [
  {
    level: "Basic",
    description: "Simple projects for beginners",
    priceRange: "৳2,500 - ৳5,000",
    features: [
      "Suitable for elementary and middle school",
      "Clear, step-by-step instructions",
      "Pre-cut or pre-assembled components",
      "Basic scientific principles",
      "Completion time: 1-2 weeks",
    ],
  },
  {
    level: "Standard",
    description: "Intermediate complexity projects",
    priceRange: "৳5,000 - ৳10,000",
    features: [
      "Suitable for high school students",
      "More complex scientific concepts",
      "Some assembly and calibration required",
      "Multiple components and systems",
      "Completion time: 2-3 weeks",
    ],
  },
  {
    level: "Advanced",
    description: "Complex projects for serious students",
    priceRange: "৳10,000 - ৳20,000",
    features: [
      "College-level and competition projects",
      "Advanced scientific principles",
      "Custom-designed components",
      "Programming and electronics integration",
      "Completion time: 3-5 weeks",
    ],
  },
]

const packagePricing = [
  {
    name: "Basic",
    description: "Essential project components",
    price: "৳4,500",
    features: [
      "Custom-built science project",
      "Basic documentation",
      "Email support",
      "Standard delivery",
      "30-day warranty",
    ],
  },
  {
    name: "Premium",
    description: "Enhanced project with extras",
    price: "৳8,500",
    features: [
      "Custom-built science project",
      "Comprehensive documentation",
      "Video explanation of principles",
      "Priority email and phone support",
      "Express delivery",
      "60-day warranty",
    ],
  },
  {
    name: "Ultimate",
    description: "Complete project solution",
    price: "৳12,500",
    features: [
      "Custom-built science project",
      "Professional documentation",
      "Video tutorials and explanations",
      "Presentation materials for display",
      "Priority support with dedicated manager",
      "Express delivery with setup assistance",
      "90-day warranty with maintenance",
    ],
  },
]

const faqs = [
  {
    question: "How long does it take to complete a custom project?",
    answer:
      "Depending on complexity, most projects take 2-4 weeks from approval to delivery. Basic projects may be completed in as little as 1 week, while advanced projects can take up to 5 weeks.",
  },
  {
    question: "Do you offer discounts for schools or bulk orders?",
    answer:
      "Yes, we offer special pricing for educational institutions and bulk orders. Please contact us directly to discuss your specific requirements and we'll provide a customized quote.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept payments through SSLCommerz, which supports all major credit cards, mobile banking (bKash, Nagad, Rocket), and bank transfers within Bangladesh.",
  },
  {
    question: "Do you provide all materials and components?",
    answer:
      "Yes, our pricing includes all necessary materials, components, and equipment needed for your project. You won't need to purchase anything separately.",
  },
  {
    question: "Can I request modifications to an existing project?",
    answer:
      "We can modify any of our example projects to meet your specific requirements. Simply mention the desired changes in your project request form.",
  },
  {
    question: "Do you offer any guarantees on your projects?",
    answer:
      "Yes, all our projects come with a minimum 30-day warranty. If there are any issues with the functionality or quality, we'll repair or replace the project at no additional cost.",
  },
]

