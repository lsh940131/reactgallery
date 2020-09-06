import React, { useState, useEffect, useContext } from 'react';
import RootContext from '../../Context/RootContext';
import { withRouter } from 'react-router-dom';

import MenuAppBar from '../../Components/MenuAppBar';
import Gallery from '../../Components/Gallery';
	
const Main = ({ history }) => {
	const { saveSignAction, getImagesInfo, getImage } = useContext(RootContext);
	const [galleryData, setGalleryData] = useState([{img: undefined, title: undefined, author: undefined}]);
	
	// GridListTile이 요구하는 자료 형식에 맞춰 가공
	const parsingImagesInfo = (data) => {
		return data.map(index => {
			return {img: getImage(index.path), size: index.size, lastModified: index.lastModified, title: index.imageName.split('.')[0], author: index.uploader};
		});
	}
	
	useEffect(() => {
		async function fetchImagesInfo(){
			const {data: response} = await getImagesInfo();
			setGalleryData(parsingImagesInfo(response));
		}
		fetchImagesInfo();
	}, []);
	
	return (
		<>
			<MenuAppBar />
			<div style={{marginTop: 10}}/>
			<Gallery tileData={galleryData} />
		</>
	);
}

export default withRouter(Main);