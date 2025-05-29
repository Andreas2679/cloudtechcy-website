
import { ArrowRight, Cloud, Shield, Zap } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const CloudHero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 }
    }
  };

  const scrollToServices = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.div 
      className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white overflow-hidden"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full mix-blend-multiply filter blur-xl animate-pulse-slow"></div>
        <div className="absolute top-20 right-20 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse-slow animation-delay-200"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-indigo-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse-slow animation-delay-400"></div>
      </div>

      <div className="relative container mx-auto px-4 py-20 lg:py-32">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div variants={itemVariants} className="mb-6">
            <span className="inline-flex items-center px-4 py-2 bg-blue-500/20 rounded-full text-blue-200 text-sm font-medium backdrop-blur-sm">
              <Cloud className="w-4 h-4 mr-2" />
              Next-Generation Cloud Solutions
            </span>
          </motion.div>

          <motion.h1 
            variants={itemVariants}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
          >
            Power Your Business with
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-300">
              Advanced Cloud Technology
            </span>
          </motion.h1>

          <motion.p 
            variants={itemVariants}
            className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed"
          >
            Enterprise-grade VPN, Virtual Computing, VoIP, and Server Hosting solutions 
            designed for modern businesses seeking reliability, security, and scalability.
          </motion.p>

          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button 
              onClick={scrollToServices}
              size="lg" 
              className="bg-white text-blue-900 hover:bg-blue-50 font-semibold px-8 py-4 text-lg group"
            >
              Explore Solutions
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              onClick={scrollToContact}
              variant="outline" 
              size="lg"
              className="border-white text-white hover:bg-white hover:text-blue-900 font-semibold px-8 py-4 text-lg"
            >
              Get Started Today
            </Button>
          </motion.div>

          {/* Feature highlights */}
          <motion.div 
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 max-w-3xl mx-auto"
          >
            <div className="flex items-center justify-center space-x-3 text-blue-200">
              <Shield className="w-6 h-6 text-green-400" />
              <span className="font-medium">99.9% Uptime SLA</span>
            </div>
            <div className="flex items-center justify-center space-x-3 text-blue-200">
              <Zap className="w-6 h-6 text-yellow-400" />
              <span className="font-medium">Lightning Fast Performance</span>
            </div>
            <div className="flex items-center justify-center space-x-3 text-blue-200">
              <Cloud className="w-6 h-6 text-blue-400" />
              <span className="font-medium">Global Infrastructure</span>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default CloudHero;
