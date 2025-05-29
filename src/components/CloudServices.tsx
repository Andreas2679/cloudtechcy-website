
import { Server, Shield, Phone, Monitor, Database, Wifi } from "lucide-react";
import { motion } from "framer-motion";

const CloudServices = () => {
  const services = [
    {
      icon: Shield,
      title: "Enterprise VPN",
      description: "Secure, high-performance VPN solutions with global server locations and military-grade encryption.",
      features: ["256-bit encryption", "Global servers", "Zero-log policy", "24/7 support"]
    },
    {
      icon: Monitor,
      title: "Virtual Computing",
      description: "Scalable virtual machines and cloud computing resources with flexible configurations.",
      features: ["Custom configurations", "Auto-scaling", "SSD storage", "High availability"]
    },
    {
      icon: Phone,
      title: "VoIP Solutions",
      description: "Crystal-clear voice communication systems for businesses of all sizes.",
      features: ["HD voice quality", "Conference calling", "Mobile apps", "Call analytics"]
    },
    {
      icon: Server,
      title: "Server Hosting",
      description: "Reliable dedicated and shared hosting with enterprise-grade infrastructure.",
      features: ["99.9% uptime", "DDoS protection", "Daily backups", "24/7 monitoring"]
    },
    {
      icon: Database,
      title: "Cloud Storage",
      description: "Secure, scalable cloud storage solutions with automated backup and sync.",
      features: ["Unlimited bandwidth", "File versioning", "Team collaboration", "API access"]
    },
    {
      icon: Wifi,
      title: "Network Solutions",
      description: "Comprehensive networking services including CDN, load balancing, and optimization.",
      features: ["Global CDN", "Load balancing", "Traffic optimization", "Real-time analytics"]
    }
  ];

  return (
    <section className="py-20 bg-slate-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Our Cloud Solutions
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-slate-300 max-w-3xl mx-auto"
          >
            Comprehensive cloud services designed to accelerate your digital transformation 
            and enhance your business operations.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-slate-700/50 backdrop-blur-sm rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-2 border border-slate-600/50"
            >
              <div className="w-16 h-16 bg-blue-600/20 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors border border-blue-500/30">
                <service.icon className="w-8 h-8 text-blue-400 group-hover:text-white transition-colors" />
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
              <p className="text-slate-300 mb-6 leading-relaxed">{service.description}</p>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-slate-400">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CloudServices;
