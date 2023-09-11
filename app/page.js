import React from "react";

import Image from "next/image";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import AOS from "@/components/AOS";
import Property from "@/components/Property";

const properties = require("@/data/properties.json");

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Hero />

      <div className="p-5 lg:py-20 lg:px-44">
        <Property propertyName="fade" properties={properties["fade"]} />
      </div>

      <Footer />
    </main>
  );
}
