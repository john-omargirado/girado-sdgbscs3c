
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 py-16">
      <div className="container">
        <div className="mt-16 pt-8 border-t border-gray-200 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} John Omar N. Girado BSCS 3C Ethics
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
