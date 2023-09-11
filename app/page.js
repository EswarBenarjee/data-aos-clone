import React from "react";

import { Suspense } from "react";

import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import Property from "@/components/Property";
import Loading from "@/components/Loading";

const properties = require("@/data/properties.json");

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Suspense fallback={<Loading />}>
        <Hero />

        <div className="p-5 lg:py-20 lg:px-44">
          <Property propertyName="fade" properties={properties["fade"]} />
        </div>

        <Footer />
      </Suspense>
    </main>
  );
}
