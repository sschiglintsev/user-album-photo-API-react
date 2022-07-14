import React from 'react';
import {useNavigate} from "react-router";
import style from "./Photo.module.css"
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";

export const Photo = (props) => {
    const navigate = useNavigate()

    const onClickHandler = (albumId) => {
        navigate(`user/`+albumId);
    }

    return (
        <div className={style.photoContainer}>
            <Box
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    '& > :not(style)': {
                        m: 1,
                        width: 150,

                    },
                }}
            >
                <Paper elevation={3}>
                    <div>
                        <img src={props.thumbnailUrl}/>
                    </div>
                    <div className={style.title}>
                        {props.title}
                    </div>
                    <div className={style.button}>
                        <Button onClick={()=>onClickHandler(props.albumId)} variant="outlined">Album: {props.albumId}</Button>
                    </div>
                </Paper>
            </Box>

        </div>
    )
}