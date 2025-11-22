import { ChatInterface } from "@/components/ChatInterface";

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-ocean-dark to-background">
      <ChatInterface />
    </main>
  );
}
