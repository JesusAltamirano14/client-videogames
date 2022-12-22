export const apiUrl = 'https://server-videogames-production.up.railway.app'


export const TYPES = {
    GET_ALL_VIDEO_GAMES:'GET_ALL_VIDEO_GAMES',
    GET_SEARCH_VIDEO_GAMES:'GET_SEARCH_VIDEOGAMES',
    DETAIL_ONE_VIDEO_GAME:'DETAIL_ONE_VIDEO_GAME',
    SORT_NAME_VIDEO_GAMES:'SORT_NAME_VIDEO_GAMES',
    SORT_RATING_VIDEO_GAMES:'SORT_RATING_VIDEO_GAMES',
    FILTER_GENRE_VIDEO_GAMES:'FILTER_GENRE_VIDEO_GAMES',
    DELETE_FILTER_VIDEO_GAMES:'DELETE_FILTER_VIDEO_GAMES',
    GET_DATABASE_GAMES:'GET_DATABASE_GAMES',
    ONE_DETAIL_DATA_GAME:'ONE_DETAIL_DATA_GAME',
}

export function getAllVideoGames (payload){
    return {
        type:TYPES.GET_ALL_VIDEO_GAMES,
        payload,
    }
}

export const getSearchGames = (payload) => ({
    type:TYPES.GET_SEARCH_VIDEO_GAMES,
    payload,
});

export const detailOneGame = (payload) => ({
    type:TYPES.DETAIL_ONE_VIDEO_GAME,
    payload,
})

export const getDataGames = (payload) => ({
    type:TYPES.GET_DATABASE_GAMES,
    payload,
})

export const getOneDetailDataGame = (payload) => ({
    type:TYPES.DETAIL_ONE_VIDEO_GAME,
    payload,
})

export function fetchGetAllGames () {
    return function (dispatch) {
        fetch(`${apiUrl}/api/games`)
        .then(data => data.json())
        .then(info => {dispatch(getAllVideoGames(info))})
        .catch(error=>{console.log(error)});
    }
}

export function fetchSearchGames(name){
    return function(dispatch){
        fetch(`${apiUrl}/api/games/${name}`)
        .then(data => data.json())
        .then(info => {dispatch(getSearchGames(info))})
        .catch(e=>{console.log(e)});
    }
}

export const fetchDetailOneGame = (id) => (
    function (dispatch){
        fetch(`${apiUrl}/api/detail/${id}`)
        .then(data=>data.json())
        .then(info=>{dispatch(detailOneGame(info))})
        .catch(e=>{console.log(e)});
    }
)

export function fetchDataGames (){
    return function(dispatch){
        fetch(`${apiUrl}/db/games`)
        .then(data=>data.json())
        .then(info => {dispatch(getDataGames(info))})
        .catch(e=>{console.log(e)});
    }
}

export function fetchDetailOneDataGame(id){
    return function (dispatch){
        fetch(`${apiUrl}/db/detail/${id}`)
        .then(data=>data.json())
        .then(info=>{dispatch(getOneDetailDataGame(info))})
        .catch(e=>{console.log(e)});
    }
}

export const sortNameGame = (value) => ({
    type:TYPES.SORT_NAME_VIDEO_GAMES,
    payload:value,
})

export const sortRatingGame = (value) => ({
    type:TYPES.SORT_RATING_VIDEO_GAMES,
    payload:value,
})

export const filterGenreGames = (value) => ({
    type:TYPES.FILTER_GENRE_VIDEO_GAMES,
    payload:value,
})

export const deleteFiltersGames =  () => ({
    type:TYPES.DELETE_FILTER_VIDEO_GAMES
})