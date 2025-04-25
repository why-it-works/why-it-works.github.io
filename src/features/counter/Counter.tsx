import { useAppDispatch, useAppSelector } from '../../store';
import { increment } from './counterSlice';
import Button from '@/components/Button';

const Counter = () => {
	const count = useAppSelector((state) => state.counter.value);
	const dispatch = useAppDispatch();

	return (
		<div className="text-center mt-4">
			<p className="mb-2">Count: {count}</p>
			<Button onClick={() => dispatch(increment())}>Increment</Button>
		</div>
	);
};

export default Counter;
