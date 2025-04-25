import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import MainLayout from '@/layouts/MainLayout';
import { FaGithub, FaCode, FaServer, FaLightbulb } from 'react-icons/fa';

const Home = () => {
	return (
		<MainLayout>
			{/* Hero Section */}
			<section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-50 to-white overflow-hidden">
				<div className="absolute inset-0 z-0 opacity-20">
					{/* Background pattern */}
					<div className="absolute inset-0 bg-grid-pattern"></div>
				</div>
				
				<div className="container mx-auto px-4 py-32 z-10">
					<div className="flex flex-col md:flex-row items-center justify-between">
						<div className="md:w-1/2 mb-12 md:mb-0">
							<motion.h1 
								className="text-5xl md:text-6xl font-bold leading-tight mb-6"
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6 }}
							>
								<span className="block">Open.</span>
								<span className="block">Collaborative.</span>
								<span className="block">Flexible.</span>
							</motion.h1>
							
							<motion.p 
								className="text-xl text-gray-600 mb-8"
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6, delay: 0.2 }}
							>
								Open Source enables Why It Works to bring choice, technology, and community to our projects.
							</motion.p>
							
							<motion.div 
								className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6, delay: 0.4 }}
							>
								<Link 
									to="/get-involved"
									className="px-8 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-colors"
								>
									Get Involved
								</Link>
								<Link 
									to="/projects"
									className="px-8 py-3 border border-gray-300 text-gray-700 font-medium rounded-md hover:bg-gray-50 transition-colors"
								>
									Explore Projects
								</Link>
							</motion.div>
						</div>
						
						<motion.div 
							className="md:w-1/2 flex justify-center"
							initial={{ opacity: 0, scale: 0.9 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{ duration: 0.8 }}
						>
							<div className="relative w-full max-w-lg">
								{/* Abstract code graphic */}
								<div className="absolute top-0 -left-4 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
								<div className="absolute top-0 -right-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
								<div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
								<div className="relative">
									<div className="bg-white bg-opacity-90 backdrop-filter backdrop-blur-lg rounded-2xl shadow-xl p-8 relative z-10 border border-gray-200">
										<div className="flex items-center justify-between mb-4">
											<div className="flex space-x-2">
												<div className="w-3 h-3 bg-red-500 rounded-full"></div>
												<div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
												<div className="w-3 h-3 bg-green-500 rounded-full"></div>
											</div>
											<div className="text-xs text-gray-500">why-it-works.tsx</div>
										</div>
										<pre className="text-sm overflow-x-auto">
											<code className="language-typescript">
{"import { Innovation } from '@why-it-works/core';\n\nconst WhyItWorks = () => {\n  return (\n    <Innovation \n      openSource={true}\n      collaborative={true}\n      flexible={true}\n    />\n  );\n};\n\nexport default WhyItWorks;"}
											</code>
										</pre>
									</div>
								</div>
							</div>
						</motion.div>
					</div>
				</div>
			</section>

			{/* Projects Section */}
			<section className="py-20 bg-white">
				<div className="container mx-auto px-4">
					<div className="text-center mb-16">
						<h2 className="text-3xl md:text-4xl font-bold mb-4">Projects</h2>
						<p className="text-xl text-gray-600 max-w-3xl mx-auto">
							Some of the most innovative projects with production-grade code. Here are a few featured projects:
						</p>
					</div>
					
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						{/* Frontend Template */}
						<motion.div 
							className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5 }}
						>
							<div className="p-6">
								<div className="flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 text-blue-600 mb-4">
									<FaCode className="text-2xl" />
								</div>
								<h3 className="text-xl font-bold mb-2">Frontend Template</h3>
								<p className="text-gray-600 mb-4">
									A modern React template with TypeScript, Redux Toolkit, and Tailwind CSS for building scalable web applications.
								</p>
								<a 
									href="https://github.com/why-it-works/frontend-template"
									target="_blank"
									rel="noopener noreferrer"
									className="inline-flex items-center text-blue-600 hover:text-blue-800"
								>
									Explore <FaGithub className="ml-1" />
								</a>
							</div>
						</motion.div>
						
						{/* Backend Template */}
						<motion.div 
							className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5, delay: 0.1 }}
						>
							<div className="p-6">
								<div className="flex items-center justify-center h-16 w-16 rounded-full bg-green-100 text-green-600 mb-4">
									<FaServer className="text-2xl" />
								</div>
								<h3 className="text-xl font-bold mb-2">Backend Template</h3>
								<p className="text-gray-600 mb-4">
									A Node.js microservices template with TypeScript, Knex.js, and Swagger for building scalable backend applications.
								</p>
								<a 
									href="https://github.com/why-it-works/backend-template"
									target="_blank"
									rel="noopener noreferrer"
									className="inline-flex items-center text-green-600 hover:text-green-800"
								>
									Explore <FaGithub className="ml-1" />
								</a>
							</div>
						</motion.div>
						
						{/* Coming Soon */}
						<motion.div 
							className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5, delay: 0.2 }}
						>
							<div className="p-6">
								<div className="flex items-center justify-center h-16 w-16 rounded-full bg-purple-100 text-purple-600 mb-4">
									<FaLightbulb className="text-2xl" />
								</div>
								<h3 className="text-xl font-bold mb-2">More Coming Soon</h3>
								<p className="text-gray-600 mb-4">
									We're working on more innovative projects with production-grade code. Stay tuned for updates!
								</p>
								<Link 
									to="/get-involved"
									className="inline-flex items-center text-purple-600 hover:text-purple-800"
								>
									Get Involved
								</Link>
							</div>
						</motion.div>
					</div>
					
					<div className="text-center mt-12">
						<Link 
							to="/projects"
							className="px-6 py-3 bg-gray-100 text-gray-800 font-medium rounded-md hover:bg-gray-200 transition-colors"
						>
							View All Projects
						</Link>
					</div>
				</div>
			</section>

			{/* Get Involved Section */}
			<section className="py-20 bg-blue-50">
				<div className="container mx-auto px-4">
					<div className="max-w-4xl mx-auto text-center">
						<h2 className="text-3xl md:text-4xl font-bold mb-6">Get Involved</h2>
						<p className="text-xl text-gray-600 mb-8">
							Join our community and contribute to innovative projects with production-grade code.
						</p>
						<Link 
							to="/get-involved"
							className="px-8 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-colors inline-block"
						>
							View Open Issues
						</Link>
					</div>
				</div>
			</section>
		</MainLayout>
	);
};

export default Home;
