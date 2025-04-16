
import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-timber-dark text-white">
      <div className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Details */}
          <div className="space-y-4">
            <div className="flex flex-col">
              <span className="text-2xl font-serif">Timber</span>
              <span className="text-sm uppercase tracking-widest text-timber-light">Elegance</span>
            </div>
            <p className="text-timber-light max-w-xs">
              Premium timber flooring and structural solutions for discerning clients since 1985.
            </p>
            <div className="flex space-x-4 text-timber-light">
              <a href="#" className="hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-medium mb-4 font-serif">Quick Links</h4>
            <ul className="space-y-2 text-timber-light">
              <li>
                <Link to="/" className="hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-white transition-colors">Products</Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-white transition-colors">Gallery</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-white transition-colors">Blog</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-medium mb-4 font-serif">Contact Us</h4>
            <ul className="space-y-3 text-timber-light">
              <li className="flex items-center gap-2">
                <MapPin size={18} />
                <span>123 Timber Lane, Forest Hills, NY 10001</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={18} />
                <a href="tel:+12345678900" className="hover:text-white transition-colors">
                  +1 (234) 567-8900
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={18} />
                <a href="mailto:info@timberelegance.com" className="hover:text-white transition-colors">
                  info@timberelegance.com
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-medium mb-4 font-serif">Newsletter</h4>
            <p className="text-timber-light mb-4">
              Subscribe to receive updates on new products and special offers.
            </p>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-4 py-2 rounded bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-timber-light"
              />
              <button
                type="submit"
                className="w-full bg-timber-light text-timber-dark font-medium py-2 rounded hover:bg-white transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-6 text-center text-timber-light text-sm">
          <p>© {new Date().getFullYear()} Timber Elegance. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
