"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, PaperclipIcon, Send } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"

export default function MessagesPage({ params }: { params: { id: string } }) {
  const [newMessage, setNewMessage] = useState("")
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "admin",
      name: "ScienceCraft Team",
      avatar: "/placeholder.svg?height=40&width=40",
      content:
        "Hello! Thank you for your project request. We've reviewed it and have a few questions about the Arduino Weather Station you'd like us to build.",
      timestamp: "Feb 16, 2025 • 10:23 AM",
    },
    {
      id: 2,
      sender: "user",
      name: "You",
      avatar: "/placeholder.svg?height=40&width=40",
      content: "Hi there! Sure, what would you like to know?",
      timestamp: "Feb 16, 2025 • 11:05 AM",
    },
    {
      id: 3,
      sender: "admin",
      name: "ScienceCraft Team",
      avatar: "/placeholder.svg?height=40&width=40",
      content:
        "Would you like the weather station to include a rain gauge? Also, do you prefer a color LCD display or a simpler monochrome one?",
      timestamp: "Feb 16, 2025 • 11:12 AM",
    },
    {
      id: 4,
      sender: "user",
      name: "You",
      avatar: "/placeholder.svg?height=40&width=40",
      content: "Yes, I'd like to include a rain gauge. And I prefer a color LCD display if possible.",
      timestamp: "Feb 16, 2025 • 11:30 AM",
    },
    {
      id: 5,
      sender: "admin",
      name: "ScienceCraft Team",
      avatar: "/placeholder.svg?height=40&width=40",
      content:
        "Great! We'll include both in your project. We've updated your quote to ৳6,200 to include these features. You can view and pay for your project in the dashboard.",
      timestamp: "Feb 16, 2025 • 11:45 AM",
    },
  ])

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      const newMsg = {
        id: messages.length + 1,
        sender: "user",
        name: "You",
        avatar: "/placeholder.svg?height=40&width=40",
        content: newMessage,
        timestamp: new Date().toLocaleString("en-US", {
          month: "short",
          day: "numeric",
          year: "numeric",
          hour: "numeric",
          minute: "2-digit",
          hour12: true,
        }),
      }
      setMessages([...messages, newMsg])
      setNewMessage("")
    }
  }

  return (
    <div className="container py-10">
      <div className="flex flex-col gap-8">
        <div className="flex items-center gap-4">
          <Button variant="outline" size="icon" asChild>
            <Link href={`/dashboard/projects/${params.id}`}>
              <ArrowLeft className="h-4 w-4" />
              <span className="sr-only">Back to Project</span>
            </Link>
          </Button>
          <div>
            <h1 className="text-3xl font-bold tracking-tighter">Messages</h1>
            <p className="text-muted-foreground">Project ID: {params.id}</p>
          </div>
        </div>

        <Card className="flex flex-col h-[calc(100vh-250px)]">
          <CardHeader>
            <CardTitle>Conversation</CardTitle>
            <CardDescription>Communicate with our team about your project</CardDescription>
          </CardHeader>
          <CardContent className="flex-1 overflow-y-auto space-y-4">
            {messages.map((message) => (
              <div key={message.id} className={`flex gap-3 ${message.sender === "user" ? "justify-end" : ""}`}>
                {message.sender !== "user" && (
                  <Avatar>
                    <AvatarImage src={message.avatar} alt={message.name} />
                    <AvatarFallback>SC</AvatarFallback>
                  </Avatar>
                )}
                <div
                  className={`max-w-[80%] ${message.sender === "user" ? "bg-primary text-primary-foreground" : "bg-muted"} rounded-lg p-3`}
                >
                  <div className="flex justify-between items-center mb-1">
                    <p className="text-sm font-medium">{message.name}</p>
                  </div>
                  <p className="text-sm">{message.content}</p>
                  <p className="text-xs opacity-70 mt-1">{message.timestamp}</p>
                </div>
                {message.sender === "user" && (
                  <Avatar>
                    <AvatarImage src={message.avatar} alt={message.name} />
                    <AvatarFallback>YO</AvatarFallback>
                  </Avatar>
                )}
              </div>
            ))}
          </CardContent>
          <Separator />
          <CardFooter className="p-4">
            <div className="flex w-full gap-2">
              <Button variant="outline" size="icon">
                <PaperclipIcon className="h-4 w-4" />
                <span className="sr-only">Attach file</span>
              </Button>
              <Textarea
                placeholder="Type your message..."
                className="flex-1 min-h-10 max-h-32"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault()
                    handleSendMessage()
                  }
                }}
              />
              <Button onClick={handleSendMessage}>
                <Send className="h-4 w-4 mr-2" />
                Send
              </Button>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}

