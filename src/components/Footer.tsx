import { Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from '@/assets/logo.png';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <img src={logo} alt="CloudTechCy" className="h-20 w-auto" />
            </Link>
            <p className="text-gray-400 leading-relaxed">
              Leading provider of enterprise cloud solutions, delivering reliable VPN, 
              virtual computing, VoIP, and hosting services.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link to="/services/vpn" className="hover:text-blue-400 transition-colors">Enterprise VPN</Link></li>
              <li><Link to="/services/virtual-computing" className="hover:text-blue-400 transition-colors">Virtual Computing</Link></li>
              <li><Link to="/services/voip" className="hover:text-blue-400 transition-colors">VoIP Solutions</Link></li>
              <li><Link to="/services/cloud-storage" className="hover:text-blue-400 transition-colors">Cloud Storage</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-white font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li><a href="/#services" className="hover:text-blue-400 transition-colors">Our Services</a></li>
              <li><a href="/#features" className="hover:text-blue-400 transition-colors">Features</a></li>
              <li><a href="/#pricing" className="hover:text-blue-400 transition-colors">Pricing</a></li>
              <li><a href="/#contact" className="hover:text-blue-400 transition-colors">24/7 Support</a></li>
              <li><a href="/#contact" className="hover:text-blue-400 transition-colors">Contact Us</a></li>
            </ul>
          </div>


          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-blue-400" />
                <a href="tel:+35797521528" className="text-sm hover:text-blue-400 transition-colors">+357 97521528</a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-blue-400" />
                <a href="mailto:sales@cloudtechcy.com" className="text-sm hover:text-blue-400 transition-colors">sales@cloudtechcy.com</a>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-blue-400" />
                <span className="text-sm">Limassol, Cyprus</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} CloudTechCy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
