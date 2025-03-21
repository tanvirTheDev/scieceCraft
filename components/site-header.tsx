"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Beaker, Menu } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { ThemeToggle } from "@/components/theme-toggle"

export function SiteHeader() {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Link href="/" className="flex items-center space-x-2">
          <Beaker className="h-6 w-6" />
          <span className="font-bold">ScienceCraft</span>
        </Link>
        <nav className="ml-auto hidden md:flex items-center gap-6">
          <Link
            href="/"
            className={`text-sm font-medium transition-colors hover:text-primary ${
              pathname === "/" ? "text-primary" : "text-muted-foreground"
            }`}
          >
            Home
          </Link>
          <Link
            href="/projects"
            className={`text-sm font-medium transition-colors hover:text-primary ${
              pathname === "/projects" ? "text-primary" : "text-muted-foreground"
            }`}
          >
            Example Projects
          </Link>
          <Link
            href="/request"
            className={`text-sm font-medium transition-colors hover:text-primary ${
              pathname === "/request" ? "text-primary" : "text-muted-foreground"
            }`}
          >
            Request Project
          </Link>
          <Link
            href="/pricing"
            className={`text-sm font-medium transition-colors hover:text-primary ${
              pathname === "/pricing" ? "text-primary" : "text-muted-foreground"
            }`}
          >
            Pricing
          </Link>
          <Link
            href="/contact"
            className={`text-sm font-medium transition-colors hover:text-primary ${
              pathname === "/contact" ? "text-primary" : "text-muted-foreground"
            }`}
          >
            Contact
          </Link>
        </nav>
        <div className="ml-auto md:ml-4 flex items-center gap-2">
          <ThemeToggle />
          <Button asChild className="hidden md:flex">
            <Link href="/dashboard">Dashboard</Link>
          </Button>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="flex flex-col gap-4 mt-8">
                <Link href="/" className="text-sm font-medium transition-colors hover:text-primary">
                  Home
                </Link>
                <Link href="/projects" className="text-sm font-medium transition-colors hover:text-primary">
                  Example Projects
                </Link>
                <Link href="/request" className="text-sm font-medium transition-colors hover:text-primary">
                  Request Project
                </Link>
                <Link href="/pricing" className="text-sm font-medium transition-colors hover:text-primary">
                  Pricing
                </Link>
                <Link href="/contact" className="text-sm font-medium transition-colors hover:text-primary">
                  Contact
                </Link>
                <Link href="/dashboard" className="text-sm font-medium transition-colors hover:text-primary">
                  Dashboard
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

