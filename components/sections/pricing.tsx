"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "49",
    description: "Perfect for individuals and small teams",
    features: [
      "5 Financial Models",
      "Basic Analytics",
      "Email Support",
      "1 Team Member",
      "Export to Excel",
    ],
  },
  {
    name: "Professional",
    price: "99",
    description: "Ideal for growing businesses",
    features: [
      "Unlimited Financial Models",
      "Advanced Analytics",
      "Priority Support",
      "5 Team Members",
      "Export to Excel & PDF",
      "API Access",
      "Custom Branding",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "299",
    description: "For large organizations",
    features: [
      "Everything in Professional",
      "Unlimited Team Members",
      "24/7 Phone Support",
      "Custom Integration",
      "Dedicated Account Manager",
      "Training Sessions",
      "SLA Guarantee",
    ],
  },
];

export function PricingSection() {
  return (
    <section id="pricing" className="bg-slate-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Simple, transparent pricing
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-300">
              Choose the perfect plan for your needs. All plans include a 14-day free trial.
            </p>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="mx-auto mt-16 grid max-w-lg grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3"
        >
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={`relative flex flex-col rounded-2xl ${
                plan.popular
                  ? "bg-blue-500 shadow-xl"
                  : "bg-slate-800/50 border border-slate-800"
              } p-8`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="rounded-full bg-blue-600 px-4 py-1 text-sm font-semibold text-white">
                    Most Popular
                  </div>
                </div>
              )}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-white">{plan.name}</h3>
                <p className="mt-2 text-slate-300">{plan.description}</p>
                <div className="mt-6">
                  <span className="text-4xl font-bold text-white">${plan.price}</span>
                  <span className="text-slate-300">/month</span>
                </div>
              </div>
              <ul className="mb-8 space-y-4 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <Check className={`h-5 w-5 ${plan.popular ? "text-white" : "text-blue-500"}`} />
                    <span className={plan.popular ? "text-white" : "text-slate-300"}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
              <Button
                size="lg"
                className={`w-full ${
                  plan.popular
                    ? "bg-white text-blue-600 hover:bg-slate-100"
                    : "bg-blue-500 text-white hover:bg-blue-600"
                }`}
              >
                Get Started
              </Button>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}