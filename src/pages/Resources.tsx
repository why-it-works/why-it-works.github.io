import { motion } from 'framer-motion';
import { FaBook, FaCode, FaGithub, FaLightbulb, FaServer } from 'react-icons/fa';
import MainLayout from '@/layouts/MainLayout';

const Resources = () => {
  return (
    <MainLayout>
      <div className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.h1 
              className="text-4xl md:text-5xl font-bold mb-6"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Resources
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-600 max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Documentation, guides, and resources to help you get started with our projects.
            </motion.p>
          </div>
          
          {/* Documentation Section */}
          <section className="mb-20">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Documentation</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Frontend Template Docs */}
              <motion.div 
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 text-blue-600 mr-4">
                      <FaCode className="text-xl" />
                    </div>
                    <h3 className="text-xl font-bold">Frontend Template</h3>
                  </div>
                  
                  <p className="text-gray-600 mb-6">
                    Comprehensive documentation for our React frontend template with TypeScript, Redux Toolkit, and Tailwind CSS.
                  </p>
                  
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      <span>Project structure and architecture</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      <span>State management with Redux Toolkit</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      <span>Styling with Tailwind CSS</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      <span>Testing and deployment guides</span>
                    </li>
                  </ul>
                  
                  <a 
                    href="https://github.com/why-it-works/frontend-template#readme"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-600 hover:text-blue-800"
                  >
                    View Documentation <FaGithub className="ml-1" />
                  </a>
                </div>
              </motion.div>
              
              {/* Backend Template Docs */}
              <motion.div 
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="flex items-center justify-center h-12 w-12 rounded-full bg-green-100 text-green-600 mr-4">
                      <FaServer className="text-xl" />
                    </div>
                    <h3 className="text-xl font-bold">Backend Template</h3>
                  </div>
                  
                  <p className="text-gray-600 mb-6">
                    Detailed documentation for our Node.js microservices template with TypeScript, Knex.js, and Swagger.
                  </p>
                  
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">•</span>
                      <span>Microservices architecture</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">•</span>
                      <span>Database setup and migrations</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">•</span>
                      <span>API documentation with Swagger</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">•</span>
                      <span>Error handling and validation</span>
                    </li>
                  </ul>
                  
                  <a 
                    href="https://github.com/why-it-works/backend-template#readme"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-green-600 hover:text-green-800"
                  >
                    View Documentation <FaGithub className="ml-1" />
                  </a>
                </div>
              </motion.div>
            </div>
          </section>
          
          {/* Guides Section */}
          <section className="mb-20">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Getting Started Guides</h2>
            
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Frontend Guide */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <h3 className="text-xl font-bold mb-4 flex items-center">
                      <FaBook className="mr-2 text-blue-600" />
                      Frontend Development
                    </h3>
                    
                    <ol className="list-decimal list-inside space-y-3 text-gray-700">
                      <li className="pl-2">
                        <span className="font-medium">Clone the repository:</span>
                        <pre className="bg-gray-100 p-2 mt-1 rounded-md text-sm overflow-x-auto">
                          git clone https://github.com/why-it-works/frontend-template.git
                        </pre>
                      </li>
                      <li className="pl-2">
                        <span className="font-medium">Install dependencies:</span>
                        <pre className="bg-gray-100 p-2 mt-1 rounded-md text-sm overflow-x-auto">
                          cd frontend-template && npm install
                        </pre>
                      </li>
                      <li className="pl-2">
                        <span className="font-medium">Start the development server:</span>
                        <pre className="bg-gray-100 p-2 mt-1 rounded-md text-sm overflow-x-auto">
                          npm run dev
                        </pre>
                      </li>
                      <li className="pl-2">
                        <span className="font-medium">Build for production:</span>
                        <pre className="bg-gray-100 p-2 mt-1 rounded-md text-sm overflow-x-auto">
                          npm run build
                        </pre>
                      </li>
                    </ol>
                  </motion.div>
                  
                  {/* Backend Guide */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <h3 className="text-xl font-bold mb-4 flex items-center">
                      <FaBook className="mr-2 text-green-600" />
                      Backend Development
                    </h3>
                    
                    <ol className="list-decimal list-inside space-y-3 text-gray-700">
                      <li className="pl-2">
                        <span className="font-medium">Clone the repository:</span>
                        <pre className="bg-gray-100 p-2 mt-1 rounded-md text-sm overflow-x-auto">
                          git clone https://github.com/why-it-works/backend-template.git
                        </pre>
                      </li>
                      <li className="pl-2">
                        <span className="font-medium">Install dependencies:</span>
                        <pre className="bg-gray-100 p-2 mt-1 rounded-md text-sm overflow-x-auto">
                          cd backend-template && npm install
                        </pre>
                      </li>
                      <li className="pl-2">
                        <span className="font-medium">Run database migrations:</span>
                        <pre className="bg-gray-100 p-2 mt-1 rounded-md text-sm overflow-x-auto">
                          npm run migrate
                        </pre>
                      </li>
                      <li className="pl-2">
                        <span className="font-medium">Start the development server:</span>
                        <pre className="bg-gray-100 p-2 mt-1 rounded-md text-sm overflow-x-auto">
                          npm run dev
                        </pre>
                      </li>
                    </ol>
                  </motion.div>
                </div>
              </div>
            </div>
          </section>
          
          {/* Best Practices Section */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Best Practices</h2>
            
            <motion.div 
              className="bg-white rounded-xl shadow-md overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="p-8">
                <div className="flex items-center justify-center mb-6">
                  <div className="flex items-center justify-center h-16 w-16 rounded-full bg-purple-100 text-purple-600">
                    <FaLightbulb className="text-2xl" />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold mb-4">Code Quality</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <span className="text-purple-500 mr-2">•</span>
                        <span>Follow the established project structure</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-purple-500 mr-2">•</span>
                        <span>Write comprehensive tests for your code</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-purple-500 mr-2">•</span>
                        <span>Use TypeScript for type safety</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-purple-500 mr-2">•</span>
                        <span>Document your code with clear comments</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold mb-4">Contribution Workflow</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <span className="text-purple-500 mr-2">•</span>
                        <span>Fork the repository and create a feature branch</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-purple-500 mr-2">•</span>
                        <span>Make your changes and commit with clear messages</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-purple-500 mr-2">•</span>
                        <span>Submit a pull request with a detailed description</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-purple-500 mr-2">•</span>
                        <span>Respond to feedback and make necessary changes</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          </section>
        </div>
      </div>
    </MainLayout>
  );
};

export default Resources;
