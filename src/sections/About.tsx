"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Card } from "@/components/Card";
import { CardHeader } from "@/components/CardHeader";
import { SectionHeader } from "@/components/SectionHeader";
import { ToolboxItems } from "@/components/ToolboxItems";
import { toolBoxItems } from "@/data/data";
import { useRef } from "react";

export const About = () => {
  const constraintRef = useRef<HTMLDivElement>(null);

  return (
    <section id="about" className="py-20 lg:py-28">
      <div className="container">
        <SectionHeader
          eyebrow="About Me"
          title="A Glimpse Into My World"
          description="Learn more about who I am, what I do, and what inspires me."
        />
        <div className="mt-20 flex flex-col gap-8 ">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3 ">
           
            <Card className="h-[320px] md:col-span-3 lg:col-span-3">
              <div className="flex flex-col items-center text-center">
                <CardHeader
                  title="My Toolbox"
                  description="Explore the technologies and tools I use ."
                />
              </div>
              <ToolboxItems
                items={toolBoxItems}
                itemsWrapperClassName="animate-move-left [animation-duration:30s]"
              />
              <ToolboxItems
                items={toolBoxItems}
                className="mt-6"
                itemsWrapperClassName="-translate-x-1/2 animate-move-right [animation-duration:30s]"
              />
            </Card>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
            <div className="mt-14">
               <Card className="min-h-[250px] md:col-span-2 lg:col-span-1">
             <CardHeader
                title="Education"
                className="pb-9"
                description={
                  <>
                    BS Computer Science (BSCS) <br />
                    Hajvery University Lahore <br />
                    CGPA: 3.13 <br />
                    2019 – 2023
                  </>
                }
              />
            </Card>
            </div>
            <Card className="h-auto flex flex-col md:col-span-3 lg:col-span-2">
              <CardHeader
                title="Experience"
                className="px-6"
              />
              <div className="text-sm lg:text-base text-white/70 leading-relaxed w-full overflow-hidden px-[50px] pb-[30px]">
    <div className="mb-3">
       <p className="font-semibold">Shopify Theme Developer — EcomWonk</p>
      <ul className="list-disc list-inside mt-2 space-y-1">
        <li>Customized Shopify themes using Liquid</li>
        <li>Built reusable components for multiple stores</li>
        <li>Fixed UI bugs & enhanced storefront UX</li>
      </ul>
    </div>

    <div>
      <p className="font-semibold">Front-End Developer — RISS Technologies (6 Months)</p>
      <ul className="list-disc list-inside mt-2 space-y-1">
        <li>Built responsive UIs with HTML, CSS, JavaScript & React</li>
        <li>Collaborated with designers and backend developers</li>
        <li>Wrote clean code and optimized UI performance</li>
      </ul>
    </div>
  </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
