"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import Image from "next/image";

export function HeroSection() {
  return (
    <section className="my-32 relative overflow-hidden pt-16 md:pt-20 lg:pt-24 text-black">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:gap-x-16">
          <div className="relative z-10 md:text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <h1 className="text-4xl font-bold tracking-tight text-emerald-800 sm:text-5xl md:text-6xl">
                Financial Modeling{" "}
                <span className="text-orange-600">Made Simple</span>
              </h1>
              <p className="mt-6 text-lg">
                Transform your financial planning with our intuitive modeling
                platform. Build professional financial models in minutes, not
                hours.
              </p>
              <div className="mt-8 flex gap-4 md:justify-center lg:justify-start">
                <Button
                  size="lg"
                  className="group border border-emerald-800 text-emerald-800"
                  variant="ghost"
                >
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button size="lg" variant="outline" className="bg-emerald-800">
                  View Demo
                </Button>
              </div>
              {/* <div className="mt-8 flex items-center gap-4 md:justify-center lg:justify-start">
                <div className="flex -space-x-2">
                  {[...Array(4)].map((_, i) => (
                    <div
                      key={i}
                      className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
                      style={{
                        backgroundColor: [
                          "#3B82F6",
                          "#10B981",
                          "#6366F1",
                          "#F59E0B",
                        ][i],
                      }}
                    />
                  ))}
                </div>
                <p className="text-sm text-emerald-800">
                  Trusted by 10,000+ financial professionals
                </p>
              </div> */}
            </motion.div>
          </div>
          <div className="relative lg:static xl:pl-10">
            <div className="relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="aspect-[4/3] overflow-hidden rounded-2xl shadow-xl"
              >
                <div className="w-full items-center flex">
                  <Image
                    src={"/finarch.png"}
                    alt="finarch"
                    width={700}
                    height={700}
                    className="aspect-[4/3]"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
