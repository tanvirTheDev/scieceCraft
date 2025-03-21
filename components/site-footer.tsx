import Link from "next/link"
import { Beaker } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="w-full border-t bg-background">
      <div className="container flex flex-col md:flex-row py-10 md:py-12">
        <div className="flex flex-col gap-2 md:w-1/3">
          <Link href="/" className="flex items-center space-x-2">
            <Beaker className="h-6 w-6" />
            <span className="font-bold">ScienceCraft</span>
          </Link>
          <p className="text-sm text-muted-foreground mt-2">
            Custom science projects built to your specifications. Perfect for students, educators, and science
            enthusiasts.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 md:w-2/3 mt-8 md:mt-0">
          <div className="flex flex-col gap-2">
            <h3 className="font-medium">Services</h3>
            <nav className="flex flex-col gap-2">
              <Link href="/request" className="text-sm text-muted-foreground hover:text-primary">
                Request a Project
              </Link>
              <Link href="/projects" className="text-sm text-muted-foreground hover:text-primary">
                Example Projects
              </Link>
              <Link href="/pricing" className="text-sm text-muted-foreground hover:text-primary">
                Pricing
              </Link>
            </nav>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="font-medium">Company</h3>
            <nav className="flex flex-col gap-2">
              <Link href="/about" className="text-sm text-muted-foreground hover:text-primary">
                About Us
              </Link>
              <Link href="/contact" className="text-sm text-muted-foreground hover:text-primary">
                Contact
              </Link>
              <Link href="/faq" className="text-sm text-muted-foreground hover:text-primary">
                FAQ
              </Link>
            </nav>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="font-medium">Legal</h3>
            <nav className="flex flex-col gap-2">
              <Link href="/terms" className="text-sm text-muted-foreground hover:text-primary">
                Terms of Service
              </Link>
              <Link href="/privacy" className="text-sm text-muted-foreground hover:text-primary">
                Privacy Policy
              </Link>
              <Link href="/refund" className="text-sm text-muted-foreground hover:text-primary">
                Refund Policy
              </Link>
            </nav>
          </div>
        </div>
      </div>
      <div className="container border-t py-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} ScienceCraft. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="#" className="text-muted-foreground hover:text-primary">
              <span className="sr-only">Facebook</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-primary">
              <span className="sr-only">Twitter</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
              </svg>
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-primary">
              <span className="sr-only">Instagram</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

