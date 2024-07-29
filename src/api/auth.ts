// import { get } from '@/http/request';

// export const getAuthList = () => {
// 	return get({}, '/getAuthList', {});
// };

import service from '@/http/request';
export const getAuthList = () => {
	return service({
		url: '/getAuthList',
		method: 'GET'

		// {}, '/getAuthList', {}'
	});
};
