import Http from '../Common/Utils/Http';

/**
 * 이미지 업로드
 * @param {String || Boolean} force (if already exist - yes: overwrite. no: notify)
 * @param {String} imageName
 * @param {Binary} imageContent (base64 encode)
 */
export const uploadImage = (params) => {
	return Http.post(`/image`, params);
};

/**
 * 모든 사용자가 저장한 모든 이미지 정보 조회
 * @param none
 * @return [{imageName, size, path, uploader, lastModified}]
 */
export const getImagesInfo = () => {
	return Http.get(`/images`);
};

/**
 * 이미지 조회
 * @param path
 */
export const getImage = (path) => {
	return `https://shpublicbucket.s3.ap-northeast-2.amazonaws.com/${path}`
};