import axios from 'axios';

const prefix = localStorage.getItem('keyPrefix');
const user = localStorage.getItem('userName');
const idToken = localStorage.getItem(`${prefix}.${user}.idToken`);
const apiId = 'your_api_id';

const header = {
	'Authorization': `Bearer ${idToken}`,
	'Content-Type': `application/json`,
};
const Http = axios.create({
	baseURL: `https://${apiId}.execute-api.ap-northeast-2.amazonaws.com/latest`,
	headers: header,
});

export default Http;