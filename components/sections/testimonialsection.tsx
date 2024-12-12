import Image from "next/image";
import React from "react";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Jane Doe",
    role: "CEO, Example Corp",
    content:
      "This service has completely transformed our business. Highly recommended!",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop", // Replace with your image URL
  },
  {
    id: 2,
    name: "John Smith",
    role: "Marketing Manager, Acme Co",
    content:
      "I’ve never experienced such outstanding customer support. Exceptional!",
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=300&h=300&fit=crop", // Replace with your image URL
  },
  {
    id: 3,
    name: "Alice Johnson",
    role: "Freelancer",
    content:
      "The tools provided are simple, effective, and easy to use. Amazing work!",
    image: "https://via.placeholder.com/150", // Replace with your image URL
  },
];

export default function Testimonialsection() {
  return (
    <section className="bg-emerald-800 py-12">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <h2 className="text-3xl font-bold text-center text-white">
          What Our Customers Say
        </h2>
        <p className="text-white text-center mt-4">
          See how our customers are benefiting from our service.
        </p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white p-6 rounded-lg shadow hover:shadow-md transition duration-300"
            >
              <div className="flex items-center">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={50}
                  height={50}
                  className="w-16 h-16 rounded-full border-2 border-blue-500"
                />
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-800">
                    {testimonial.name}
                  </h3>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
              <p className="mt-4 text-gray-600">{testimonial.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
