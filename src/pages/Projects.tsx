import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaCode, FaServer } from 'react-icons/fa';
import MainLayout from '@/layouts/MainLayout';

type Project = {
  id: string;
  name: string;
  description: string;
  icon: JSX.Element;
  tags: string[];
  repoUrl: string;
  color: string;
};

const projects: Project[] = [
  {
    id: 'frontend-template',
    name: 'Frontend Template',
    description: 'A modern React template with TypeScript, Redux Toolkit, and Tailwind CSS for building scalable web applications.',
    icon: <FaCode className="text-2xl" />,
    tags: ['React', 'TypeScript', 'Redux', 'Tailwind CSS'],
    repoUrl: 'https://github.com/why-it-works/frontend-template',
    color: 'blue',
  },
  {
    id: 'backend-template',
    name: 'Backend Template',
    description: 'A Node.js microservices template with TypeScript, Knex.js, and Swagger for building scalable backend applications.',
    icon: <FaServer className="text-2xl" />,
    tags: ['Node.js', 'TypeScript', 'Knex.js', 'Swagger'],
    repoUrl: 'https://github.com/why-it-works/backend-template',
    color: 'green',
  },
];

const Projects = () => {
  const [filter, setFilter] = useState<string>('all');
  
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.tags.includes(filter));
  
  const allTags = Array.from(new Set(projects.flatMap(project => project.tags)));
  
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
              Our Projects
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-600 max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Explore our collection of innovative projects with production-grade code.
            </motion.p>
          </div>
          
          {/* Filters */}
          <motion.div 
            className="flex flex-wrap justify-center gap-2 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                filter === 'all' 
                  ? 'bg-gray-800 text-white' 
                  : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
              }`}
            >
              All
            </button>
            {allTags.map(tag => (
              <button
                key={tag}
                onClick={() => setFilter(tag)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  filter === tag 
                    ? 'bg-gray-800 text-white' 
                    : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                }`}
              >
                {tag}
              </button>
            ))}
          </motion.div>
          
          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div 
                key={project.id}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="p-6">
                  <div className={`flex items-center justify-center h-16 w-16 rounded-full bg-${project.color}-100 text-${project.color}-600 mb-4`}>
                    {project.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{project.name}</h3>
                  <p className="text-gray-600 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map(tag => (
                      <span 
                        key={tag} 
                        className={`px-2 py-1 bg-${project.color}-50 text-${project.color}-700 text-xs rounded-full`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a 
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center text-${project.color}-600 hover:text-${project.color}-800`}
                  >
                    View on GitHub <FaGithub className="ml-1" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Empty State */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500">No projects found with the selected filter.</p>
              <button
                onClick={() => setFilter('all')}
                className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
              >
                View All Projects
              </button>
            </div>
          )}
        </div>
      </div>
    </MainLayout>
  );
};

export default Projects;
