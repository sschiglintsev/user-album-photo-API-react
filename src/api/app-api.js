import {instance} from "./axiosConf"

export const AppApi = {
    getPhotos(page, limitedCount) {
        return instance.get('photos'+ '?_page='+page + '&_limit='+ limitedCount);
    },
    getMyPhotos(albumId) {
        return instance.get('photos'+ '?albumId='+ albumId);
    },
    getAlbum(albumId) {
        return instance.get('albums/'+ albumId);
    },
    getAlbums(userId) {
        return instance.get('albums'+ '?userId=' + userId);
    },
    getUser(userId) {
        return instance.get('users/'+userId);
    },

}