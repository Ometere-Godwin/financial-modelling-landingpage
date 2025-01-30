"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import Image from "next/image";
import Link from "next/link";

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
                <span className="text-orange-700">Made Simple</span>
              </h1>
              <p className="mt-6 text-lg">
                Transform your financial planning with our intuitive modeling
                platform. Build professional financial models in minutes, not
                hours.
              </p>
              <div className="mt-8 flex gap-4 md:justify-center lg:justify-start">
                <Link href="/login">
                  <Button
                    size="lg"
                    className="group border border-emerald-800 text-emerald-800 hover:bg-emerald-800 hover:text-white transition-colors"
                    variant="ghost"
                  >
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
                <Link href="/demo">
                  <Button
                    size="lg"
                    variant="outline"
                    className="bg-emerald-800 hover:bg-orange-700 transition-colors text-white"
                  >
                    View Demo
                  </Button>
                </Link>
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
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ scale: 1.02 }}
              className="relative h-[300px] sm:h-[400px] lg:h-[500px] w-full rounded-2xl shadow-xl overflow-hidden bg-gradient-to-br from-emerald-50 to-orange-50"
            >
              <div className="absolute inset-0">
                <Image
                  src={"/finarch.png"}
                  alt="Financial Architecture Platform Preview"
                  fill
                  quality={95}
                  priority
                  className="object-cover w-full h-full"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
