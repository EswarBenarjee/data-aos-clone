import Image from "next/image";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Hero />

      <Footer />
    </main>
  );
}
