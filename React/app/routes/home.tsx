import type { Route } from "./+types/home";
import LadingPage from "~/landing-page/landing-page";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "StupidGram - Landing Page" },
  ];
}

export default function Home() {
  return <LadingPage />;
}
