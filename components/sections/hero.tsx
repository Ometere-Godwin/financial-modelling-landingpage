"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, BarChart2 } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-slate-900 pt-16 md:pt-20 lg:pt-24">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:gap-x-16">
          <div className="relative z-10 md:text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
                Financial Modeling{" "}
                <span className="text-blue-500">Made Simple</span>
              </h1>
              <p className="mt-6 text-lg text-slate-300">
                Transform your financial planning with our intuitive modeling
                platform. Build professional financial models in minutes, not hours.
              </p>
              <div className="mt-8 flex gap-4 md:justify-center lg:justify-start">
                <Button size="lg" className="group">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button size="lg" variant="outline">
                  View Demo
                </Button>
              </div>
              <div className="mt-8 flex items-center gap-4 md:justify-center lg:justify-start">
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
                <p className="text-sm text-slate-300">
                  Trusted by 10,000+ financial professionals
                </p>
              </div>
            </motion.div>
          </div>
          <div className="relative lg:static xl:pl-10">
            <div className="relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="aspect-[4/3] overflow-hidden rounded-2xl bg-slate-800/80 shadow-xl backdrop-blur"
              >
                <div className="p-8">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <BarChart2 className="h-6 w-6 text-blue-500" />
                      <h3 className="text-lg font-medium text-white">
                        Financial Dashboard
                      </h3>
                    </div>
                  </div>
                  <div className="mt-8 grid gap-6">
                    {[...Array(3)].map((_, i) => (
                      <div
                        key={i}
                        className="h-2 rounded bg-gradient-to-r from-blue-500/30 to-purple-500/30"
                        style={{
                          width: ["75%", "60%", "85%"][i],
                        }}
                      />
                    ))}
                  </div>
                  <div className="mt-8 grid grid-cols-3 gap-4">
                    {[...Array(6)].map((_, i) => (
                      <div
                        key={i}
                        className="h-20 rounded-lg bg-slate-700/50"
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}