export const initialState = {
    theme: false
}

export function reducer(state, action) {
    switch(action.type) {
        case 'set_theme': {
            return {
                ...state,
                theme: action.dark
            }
        }
        default:
            return state
    }
}