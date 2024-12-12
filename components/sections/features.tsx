"use client";

import { motion } from "framer-motion";
import {
  BarChart,
  Clock,
  Cloud,
  Code2,
  Shield,
  Smartphone,
} from "lucide-react";

const features = [
  {
    name: "Real-time Analytics",
    description:
      "Get instant insights with our real-time financial analytics dashboard.",
    icon: BarChart,
  },
  {
    name: "Cloud Storage",
    description:
      "Access your financial models anywhere with secure cloud storage.",
    icon: Cloud,
  },
  {
    name: "Mobile Friendly",
    description:
      "View and edit your financial models on any device with our responsive design.",
    icon: Smartphone,
  },
  {
    name: "Advanced Security",
    description:
      "Your data is protected with enterprise-grade security and encryption.",
    icon: Shield,
  },
  {
    name: "API Access",
    description:
      "Integrate with your existing tools using our comprehensive API.",
    icon: Code2,
  },
  {
    name: "24/7 Support",
    description:
      "Get help whenever you need it with our round-the-clock support team.",
    icon: Clock,
  },
];

export function FeaturesSection() {
  return (
    <section className="py-24 sm:py-0">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Everything you need to build financial models
          </h2>
          <p className="mt-6 text-lg leading-8 text-black">
            Our platform provides all the tools you need to create professional
            financial models quickly and efficiently.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-7xl">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <motion.div
                key={feature.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative rounded-2xl border shadow-lg bg-white text-emerald-800 p-8 "
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-800">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="mt-6 text-xl font-semibold text-emerald-800">
                  {feature.name}
                </h3>
                <p className="mt-2 text-black">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
