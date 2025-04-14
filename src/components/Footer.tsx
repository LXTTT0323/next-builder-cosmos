
import { Instagram, Mail, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 px-6 relative border-t border-white/10">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            <div className="text-xl font-bold text-white">
              The Next <span className="text-space-highlight">Builder</span>
            </div>
          </div>
          
          <div className="flex items-center space-x-6">
            <a 
              href="https://discord.gg/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-space-highlight transition-colors"
              aria-label="Discord"
            >
              <MessageCircle className="w-5 h-5" />
            </a>
            <a 
              href="https://www.xiaohongshu.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-space-highlight transition-colors"
              aria-label="Xiaohongshu"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a 
              href="mailto:contact@thenextbuilder.com" 
              className="text-gray-400 hover:text-space-highlight transition-colors"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
            <a 
              href="#" 
              className="text-gray-400 hover:text-space-highlight transition-colors"
              aria-label="WeChat"
            >
              <span className="text-sm">WeChat</span>
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-white/5 text-center">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} The Next Builder. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
