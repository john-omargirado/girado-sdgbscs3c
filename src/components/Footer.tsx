
import React from 'react';
import { Github, Twitter, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-gray-50 py-16">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <h3 className="text-lg font-semibold mb-4">My SDG Pledges</h3>
            <p className="text-muted-foreground text-sm">
              Personal commitments to support the United Nations Sustainable Development Goals through daily actions and advocacy.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#pledges" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Pledges
                </a>
              </li>
              <li>
                <a href="#impact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Impact
                </a>
              </li>
              <li>
                <a 
                  href="https://sdgs.un.org/goals" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  UN SDG Goals
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Get Involved</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="https://www.un.org/sustainabledevelopment/sustainable-development-goals/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  UN Development Program
                </a>
              </li>
              <li>
                <a 
                  href="https://www.globalgoals.org/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Global Goals
                </a>
              </li>
              <li>
                <a 
                  href="https://www.sdgsinaction.com/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  SDGs In Action App
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="mailto:contact@example.com" 
                className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              Have questions about my pledges? Feel free to reach out.
            </p>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-200 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} My SDG Pledges. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
