import { Badge } from "@/components/ui/badge"

type ProjectStatus = "pending" | "quoted" | "in_progress" | "completed" | "delivered"

interface ProjectStatusBadgeProps {
  status: ProjectStatus
}

export function ProjectStatusBadge({ status }: ProjectStatusBadgeProps) {
  const statusConfig: Record<
    ProjectStatus,
    { label: string; variant: "default" | "secondary" | "outline" | "destructive" }
  > = {
    pending: {
      label: "Pending Review",
      variant: "outline",
    },
    quoted: {
      label: "Quote Ready",
      variant: "secondary",
    },
    in_progress: {
      label: "In Progress",
      variant: "default",
    },
    completed: {
      label: "Completed",
      variant: "default",
    },
    delivered: {
      label: "Delivered",
      variant: "default",
    },
  }

  const config = statusConfig[status]

  return <Badge variant={config.variant}>{config.label}</Badge>
}

