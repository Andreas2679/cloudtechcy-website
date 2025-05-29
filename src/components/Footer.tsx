
import { Cloud, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-lg flex items-center justify-center">
                <Cloud className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">CloudTech Solutions</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Leading provider of enterprise cloud solutions, delivering reliable VPN, 
              virtual computing, VoIP, and hosting services worldwide.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-blue-400 transition-colors">Enterprise VPN</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Virtual Computing</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">VoIP Solutions</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Server Hosting</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Cloud Storage</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-white font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-blue-400 transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">API Reference</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">System Status</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">24/7 Support</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Knowledge Base</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-blue-400" />
                <span className="text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-blue-400" />
                <span className="text-sm">sales@cloudtech-solutions.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-blue-400" />
                <span className="text-sm">123 Cloud Street, Tech City</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 CloudTech Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
