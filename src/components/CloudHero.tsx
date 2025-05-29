
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
      className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white overflow-hidden min-h-screen"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Cloud Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <svg className="absolute top-20 left-10 w-32 h-20 text-blue-300 animate-float" viewBox="0 0 100 60" fill="currentColor">
          <path d="M25 40c-5.5 0-10-4.5-10-10s4.5-10 10-10c1.4-5.5 6.5-10 12.5-10s11.1 4.5 12.5 10c5.5 0 10 4.5 10 10s-4.5 10-10 10H25z"/>
        </svg>
        <svg className="absolute top-40 right-20 w-40 h-24 text-slate-400 animate-float animation-delay-300" viewBox="0 0 100 60" fill="currentColor">
          <path d="M25 40c-5.5 0-10-4.5-10-10s4.5-10 10-10c1.4-5.5 6.5-10 12.5-10s11.1 4.5 12.5 10c5.5 0 10 4.5 10 10s-4.5 10-10 10H25z"/>
        </svg>
        <svg className="absolute bottom-40 left-1/4 w-28 h-16 text-blue-200 animate-float animation-delay-500" viewBox="0 0 100 60" fill="currentColor">
          <path d="M25 40c-5.5 0-10-4.5-10-10s4.5-10 10-10c1.4-5.5 6.5-10 12.5-10s11.1 4.5 12.5 10c5.5 0 10 4.5 10 10s-4.5 10-10 10H25z"/>
        </svg>
        <svg className="absolute top-60 right-1/3 w-36 h-22 text-slate-300 animate-float animation-delay-200" viewBox="0 0 100 60" fill="currentColor">
          <path d="M25 40c-5.5 0-10-4.5-10-10s4.5-10 10-10c1.4-5.5 6.5-10 12.5-10s11.1 4.5 12.5 10c5.5 0 10 4.5 10 10s-4.5 10-10 10H25z"/>
        </svg>
      </div>

      {/* Animated Background Overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse-slow"></div>
        <div className="absolute top-20 right-20 w-96 h-96 bg-slate-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse-slow animation-delay-200"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse-slow animation-delay-400"></div>
      </div>

      <div className="relative container mx-auto px-4 py-20 lg:py-32">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div variants={itemVariants} className="mb-6">
            <span className="inline-flex items-center px-4 py-2 bg-blue-600/30 rounded-full text-blue-200 text-sm font-medium backdrop-blur-sm border border-blue-400/20">
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
            className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed"
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
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 text-lg group border border-blue-500"
            >
              Explore Solutions
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              onClick={scrollToContact}
              variant="outline" 
              size="lg"
              className="border-slate-400 text-slate-200 hover:bg-slate-700 hover:text-white font-semibold px-8 py-4 text-lg"
            >
              Get Started Today
            </Button>
          </motion.div>

          {/* Feature highlights */}
          <motion.div 
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 max-w-3xl mx-auto"
          >
            <div className="flex items-center justify-center space-x-3 text-slate-300">
              <Shield className="w-6 h-6 text-green-400" />
              <span className="font-medium">99.9% Uptime SLA</span>
            </div>
            <div className="flex items-center justify-center space-x-3 text-slate-300">
              <Zap className="w-6 h-6 text-yellow-400" />
              <span className="font-medium">Lightning Fast Performance</span>
            </div>
            <div className="flex items-center justify-center space-x-3 text-slate-300">
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
