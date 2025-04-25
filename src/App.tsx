import { Routes, Route } from 'react-router-dom';
import Home from '@/pages/Home';
import Projects from '@/pages/Projects';
import GetInvolved from '@/pages/GetInvolved';
import Resources from '@/pages/Resources';
import NotFound from '@/pages/NotFound';

const App = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/projects" element={<Projects />} />
			<Route path="/get-involved" element={<GetInvolved />} />
			<Route path="/resources" element={<Resources />} />
			<Route path="*" element={<NotFound />} />
		</Routes>
	);
};

export default App;
