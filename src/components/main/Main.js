import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {setPhotosTC} from "../../redux/appReducer";
import {Photo} from "./photo/Photo";
import style from "./Main.module.css"
import CircularProgress from "@mui/material/CircularProgress/CircularProgress";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

export const Main = () => {

    const dispatch = useDispatch()
    const photos = useSelector(state => state.photos.photos)
    const limitedCount = useSelector(state => state.photos.limited)
    const isLoading = useSelector(state => state.photos.isLoading)

    const [page, setPage] = React.useState(1);
    const handleChange = (event, value) => {
        setPage(value);
    };

    useEffect(() => {
        dispatch(setPhotosTC(page, limitedCount))
    }, [page])

    return (
        <>
            <div className={style.pagination}>
                <Stack spacing={2}>
                    <Pagination count={250} page={page} onChange={handleChange} />
                </Stack>
            </div>
            {isLoading
                ? <CircularProgress/>
                : <div className={style.photosContainer}>
                    {photos.map(el => <Photo title={el.title} albumId={el.albumId} thumbnailUrl={el.thumbnailUrl}
                                             key={el.id}/>)}
                </div>
            }

        </>
    )
}

