import '../styles/global.css';

type ButtonProps = {
	children: React.ReactNode;
	onClick?: () => void;
};

const Button = ({ children, onClick }: ButtonProps) => (
	<button onClick={onClick} className="button" style={{ marginTop: '1rem' }}>
		{children}
	</button>
);

export default Button;
