"use client";

import { motion } from "framer-motion";
import {
  Building2,
  Briefcase,
  LineChart,
  BarChart2,
  Wallet,
  Building,
} from "lucide-react";

const companies = [
  {
    name: "Goldman Sachs",
    icon: Building2,
    color: "text-blue-500",
  },
  {
    name: "Morgan Stanley",
    icon: Briefcase,
    color: "text-emerald-500",
  },
  {
    name: "JPMorgan",
    icon: LineChart,
    color: "text-purple-500",
  },
  {
    name: "BlackRock",
    icon: BarChart2,
    color: "text-orange-500",
  },
  {
    name: "Fidelity",
    icon: Wallet,
    color: "text-red-500",
  },
  {
    name: "Deutsche Bank",
    icon: Building,
    color: "text-indigo-500",
  },
];

// Double the companies array for seamless scrolling
const doubledCompanies = [...companies, ...companies];

export default function CompanySection() {
  return (
    <section className="py-12 overflow-hidden text-gray-500 bg-emerald-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-xl font-semibold text-black">
            Trusted by leading financial institutions worldwide
          </h2>
        </div>

        <div className="mt-8 relative ">
          <motion.div
            animate={{
              x: [0, -1920],
            }}
            transition={{
              x: {
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              },
            }}
            className="flex gap-x-16 whitespace-nowrap text-black"
          >
            {doubledCompanies.map((company, index) => (
              <div
                key={`${company.name}-${index}`}
                className="group inline-flex items-center space-x-2 transition-colors duration-200"
              >
                <company.icon
                  className={`h-8 w-8 ${company.color} transition-transform group-hover:scale-110 shrink-0 `}
                />
                <span className="text-gray-300 font-medium whitespace-nowrap text-2xl ">
                  {company.name}
                </span>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <p className="text-sm text-gray-100">
            Join over 1,000+ companies already using our platform
          </p>
        </motion.div>
      </div>
    </section>
  );
}
