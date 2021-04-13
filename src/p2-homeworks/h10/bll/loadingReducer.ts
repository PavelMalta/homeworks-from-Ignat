const initState = {
    loading: false
}
type initStateType = typeof initState

export const loadingReducer = (state: initStateType = initState, action: ActionType): initStateType => { // fix any
    switch (action.type) {
        case 'LOADING': {
            return {...state, loading: action.loading}
        }
        default: return state
    }
}

export const loadingAC = (loading: boolean) => ({type: 'LOADING', loading} as const)

type ActionType = ReturnType<typeof loadingAC>