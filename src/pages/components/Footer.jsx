import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-100">
      <div className="container mx-auto px-4 py-6">
        <div className="flex justify-center space-x-4">
          <Link to="/about" className="text-gray-600 hover:text-gray-900">About</Link>
          <Link to="/contact" className="text-gray-600 hover:text-gray-900">Contact</Link>
          <Link to="/privacy" className="text-gray-600 hover:text-gray-900">Privacy Policy</Link>
        </div>
        <div className="mt-4 text-center text-gray-500">
          © 2024 PhotoShare. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;