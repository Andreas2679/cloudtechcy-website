
import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";

const CloudTestimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CTO, TechCorp",
      content: "The VPN solution has been game-changing for our remote workforce. Reliable, fast, and secure - exactly what we needed.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "IT Director, GlobalStart",
      content: "Their virtual computing platform scaled seamlessly with our growth. The support team is exceptional and always responsive.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      role: "Operations Manager, InnovateNow",
      content: "VoIP service quality is outstanding. Crystal clear calls and the conference features have improved our team collaboration significantly.",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            What Our Clients Say
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Real feedback from businesses who have transformed their operations with our cloud solutions.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white rounded-xl p-8 shadow-lg relative"
            >
              <Quote className="w-8 h-8 text-blue-500 mb-4" />
              
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <p className="text-gray-700 mb-6 leading-relaxed">"{testimonial.content}"</p>
              
              <div>
                <div className="font-bold text-gray-900">{testimonial.name}</div>
                <div className="text-gray-600">{testimonial.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CloudTestimonials;
