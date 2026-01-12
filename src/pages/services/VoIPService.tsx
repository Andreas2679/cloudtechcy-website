import PageLayout from '@/components/PageLayout';
import SEO from '@/components/SEO';
import { Phone, Check, Video, Headphones, MessageSquare, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const VoIPService = () => {
  const scrollToContact = () => {
    window.location.href = '/#contact';
  };

  const features = [
    {
      icon: Headphones,
      title: 'HD Voice Quality',
      description: 'Crystal-clear voice calls with HD audio technology for professional business communications.'
    },
    {
      icon: Video,
      title: 'Video Conferencing',
      description: 'Built-in video conferencing with screen sharing for seamless remote collaboration.'
    },
    {
      icon: MessageSquare,
      title: 'Call Management',
      description: 'Advanced call routing, IVR, voicemail-to-email, and call recording features.'
    },
    {
      icon: Users,
      title: 'Mobile Integration',
      description: 'Take your business phone anywhere with mobile apps for iOS and Android.'
    }
  ];

  const benefits = [
    'Reduce phone costs by 50%+',
    'No hardware required',
    'Unlimited local calls',
    'International calling options',
    'Auto-attendant included',
    'Call analytics & reporting',
    'CRM integrations',
    'Number porting available'
  ];

  return (
    <PageLayout>
      <SEO 
        title="VoIP Solutions - CloudTechCy" 
        description="Modern business communication with crystal-clear VoIP solutions. HD voice, video conferencing, and unified communications for your team."
        keywords={['VoIP', 'business phone', 'cloud phone', 'unified communications', 'video conferencing']}
      />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="w-16 h-16 bg-blue-600/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Phone className="w-8 h-8 text-blue-400" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              VoIP Solutions
            </h1>
            <p className="text-xl text-slate-300 mb-8">
              Modern business communication with crystal-clear voice calls. Unified communications for your entire team.
            </p>
            <Button 
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700"
              onClick={scrollToContact}
            >
              Get Quote
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-slate-800">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Key Features
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Everything you need for professional business communications in one unified platform.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-900 rounded-xl p-6 border border-slate-700"
              >
                <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-slate-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Why Choose Our VoIP?
              </h2>
              <p className="text-slate-400 mb-8">
                Upgrade your business communications with our feature-rich VoIP solution that grows with your business.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {benefits.map((benefit) => (
                  <div key={benefit} className="flex items-center space-x-3">
                    <div className="w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-slate-300">{benefit}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-slate-800 rounded-2xl p-8 border border-slate-700"
            >
              <h3 className="text-2xl font-bold text-white mb-4">Ready to Get Started?</h3>
              <p className="text-slate-400 mb-6">
                Contact our team today to discuss your VoIP requirements and get a customized quote for your business.
              </p>
              <Button 
                size="lg" 
                className="w-full bg-blue-600 hover:bg-blue-700"
                onClick={scrollToContact}
              >
                Get Quote
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default VoIPService;
