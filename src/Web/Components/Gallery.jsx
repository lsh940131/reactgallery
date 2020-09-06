import React, { useState, useEffect, useContext } from 'react';
import RootContext from '../Context/RootContext';

// Gallery
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import UploadButton from './UploadButton';

// Gallery 클릭 popup event
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import { Container } from '@material-ui/core';

import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

function Copyright() {
	return (
		<Typography variant="body2" color="textSecondary" align="center">
			{'Copyright © '}
			<Link color="inherit" href="https://github.com/lsh940131?tab=repositories">
				Sangheon Lee
			</Link>{' '}
			{new Date().getFullYear()}
			{'.'}
		</Typography>
	);
}

function SimpleDialog(props) {
  const { onClose, open, contents } = props;

  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby="simple-dialog-title"
      open={open}
	  maxWidth="md"
	  fullWidth="true"
    >
      <DialogTitle id="simple-dialog-title">Information</DialogTitle>
      <List>
		<ListItem>
			<Container maxWidth="md">
				<img src={contents.img} style={{ width: '100%', height: '100%' }}/>
			</Container>
		</ListItem>
		
		<ListItem>
			<ListItemText> Title: {contents.title} </ListItemText>
		</ListItem>
		
		<ListItem>
			<ListItemText> Author: {contents.author} </ListItemText>
		</ListItem>
		
        <ListItem>
          <ListItemText> Size: {contents.size ? Math.round(contents.size/10000)/100 : undefined}MB </ListItemText>
        </ListItem>
		
		<ListItem>
			<ListItemText> LastModified: {contents.lastModified} </ListItemText>
		</ListItem>
      </List>
    </Dialog>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: '70%',
    height: 650,
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
}));

export default function Gallery() {
	const classes = useStyles();
	const { getImagesInfo, getImage } = useContext(RootContext);
	const [open, setOpen] = useState(false);
	const [popupContents, setPopupContents] = useState({img: undefined, size: undefined, lastModified: undefined, title: undefined, author: undefined});

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
	
	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = (value) => {
		setOpen(false);
	};

	return (
		<>
			<div className={classes.root}>
				<UploadButton />
			  
				<GridList cellHeight={180} className={classes.gridList} cols={3} spacing={10}>		
					{galleryData.map((tile) => (
						<GridListTile key={`${tile.title}_${tile.auth}`} onClick={() => {
							handleClickOpen();
							setPopupContents(tile);}}>
							<img src={tile.img} alt={tile.title} />
							<GridListTileBar
							title={tile.title}
							subtitle={<span>by: {tile.author}</span>}
							actionIcon={
								<IconButton aria-label={`info about ${tile.title}`} className={classes.icon}>
									<InfoIcon />
								</IconButton>
							}/>
						</GridListTile>
					))}
				</GridList>
			  
				<SimpleDialog open={open} onClose={handleClose} contents={popupContents}/>
			</div>
			
			<Box mt={8}>
				<Copyright />
			</Box>
		</>
	);
}
