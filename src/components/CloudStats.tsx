
import { motion } from "framer-motion";

const CloudStats = () => {
  const stats = [
    { number: "50K+", label: "Active Clients", suffix: "" },
    { number: "99.9", label: "Uptime SLA", suffix: "%" },
    { number: "150+", label: "Global Locations", suffix: "" },
    { number: "24/7", label: "Expert Support", suffix: "" }
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-blue-700 to-slate-800 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Trusted by Thousands
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-slate-200 max-w-2xl mx-auto"
          >
            Join businesses worldwide who rely on our cloud infrastructure 
            for their critical operations.
          </motion.p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold mb-2">
                {stat.number}{stat.suffix}
              </div>
              <div className="text-slate-300 text-lg font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CloudStats;
