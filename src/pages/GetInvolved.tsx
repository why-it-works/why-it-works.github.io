import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Octokit } from '@octokit/rest';
import { FaGithub, FaExclamationCircle, FaCodeBranch, FaComment, FaComments } from 'react-icons/fa';
import MainLayout from '@/layouts/MainLayout';

type Issue = {
  id: number;
  title: string;
  html_url: string;
  repository_url: string;
  repository_name: string;
  number: number;
  state: string;
  created_at: string;
  updated_at: string;
  comments: number;
  labels: Array<{
    name: string;
    color: string;
  }>;
  user: {
    login: string;
    avatar_url: string;
    html_url: string;
  };
};

const GetInvolved = () => {
  const [issues, setIssues] = useState<Issue[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    const fetchIssues = async () => {
      try {
        setLoading(true);
        
        // Initialize Octokit without authentication for public repositories
        const octokit = new Octokit();
        
        // Organization name
        const org = 'why-it-works';
        
        // Get all repositories from the organization
        const { data: repos } = await octokit.repos.listForOrg({
          org,
          per_page: 100,
        });
        
        // Fetch issues from each repository
        const issuePromises = repos.map(async (repo) => {
          const { data: repoIssues } = await octokit.issues.listForRepo({
            owner: org,
            repo: repo.name,
            state: 'open',
            per_page: 100,
          });
          
          // Add repository name to each issue and transform to match our Issue type
          return repoIssues.map(issue => ({
            id: issue.id,
            title: issue.title,
            html_url: issue.html_url,
            repository_url: issue.repository_url,
            repository_name: repo.name,
            number: issue.number,
            state: issue.state,
            created_at: issue.created_at,
            updated_at: issue.updated_at,
            comments: issue.comments,
            labels: Array.isArray(issue.labels) ? issue.labels.map(label => {
              if (typeof label === 'string') {
                return { name: label, color: '888888' };
              } else {
                return { 
                  name: label.name || 'unknown',
                  color: label.color || '888888'
                };
              }
            }) : [],
            user: {
              login: issue.user?.login || 'unknown',
              avatar_url: issue.user?.avatar_url || '',
              html_url: issue.user?.html_url || ''
            }
          }));
        });
        
        // Wait for all issues to be fetched
        const issuesArrays = await Promise.all(issuePromises);
        
        // Flatten the array of arrays
        const allIssues = issuesArrays.flat();
        
        // Sort issues by creation date (newest first)
        allIssues.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());
        
        setIssues(allIssues);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching issues:', err);
        setError('Failed to fetch issues. Please try again later.');
        setLoading(false);
      }
    };
    
    fetchIssues();
  }, []);
  
  // Filter issues based on selected filter
  const filteredIssues = filter === 'all' 
    ? issues 
    : issues.filter(issue => issue.repository_name === filter);
  
  // Get unique repository names
  const repositories = Array.from(new Set(issues.map(issue => issue.repository_name)));
  
  // Format date to readable format
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    });
  };

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
              Get Involved
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-600 max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Contribute to our open source projects by tackling issues, joining discussions, and submitting pull requests.
            </motion.p>
          </div>
          
          {/* Community Engagement Tabs */}
          <motion.div 
            className="flex flex-wrap justify-center gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <a
              href="https://github.com/orgs/why-it-works/discussions"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-6 py-3 bg-purple-600 text-white font-medium rounded-md hover:bg-purple-700 transition-colors"
            >
              <FaComments className="mr-2" /> Join Discussions
            </a>
            
            <a
              href="https://github.com/why-it-works"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-md hover:bg-gray-50 transition-colors"
            >
              <FaGithub className="mr-2" /> GitHub Organization
            </a>
          </motion.div>
          
          {/* GitHub Discussions Section */}
          <motion.div
            className="bg-white rounded-xl shadow-md overflow-hidden mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="px-6 py-4 bg-purple-50 border-b border-purple-100">
              <div className="flex justify-between items-center">
                <h2 className="text-lg font-medium flex items-center">
                  <FaComments className="mr-2 text-purple-600" /> Community Discussions
                </h2>
                <a 
                  href="https://github.com/orgs/why-it-works/discussions" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-purple-600 hover:text-purple-800"
                >
                  View All Discussions
                </a>
              </div>
            </div>
            <div className="p-6">
              <p className="text-gray-700 mb-4">
                Join our community discussions to share ideas, ask questions, and collaborate with other contributors. Our GitHub Discussions is the perfect place to:
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">•</span>
                  <span>Propose new project ideas and features</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">•</span>
                  <span>Ask questions about our templates and projects</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">•</span>
                  <span>Share your experiences and best practices</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">•</span>
                  <span>Connect with other community members</span>
                </li>
              </ul>
              <a 
                href="https://github.com/orgs/why-it-works/discussions" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-purple-600 text-white font-medium rounded-md hover:bg-purple-700 transition-colors"
              >
                <FaComments className="mr-2" /> Join the Conversation
              </a>
            </div>
          </motion.div>
          
          {/* Repository Filters */}
          <motion.div 
            className="flex flex-wrap justify-center gap-2 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <h2 className="w-full text-2xl font-bold text-center mb-4">Open Issues</h2>
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                filter === 'all' 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
              }`}
            >
              All Repositories
            </button>
            {repositories.map(repo => (
              <button
                key={repo}
                onClick={() => setFilter(repo)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  filter === repo 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                }`}
              >
                {repo}
              </button>
            ))}
          </motion.div>
          
          {/* Loading State */}
          {loading && (
            <div className="flex justify-center items-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
            </div>
          )}
          
          {/* Error State */}
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md mb-6">
              <div className="flex">
                <FaExclamationCircle className="h-5 w-5 text-red-500 mr-2" />
                <span>{error}</span>
              </div>
            </div>
          )}
          
          {/* Issues List */}
          {!loading && !error && (
            <>
              <div className="bg-white rounded-xl shadow-md overflow-hidden mb-8">
                <div className="px-6 py-4 bg-gray-50 border-b border-gray-200">
                  <div className="flex justify-between items-center">
                    <h2 className="text-lg font-medium">Open Issues ({filteredIssues.length})</h2>
                    <a 
                      href="https://github.com/why-it-works" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-gray-600 hover:text-gray-900"
                    >
                      <FaGithub className="mr-2" /> View on GitHub
                    </a>
                  </div>
                </div>
                
                {filteredIssues.length > 0 ? (
                  <ul className="divide-y divide-gray-200">
                    {filteredIssues.map(issue => (
                      <motion.li 
                        key={issue.id}
                        className="p-6 hover:bg-gray-50 transition-colors"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="flex flex-col md:flex-row md:items-start">
                          <div className="flex-grow">
                            <div className="flex items-center mb-2">
                              <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full mr-2">
                                {issue.repository_name}
                              </span>
                              <span className="text-gray-500 text-sm">
                                #{issue.number}
                              </span>
                            </div>
                            
                            <h3 className="text-lg font-medium mb-2">
                              <a 
                                href={issue.html_url} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-gray-900 hover:text-blue-600"
                              >
                                {issue.title}
                              </a>
                            </h3>
                            
                            <div className="flex flex-wrap gap-2 mb-3">
                              {issue.labels.map(label => (
                                <span 
                                  key={`${issue.id}-${label.name}`}
                                  className="px-2 py-1 text-xs rounded-full"
                                  style={{
                                    backgroundColor: `#${label.color}20`,
                                    color: `#${label.color}`,
                                    border: `1px solid #${label.color}`
                                  }}
                                >
                                  {label.name}
                                </span>
                              ))}
                            </div>
                            
                            <div className="flex items-center text-sm text-gray-500">
                              <div className="flex items-center mr-4">
                                <img 
                                  src={issue.user.avatar_url} 
                                  alt={issue.user.login}
                                  className="w-5 h-5 rounded-full mr-1"
                                />
                                <a 
                                  href={issue.user.html_url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="hover:text-blue-600"
                                >
                                  {issue.user.login}
                                </a>
                              </div>
                              <div className="flex items-center mr-4">
                                <FaComment className="mr-1" />
                                {issue.comments}
                              </div>
                              <div>
                                Opened on {formatDate(issue.created_at)}
                              </div>
                            </div>
                          </div>
                          
                          <div className="mt-4 md:mt-0 md:ml-4">
                            <a 
                              href={issue.html_url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                            >
                              <FaCodeBranch className="mr-2" />
                              Contribute
                            </a>
                          </div>
                        </div>
                      </motion.li>
                    ))}
                  </ul>
                ) : (
                  <div className="p-12 text-center">
                    <FaExclamationCircle className="mx-auto h-12 w-12 text-gray-400 mb-4" />
                    <h3 className="text-lg font-medium text-gray-900 mb-2">No open issues found</h3>
                    <p className="text-gray-500">
                      {filter === 'all' 
                        ? 'There are currently no open issues in any repository.' 
                        : `There are currently no open issues in the ${filter} repository.`}
                    </p>
                    {filter !== 'all' && (
                      <button
                        onClick={() => setFilter('all')}
                        className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                      >
                        View All Repositories
                      </button>
                    )}
                  </div>
                )}
              </div>
              
              <div className="text-center">
                <p className="text-gray-600 mb-4">
                  Want to contribute but don't know where to start?
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <a 
                    href="https://github.com/orgs/why-it-works/discussions"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
                  >
                    <FaComments className="mr-2" />
                    Join Discussions
                  </a>
                  <a 
                    href="https://github.com/why-it-works"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    <FaGithub className="mr-2" />
                    Visit GitHub Organization
                  </a>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </MainLayout>
  );
};

export default GetInvolved;
