# React Gallery Web 

1. JWT sign system
2. Sign in, up, out
3. Sign history
4. Image upload
5. Image gallery
6. Image click event

## Gallery Project Structure Flow
![gallery_project_structure_flow](https://user-images.githubusercontent.com/34882947/92339827-fae0a680-f0f2-11ea-90d4-33d8ac8aedf6.PNG)

## Gallery Web Structure Flow
![gallery_react_web_structure_flow](https://user-images.githubusercontent.com/34882947/92339890-485d1380-f0f3-11ea-81d0-d6ae934ee6fe.PNG)

### Demo http://shpublicweb.s3-website.ap-northeast-2.amazonaws.com/
### you must read the following statement!
#### when you sign up,  
- Fill in the password must have At least 8 characters, uppercase and lowercase letters in English, numbers, and Special Characters.  
- Fill in the email address must have the NAVER domain. <example@naver.com>  
- If you successfully sign up, then the confirmation URL should have been sent.
- You won't be able to sign in, unless you click the confirmation URL.

#### when you upload image,
- You can upload only one file at once.

#### To do more detail
- Sign up page
	- Sign up guide (WEB, about 2 hours)
- Gallery page
	- Upload multiple images (WEB, about 1 hour)
	- Upload fail already exist scenario (WEB, about 1~2 hours)
	- Refresh the gallery when upload images. (I think use useMemo state, only the gallery can refresh.) (WEB, about maximum 0.7 day)
- Sign history page
	- To look different depending on user permissions (WEB, API, Cognito, about maximum 1 day)
	- Add button for move to back the gallery (WEB, about 10 minutes)