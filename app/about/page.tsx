"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, BarChart2, Users, Award, TrendingUp } from "lucide-react";

const stats = [
  { name: "Years in Business", value: "10+" },
  { name: "Active Users", value: "50k+" },
  { name: "Financial Models Created", value: "1M+" },
  { name: "Customer Satisfaction", value: "98%" },
];

const values = [
  {
    name: "Innovation",
    description:
      "We continuously evolve our platform to meet the changing needs of financial professionals.",
    icon: TrendingUp,
  },
  {
    name: "Excellence",
    description:
      "We strive for excellence in every aspect of our service and support.",
    icon: Award,
  },
  {
    name: "Customer Focus",
    description:
      "Our customers' success is our primary measure of achievement.",
    icon: Users,
  },
  {
    name: "Reliability",
    description:
      "We provide dependable tools that professionals can trust for critical decisions.",
    icon: BarChart2,
  },
];

export default function page() {
  return (
    <div className="bg-white pt-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-2xl text-center"
          >
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              About FinArchitect
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              We&apos;re on a mission to make financial modeling accessible and
              efficient for businesses of all sizes.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mx-auto mt-16 grid max-w-7xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4"
          >
            {stats.map((stat) => (
              <div
                key={stat.name}
                className="flex flex-col items-center p-8 bg-gray-50 rounded-2xl"
              >
                <dt className="text-base leading-7 text-gray-600">
                  {stat.name}
                </dt>
                <dd className="text-3xl font-bold tracking-tight text-emerald-800 sm:text-4xl">
                  {stat.value}
                </dd>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mx-auto mt-24 max-w-7xl"
          >
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-center">
              Our Values
            </h2>
            <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {values.map((value) => (
                <div
                  key={value.name}
                  className="relative rounded-2xl border border-gray-200 p-8"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-800">
                    <value.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="mt-6 text-xl font-semibold text-gray-900">
                    {value.name}
                  </h3>
                  <p className="mt-2 text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mx-auto mt-24 max-w-2xl text-center"
          >
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">
              Join Our Team
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              We&apos;re always looking for talented individuals to join our
              mission of transforming financial modeling.
            </p>
            <div className="mt-10">
              <Button
                size="lg"
                className="bg-emerald-800 hover:bg-orange-700 text-white"
              >
                View Open Positions
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
