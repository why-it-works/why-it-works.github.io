import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import MainLayout from '@/layouts/MainLayout';

const NotFound = () => {
  return (
    <MainLayout>
      <div className="pt-24 pb-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-8xl font-bold text-gray-200 mb-4">404</h1>
            <h2 className="text-3xl font-bold mb-6">Page Not Found</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-lg mx-auto">
              The page you are looking for doesn't exist or has been moved.
            </p>
            <Link 
              to="/"
              className="px-8 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-colors inline-block"
            >
              Back to Home
            </Link>
          </motion.div>
        </div>
      </div>
    </MainLayout>
  );
};

export default NotFound;
