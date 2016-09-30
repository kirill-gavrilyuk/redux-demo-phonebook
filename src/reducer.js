import { NAME_FILTER_CHANGED, NUM_FILTER_CHANGED, PHONEBOOK_LOADING_IN_PROGRESS, PHONEBOOK_LOADING_ERROR, PHONEBOOK_LOADED } from "./actions";

const initialState = {
    nameFilter: "",
    numFilter: "",
    phoneBookLoadingError: false,
    phoneBookLoadingInProgress: false,
    phoneBookLoaded: false,
    nameFilterChangedLast: false,
    data: {}
};

function appReducer(state = initialState, action) {
    switch (action.type) {
        case NAME_FILTER_CHANGED:
            return {
                ...state,
                nameFilter: action.nameFilter,
                nameFilterChangedLast: true
            };

        case NUM_FILTER_CHANGED:
            return {
                ...state,
                numFilter: action.numFilter,
                nameFilterChangedLast: false
            };

        case PHONEBOOK_LOADING_IN_PROGRESS:
            return {
                ...state,
                phoneBookLoadingInProgress: true
            };

        case PHONEBOOK_LOADING_ERROR:
            return {
                ...state,
                phoneBookLoadingInProgress: false,
                phoneBookLoadingError: true
            };

        case PHONEBOOK_LOADED:
            return {
                ...state,
                phoneBookLoadingInProgress: false,
                phoneBookLoadingError: false,
                phoneBookLoaded: true,
                phonebook: action.phonebook
            };

        default:
            return state;
    }
}

export default appReducer;
