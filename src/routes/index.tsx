import { createFileRoute } from "@tanstack/react-router";
import { Site } from "@/components/hotel/site";

export const Route = createFileRoute("/")({
  component: Site,
});
