import { Shield, Monitor, Phone, HardDrive } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const CloudServices = () => {
  const navigate = useNavigate();

  const services = [
    {
      icon: Shield,
      title: "Enterprise VPN",
      description: "Enterprise-grade VPN with military encryption, global servers, and unlimited bandwidth for secure remote access.",
      features: ["AES-256 Encryption", "Global Server Network", "Zero-Log Policy", "24/7 Monitoring"],
      href: "/services/vpn"
    },
    {
      icon: Monitor,
      title: "Virtual Computing",
      description: "Scalable virtual machines and desktop solutions with high-performance computing power on demand.",
      features: ["Instant Deployment", "Auto-scaling", "SSD Storage", "Custom Configurations"],
      href: "/services/virtual-computing"
    },
    {
      icon: Phone,
      title: "VoIP Solutions",
      description: "Crystal-clear voice communication with advanced features for modern business communication needs.",
      features: ["HD Voice Quality", "Conference Calling", "Mobile Integration", "Call Analytics"],
      href: "/services/voip"
    },
    {
      icon: HardDrive,
      title: "Cloud Storage",
      description: "Secure, scalable cloud storage solutions with automatic backup, sync, and enterprise-grade data protection.",
      features: ["Unlimited Storage", "Real-time Sync", "Data Encryption", "Version Control"],
      href: "/services/cloud-storage"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-slate-800 to-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Our Cloud Services
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-slate-300 max-w-3xl mx-auto"
          >
            Comprehensive cloud infrastructure solutions designed to power your business 
            with reliability, security, and performance.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-700/50 hover:border-blue-500/50 group flex flex-col"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
                {service.title}
              </h3>
              
              <p className="text-slate-300 mb-6 leading-relaxed flex-grow">
                {service.description}
              </p>
              
              <ul className="space-y-2 mb-6">
                {service.features.map((feature) => (
                  <li key={feature} className="text-slate-400 text-sm flex items-center">
                    <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>

              <Button 
                className="w-full mt-auto bg-blue-600 text-white font-semibold hover:bg-blue-700"
                onClick={() => navigate(service.href)}
              >
                Learn More
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CloudServices;
