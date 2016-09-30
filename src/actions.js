export const NAME_FILTER_CHANGED = "NAME_FILTER_CHANGED";
export const NUM_FILTER_CHANGED = "NUM_FILTER_CHANGED";
export const PHONEBOOK_LOADING_IN_PROGRESS = "PHONEBOOK_LOADING_IN_PROGRESS";
export const PHONEBOOK_LOADING_ERROR = "PHONEBOOK_LOADING_ERROR";
export const PHONEBOOK_LOADED = "PHONEBOOK_LOADED";


export const changeNameFilter = newNameFilter => ({
    type: NAME_FILTER_CHANGED,
    nameFilter: newNameFilter
});

export const changeNumFilter = newNumFilter => ({
    type: NUM_FILTER_CHANGED,
    numFilter: newNumFilter
});

export const phonebookLoaded = phonebook => ({
    type: PHONEBOOK_LOADED,
    phonebook: phonebook
});

export const phonebookLoadingError = () => ({
    type: PHONEBOOK_LOADING_ERROR
});


export const phonebookLoadingInProgress = () => ({
    type: PHONEBOOK_LOADING_IN_PROGRESS
});


