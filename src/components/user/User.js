import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {setProfile} from "../../redux/appReducer";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import {useParams} from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";
import {MyAlbums} from "./albums/MyAlbums";
import style from "./User.module.css"

export const User = (props) => {
    const dispatch = useDispatch()
    const user = useSelector(state => state.photos.user)
    const albums = useSelector(state => state.photos.albums)
    const isLoading = useSelector(state => state.photos.isLoading)

    const {albumId} = useParams();

    useEffect(() => {
        dispatch(setProfile(albumId))
    }, [])

    const albumsView = albums.map(el => {
        return (
            <MyAlbums key={el.id} title={el.title} id={el.id}/>
        )
    })

    return (
        <>
            {isLoading
                ? <CircularProgress/>
                : <div>
                    <div>
                        <Box
                            sx={{
                                display: 'flex',
                                flexWrap: 'wrap',
                                '& > :not(style)': {
                                    m: 1,

                                },
                            }}
                        >
                            <div className={style.userContainer}>
                                <Paper elevation={3}
                                       sx={{
                                           display: 'flex',
                                           flexDirection: 'column',
                                           width: 300,
                                           height: 350,
                                       }}
                                >
                                    <div>
                                        <h2>Profile</h2>
                                    </div>
                                    <div>
                                        <h3>Name: {user.name}</h3>
                                    </div>
                                    <div>
                                        <h3>Phone: {user.phone}</h3>
                                    </div>
                                    <div>
                                        <h3>UserName: {user.username}</h3>
                                    </div>
                                    <div>
                                        <h3>WebSite: {user.website}</h3>
                                    </div>
                                </Paper>
                            </div>
                            <Paper elevation={3}>
                                <div className={style.myAlbumContainer}>
                                    {albumsView}
                                </div>
                            </Paper>


                        </Box>
                    </div>
                </div>
            }
        </>
    )
        ;
};
