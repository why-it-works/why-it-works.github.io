import { api } from '@/lib/axios';

export const getUserProfile = async () => {
	const response = await api.get('/users/me');
	return response.data;
};
