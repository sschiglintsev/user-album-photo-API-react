import React from 'react';
import style from "./MyPhoto.module.css"
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";

export const MyPhoto = (props) => {

    return (
        <div className={style.photoContainer}>
            <Box
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    '& > :not(style)': {
                        m: 1,
                        width: 100,

                    },
                }}
            >
                <Paper elevation={3}>
                    <div className={style.image}>
                        <img src={props.thumbnailUrl}/>
                    </div>
                    <div className={style.title}>
                        {props.title}
                    </div>
                </Paper>
            </Box>

        </div>
    )
}