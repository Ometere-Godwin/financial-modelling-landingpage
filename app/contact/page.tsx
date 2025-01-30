"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MessageSquare, Phone } from "lucide-react";

const contactMethods = [
  {
    name: "Email",
    description: "Send us an email anytime",
    value: "teamfinarchitect@gmail.com",
    icon: Mail,
  },
  {
    name: "Live Chat",
    description: "Chat with our support team",
    value: "Available 24/7",
    icon: MessageSquare,
  },
  {
    name: "Phone",
    description: "Mon-Fri from 8am to 5pm",
    value: "+1 (555) 000-0000",
    icon: Phone,
  },
];

export default function page() {
  return (
    <div className="bg-white pt-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
        <div className="mx-auto max-w-2xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Get in Touch
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Have questions? We&apos;re here to help. Send us a message and
              we&apos;ll respond as soon as possible.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mx-auto mt-16 grid max-w-lg grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3"
        >
          {contactMethods.map((method) => (
            <div
              key={method.name}
              className="flex flex-col items-center rounded-2xl border border-gray-200 p-8 text-center"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-800">
                <method.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="mt-6 text-base font-semibold text-gray-900">
                {method.name}
              </h3>
              <p className="mt-2 text-sm text-gray-600">{method.description}</p>
              <p className="mt-4 text-base font-medium text-emerald-800">
                {method.value}
              </p>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mx-auto mt-16 max-w-xl"
        >
          <form className="space-y-8">
            <div className="space-y-4">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="first-name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    First name
                  </label>
                  <Input
                    type="text"
                    id="first-name"
                    name="first-name"
                    className="mt-1"
                  />
                </div>
                <div>
                  <label
                    htmlFor="last-name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Last name
                  </label>
                  <Input
                    type="text"
                    id="last-name"
                    name="last-name"
                    className="mt-1"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <Input type="email" id="email" name="email" className="mt-1" />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="mt-1"
                />
              </div>
            </div>
            <div>
              <Button
                type="submit"
                className="w-full bg-emerald-800 hover:bg-orange-700 text-white"
              >
                Send Message
              </Button>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
