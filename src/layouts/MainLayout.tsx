import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaGithub, FaBars, FaTimes } from 'react-icons/fa';

type Props = {
	children: React.ReactNode;
};

const MainLayout = ({ children }: Props) => {
	const location = useLocation();
	const [isScrolled, setIsScrolled] = useState(false);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 10);
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return (
		<div className="flex flex-col min-h-screen">
			{/* Header */}
			<header 
				className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent'}`}
			>
				<div className="container mx-auto px-4 py-4 flex justify-between items-center">
					<Link to="/" className="flex items-center space-x-2">
						<span className="text-xl font-bold">Why It Works</span>
					</Link>
					
					{/* Desktop Navigation */}
					<nav className="hidden md:flex space-x-8">
						<Link 
							to="/projects" 
							className={`font-medium hover:text-blue-600 transition-colors ${location.pathname === '/projects' ? 'text-blue-600' : ''}`}
						>
							Projects
						</Link>
						<Link 
							to="/get-involved" 
							className={`font-medium hover:text-blue-600 transition-colors ${location.pathname === '/get-involved' ? 'text-blue-600' : ''}`}
						>
							Get Involved
						</Link>
						<Link 
							to="/resources" 
							className={`font-medium hover:text-blue-600 transition-colors ${location.pathname === '/resources' ? 'text-blue-600' : ''}`}
						>
							Resources
						</Link>
					</nav>
					
					<div className="flex items-center space-x-4">
						<a 
							href="https://github.com/why-it-works" 
							target="_blank" 
							rel="noopener noreferrer"
							className="text-2xl hover:text-blue-600 transition-colors"
						>
							<FaGithub />
						</a>
						
						{/* Mobile menu button */}
						<button 
							className="md:hidden text-gray-800 hover:text-blue-600 transition-colors focus:outline-none"
							onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
						>
							{isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
						</button>
					</div>
				</div>
			</header>

			{/* Mobile Navigation Menu */}
			{isMobileMenuOpen && (
				<div className="fixed inset-0 z-40 bg-white md:hidden">
					<div className="flex flex-col h-full p-6">
						<div className="flex justify-between items-center mb-8">
							<Link 
								to="/" 
								className="text-xl font-bold"
								onClick={() => setIsMobileMenuOpen(false)}
							>
								Why It Works
							</Link>
							<button 
								className="text-gray-800 hover:text-blue-600 transition-colors focus:outline-none"
								onClick={() => setIsMobileMenuOpen(false)}
							>
								<FaTimes size={24} />
							</button>
						</div>
						
						<nav className="flex flex-col space-y-6 text-lg">
							<Link 
								to="/" 
								className={`font-medium hover:text-blue-600 transition-colors ${location.pathname === '/' ? 'text-blue-600' : ''}`}
								onClick={() => setIsMobileMenuOpen(false)}
							>
								Home
							</Link>
							<Link 
								to="/projects" 
								className={`font-medium hover:text-blue-600 transition-colors ${location.pathname === '/projects' ? 'text-blue-600' : ''}`}
								onClick={() => setIsMobileMenuOpen(false)}
							>
								Projects
							</Link>
							<Link 
								to="/get-involved" 
								className={`font-medium hover:text-blue-600 transition-colors ${location.pathname === '/get-involved' ? 'text-blue-600' : ''}`}
								onClick={() => setIsMobileMenuOpen(false)}
							>
								Get Involved
							</Link>
							<Link 
								to="/resources" 
								className={`font-medium hover:text-blue-600 transition-colors ${location.pathname === '/resources' ? 'text-blue-600' : ''}`}
								onClick={() => setIsMobileMenuOpen(false)}
							>
								Resources
							</Link>
						</nav>
						
						<div className="mt-auto">
							<a 
								href="https://github.com/why-it-works" 
								target="_blank" 
								rel="noopener noreferrer"
								className="flex items-center space-x-2 text-gray-800 hover:text-blue-600 transition-colors"
							>
								<FaGithub size={20} />
								<span>GitHub Organization</span>
							</a>
						</div>
					</div>
				</div>
			)}

			{/* Main Content */}
			<main className="flex-grow">
				{children}
			</main>

			{/* Footer */}
			<footer className="bg-gray-900 text-white py-12">
				<div className="container mx-auto px-4">
					<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
						<div>
							<h3 className="text-lg font-bold mb-4">Why It Works</h3>
							<p className="text-gray-400 mb-4">
								Production-grade code for innovative projects.
							</p>
							<a 
								href="https://github.com/why-it-works" 
								target="_blank" 
								rel="noopener noreferrer"
								className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
							>
								<FaGithub />
								<span>GitHub</span>
							</a>
						</div>
						
						<div>
							<h3 className="text-lg font-bold mb-4">Resources</h3>
							<ul className="space-y-2">
								<li>
									<Link to="/projects" className="text-gray-400 hover:text-white transition-colors">
										Projects
									</Link>
								</li>
								<li>
									<Link to="/get-involved" className="text-gray-400 hover:text-white transition-colors">
										Get Involved
									</Link>
								</li>
								<li>
									<a 
										href="https://github.com/why-it-works/frontend-template" 
										target="_blank" 
										rel="noopener noreferrer"
										className="text-gray-400 hover:text-white transition-colors"
									>
										Frontend Template
									</a>
								</li>
								<li>
									<a 
										href="https://github.com/why-it-works/backend-template" 
										target="_blank" 
										rel="noopener noreferrer"
										className="text-gray-400 hover:text-white transition-colors"
									>
										Backend Template
									</a>
								</li>
							</ul>
						</div>
						
						<div>
							<h3 className="text-lg font-bold mb-4">Legal</h3>
							<ul className="space-y-2">
								<li>
									<Link to="/privacy" className="text-gray-400 hover:text-white transition-colors">
										Privacy Policy
									</Link>
								</li>
								<li>
									<Link to="/terms" className="text-gray-400 hover:text-white transition-colors">
										Terms of Use
									</Link>
								</li>
							</ul>
						</div>
					</div>
					
					<div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
						<p>&copy; {new Date().getFullYear()} Why It Works. All rights reserved.</p>
					</div>
				</div>
			</footer>
		</div>
	);
};

export default MainLayout;
