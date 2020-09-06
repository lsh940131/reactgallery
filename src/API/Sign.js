import Http from '../Common/Utils/Http';

/**
 * 사용자 등록
 * @param {String} username (means ID)
 * @param {String} password
 * @param {String} name
 * @param {String} email (only naver)
 */
export const signUp = (params) => {
	return Http.post(`/user`, params);
};

/**
 * 사용자 Sign In & Out 기록
 * @param {String} action (In or Out)
 */
export const saveSignAction = (params) => {
	console.log(Http.headers);
	return Http.post(`/userSignAction`, params);
};

/**
 * 사용자 Sign 기록 조회
 * 관리자 권한 사용자가 사용자, 기간 별로 조회하도록 해야하나, 임시 페이지므로 권한 확인 없이 모든 사용자의 모든 기간의 기록을 가져옴
 */
export const getAllUsersSignHistory = () => {
	return Http.get(`/usersSign`);
};