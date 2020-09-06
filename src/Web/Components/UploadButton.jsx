import React, { useContext, useCallback } from 'react';
import RootContext from '../Context/RootContext';

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  size: {
    width: '70%',
    height: 50,
  },
  style: { width: '200px', textAlign: 'center', fontWeight: 'bold', fontSize: '15' },
  input: {
    display: 'none',
  },
}));

export default function UploadButton() {
	const { uploadImage } = useContext(RootContext);
	const classes = useStyles();
	
	// 중복으로 인한 upload 실패 시, 사용자 응답을 받아 덮어씌우는 시나리오 구현 예정
	const handleUpload = useCallback((e) => {
		let file = e.target.files[0];
		let reader = new FileReader();

		reader.onloadend = (function (f) {
			return async function (e) {
				var response = await uploadImage({
					force: 'no',
					imageName: file.name,
					imageContent: String(reader.result).split(',')[1],
				});
				if(response.data.statusCode === 200){
					alert('업로드 성공');
				}
				else {
					alert(`업로드 실패 detail: ${response.data.message}`);
					/*
					if(response.data.statusCode === 409){
						// 사용자에게 yes, no를 묻는 창 띄우고, yes라면.
						if(userResponse === 'yes'){
							var response = await uploadImage({
								force: 'yes',
								imageName: file.name,
								imageContent: String(reader.result).split(',')[1],
							});
							if(response.data.statusCode === 200){
								alert('업로드 성공');
							}
						}
					}
					*/
				}
			};
		})(file);
		reader.readAsDataURL(e.target.files[0]);
	}, []);
	
  return (
    <div className={classes.size} align='right'>
		<input
			accept="image/*"
			className={classes.input}
			id="contained-button-file"
			multiple
			type="file"
			onChange={e => {
				handleUpload(e);
			}}
		/>
		<label htmlFor="contained-button-file">
			<Button color="primary" component="span" style={{fontWeight: 'bold', fontSize: 20}}> UPLOAD </Button>
		</label>
    </div>
  );
}
