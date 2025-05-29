
import { CheckCircle, Globe, Lock, Zap, Users, Award } from "lucide-react";
import { motion } from "framer-motion";

const CloudFeatures = () => {
  const features = [
    {
      icon: Globe,
      title: "Global Infrastructure",
      description: "Data centers across 6 continents ensuring low latency and high availability worldwide."
    },
    {
      icon: Lock,
      title: "Enterprise Security",
      description: "Bank-level encryption, multi-factor authentication, and compliance with industry standards."
    },
    {
      icon: Zap,
      title: "Lightning Performance",
      description: "Optimized infrastructure delivering exceptional speed and reliability for all services."
    },
    {
      icon: Users,
      title: "24/7 Expert Support",
      description: "Round-the-clock technical support from certified cloud engineers and specialists."
    },
    {
      icon: Award,
      title: "Industry Leading SLA",
      description: "99.9% uptime guarantee with transparent monitoring and incident response."
    },
    {
      icon: CheckCircle,
      title: "Scalable Solutions",
      description: "Easily scale resources up or down based on your business needs and demand."
    }
  ];

  return (
    <section className="py-20 bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Why Choose Our Platform
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-slate-300 max-w-3xl mx-auto"
          >
            Built for enterprises who demand reliability, security, and performance 
            from their cloud infrastructure.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center p-8 rounded-xl hover:bg-slate-800/50 transition-colors border border-slate-700/50"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-6">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
              <p className="text-slate-300 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CloudFeatures;
