import { Action } from '@ngrx/store';

export const ADD_BOOKMARK = 'ADD_BOOKMARK';
export const REMOVE_BOOKMARK = 'REMOVE_BOOKMARK';

export const addBookmark = (uid): Action => ({
    type: ADD_BOOKMARK,
    payload: {
        uid,
        timestamp: new Date().getTime()
    }
})

export const removeBookmark = (uid): Action => ({
    type: REMOVE_BOOKMARK,
    payload: {
        uid
    }
})
