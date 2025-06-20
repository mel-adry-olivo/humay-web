import { createFileRoute } from "@tanstack/react-router";
import PlaceholderBody from "@/components/placeholder-body";
import { Home } from "lucide-react";

export const Route = createFileRoute("/admin/dashboard")({
  component: RouteComponent,
  staticData: {
    metadata: {
      group: "Core",
      title: "Dashboard",
      icon: Home,
      sidebarOptions: {
        showInSidebar: true,
        order: 1
      },
      for: "admin"
    }
  }
});

function RouteComponent() {
  return <PlaceholderBody />;
}
