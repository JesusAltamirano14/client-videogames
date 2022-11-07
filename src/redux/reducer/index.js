import { TYPES } from "../actions";

const initialState = {
  allVideoGames: [],
  copyAllVideoGames: [],
  oneVideoGame: {},
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case TYPES.GET_ALL_VIDEO_GAMES:
      return {
        ...state,
        allVideoGames: action.payload,
        copyAllVideoGames: action.payload,
      };
    case TYPES.GET_SEARCH_VIDEO_GAMES:
      return {
        ...state,
        allVideoGames: action.payload,
        copyAllVideoGames:action.payload,
      };
    case TYPES.DETAIL_ONE_VIDEO_GAME:
      return {
        ...state,
        oneVideoGame: action.payload,
      };
    case TYPES.SORT_NAME_VIDEO_GAMES:
      let sortGames = [];
      if (action.payload === "az") {
        sortGames = state.allVideoGames.sort(function (a, b) {
          if (a.name > b.name) {
            return 1;
          } else {
            return -1;
          }
        });
      } else {
        sortGames = state.allVideoGames.sort(function (a, b) {
          if (a.name > b.name) {
            return -1;
          } else {
            return 1;
          }
        });
      }
      return {
        ...state,
        allVideoGames: sortGames,
      };
    case TYPES.SORT_RATING_VIDEO_GAMES:
      let sortNameGames = [];
      if (action.payload === "lower") {
        sortNameGames = state.allVideoGames.sort(function (a, b) {
          if (a.rating > b.rating) {
            return 1;
          } else {
            return -1;
          }
        });
      } else {
        sortNameGames = state.allVideoGames.sort(function (a, b) {
          if (a.rating > b.rating) {
            return -1;
          } else {
            return 1;
          }
        });
      }
      return {
        ...state,
        allVideoGames: sortNameGames,
      };
    case TYPES.FILTER_GENRE_VIDEO_GAMES:
      if (action.payload !== "All") {
        state.allVideoGames = state.copyAllVideoGames;
        const filterGames = state.allVideoGames.filter((a) =>
          a.genres.map((data) => data.name).includes(action.payload)
        );
        return {
          ...state,
          allVideoGames: filterGames,
        };
      } else {
        return {
          ...state,
          allVideoGames: [...state.copyAllVideoGames],
        };
      }
    case TYPES.DELETE_FILTER_VIDEO_GAMES:
      return({
        ...state,
        allVideoGames:[...state.copyAllVideoGames],
      });
    case TYPES.GET_DATABASE_GAMES:
      return({
        ...state,
        allVideoGames:action.payload,
      });
    case TYPES.ONE_DETAIL_DATA_GAME:
      return({
        ...state,
        oneVideoGame:action.payload,
      })

    default:
      return state;
  }
}
