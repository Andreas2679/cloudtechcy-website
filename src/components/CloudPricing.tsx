
import { Check, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const CloudPricing = () => {
  const plans = [
    {
      name: "Starter",
      price: "$29",
      period: "/month",
      description: "Perfect for small businesses and startups",
      features: [
        "Basic VPN (5 connections)",
        "1 Virtual Machine",
        "VoIP (10 users)",
        "50GB Cloud Storage",
        "Email Support",
        "99.5% Uptime SLA"
      ],
      highlighted: false
    },
    {
      name: "Professional",
      price: "$79",
      period: "/month",
      description: "Ideal for growing businesses",
      features: [
        "Advanced VPN (25 connections)",
        "5 Virtual Machines",
        "VoIP (50 users)",
        "500GB Cloud Storage",
        "Priority Support",
        "99.9% Uptime SLA",
        "Load Balancing",
        "Advanced Security"
      ],
      highlighted: true
    },
    {
      name: "Enterprise",
      price: "$199",
      period: "/month",
      description: "For large organizations with complex needs",
      features: [
        "Enterprise VPN (Unlimited)",
        "Unlimited Virtual Machines",
        "VoIP (Unlimited users)",
        "5TB Cloud Storage",
        "24/7 Dedicated Support",
        "99.99% Uptime SLA",
        "Custom Integrations",
        "Compliance Support",
        "Dedicated Account Manager"
      ],
      highlighted: false
    }
  ];

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
            Simple, Transparent Pricing
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-slate-300 max-w-3xl mx-auto"
          >
            Choose the perfect plan for your business. All plans include our core features 
            with no hidden fees or setup costs.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`rounded-2xl p-8 ${
                plan.highlighted 
                  ? 'bg-gradient-to-br from-blue-600 to-blue-800 text-white transform scale-105 shadow-2xl border border-blue-400' 
                  : 'bg-slate-800/50 backdrop-blur-sm text-white shadow-lg border border-slate-600/50'
              } relative`}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-yellow-400 text-slate-900 px-4 py-2 rounded-full text-sm font-bold">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className={`text-sm mb-4 ${plan.highlighted ? 'text-blue-100' : 'text-slate-400'}`}>
                  {plan.description}
                </p>
                <div className="flex items-baseline justify-center">
                  <span className="text-5xl font-bold">{plan.price}</span>
                  <span className={`ml-2 ${plan.highlighted ? 'text-blue-100' : 'text-slate-400'}`}>
                    {plan.period}
                  </span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <Check className={`w-5 h-5 mr-3 ${plan.highlighted ? 'text-green-300' : 'text-green-400'}`} />
                    <span className={plan.highlighted ? 'text-blue-100' : 'text-slate-300'}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Button 
                onClick={scrollToContact}
                className={`w-full py-3 font-semibold ${
                  plan.highlighted 
                    ? 'bg-white text-blue-600 hover:bg-slate-100' 
                    : 'bg-blue-600 text-white hover:bg-blue-700'
                } group`}
              >
                Get Started
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-slate-400 mb-4">Need a custom solution?</p>
          <Button variant="outline" size="lg" onClick={scrollToContact} className="border-slate-500 text-slate-300 hover:bg-slate-700 hover:text-white">
            Contact Sales Team
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default CloudPricing;
