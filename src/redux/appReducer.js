import {AppApi} from "../api/app-api";

const initialState = {
    photos: [],
    albums: [],
    user: {
        name: '',
        phone: '',
        username: '',
        website: ''
    },
    page: 1,
    limited: 20,
    totalPage: 0,
    userId: '',
    albumId: '',
    isLoading: false

}

export const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET-PHOTOS':
            const countPage = action.payload.data.length + 1
            return {...state, photos: action.payload.data, totalPage: countPage / state.limited}
        case 'CLEAR-PHOTOS':
            return {...state, photos: []}
        case 'SET-ALBUMS':
            return {...state, albums: action.payload.data}
        case 'SET-USER':
            return {...state, user: action.payload.data}
        case 'SET-ISLOADING':
            return {...state, isLoading: action.payload.value}
        default:
            return state
    }
}

export const setIsLoading = (value) => ({
    type: 'SET-ISLOADING',
    payload: {
        value
    }
})

export const setPhotos = (data) => ({
    type: 'SET-PHOTOS',
    payload: {
        data
    }
})

export const clearPhotos = () => ({
    type: 'CLEAR-PHOTOS',
})

export const setAlbums = (data) => ({
    type: 'SET-ALBUMS',
    payload: {
        data
    }
})

export const setUser = (data) => ({
    type: 'SET-USER',
    payload: {
        data
    }
})

export const setPhotosTC = (page, limitedCount) => (dispatch) => {
    dispatch(setIsLoading(true))
    AppApi.getPhotos(page, limitedCount)
        .then(response => {
            dispatch(setPhotos(response.data))

        })
        .catch()
        .finally(
            dispatch(setIsLoading(false))
        )

}

export const setMyPhotosTC = (albumId) => async (dispatch) => {
    dispatch(setIsLoading(true))
    dispatch(clearPhotos())
    AppApi.getMyPhotos(albumId)
        .then(response => {
            dispatch(setPhotos(response.data))
        })
        .catch(error=>{
            console.log(error.message)
        })
        .finally(
            dispatch(setIsLoading(false))
        )

}

export const setProfile = (albumId) => async (dispatch) => {
    dispatch(setIsLoading(true))
    try {
        const response = await AppApi.getAlbum(albumId)
        const userId = response.data.userId

        const responseUser = await AppApi.getUser(userId)
        dispatch(setUser(responseUser.data))

        const responseAlbums = await AppApi.getAlbums(userId)
        dispatch(setAlbums(responseAlbums.data))

    } catch (error) {
        console.log(error.message)
    } finally {
        dispatch(setIsLoading(false))
    }
}

