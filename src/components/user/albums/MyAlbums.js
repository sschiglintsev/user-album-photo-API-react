import React from 'react';
import style_ from "./MyAlbums.module.css";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import {useDispatch, useSelector} from "react-redux";
import {MyPhoto} from "./myPhoto/MyPhoto";
import {setMyPhotosTC} from "../../../redux/appReducer";

const style = {
    position: 'absolute',
     top: '50%',
     left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 950,
    overflow:'scroll',
    height:'100%',
    display:'block',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export const MyAlbums = (props) => {
    const albumPhotos = useSelector(state => state.photos.photos)
    const dispatch = useDispatch()

    const [open, setOpen] = React.useState(false);
    const handleOpen = (id) => {
        dispatch(setMyPhotosTC(id))
        setOpen(true);
    }
    const handleClose = () => setOpen(false);

    const albumPhotosView = albumPhotos.map(el => {
        return (
            <MyPhoto title={el.title} thumbnailUrl={el.thumbnailUrl}
                     key={el.id}/>
        )
    })
    return (
        <>
            <Paper elevation={3}
                   sx={{
                       width: 180,
                       height: 180,
                   }}
            >
                <div className={style_.title}>
                    {props.title}
                </div>
                <Button onClick={() => handleOpen(props.id)}>Album: {props.id}</Button>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        Album: {props.id}
                        <div className={style_.photosContainer}>
                            {albumPhotosView}
                        </div>
                    </Box>
                </Modal>
            </Paper>
        </>
    );
};
