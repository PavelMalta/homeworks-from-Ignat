import {UserType} from "../HW8";

type ActionType = { type: 'sort', payload: 'up' } | { type: 'sort', payload: 'down' } | { type: 'check', payload: 18 }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': {
            const newState = [...state].sort((a, b) => {
                if (a.name > b.name) return 1
                else if (a.name < b.name) return -1
                else return 0
            })

            return action.payload === 'up' ? newState : newState.reverse()
            /* let newState = [...state]
             if (action.payload === 'up') {
                 return newState.sort((x: UserType, y: UserType): any => {
                     let xname = x.name.toLowerCase();
                     let yname = y.name.toLowerCase();
                     if(xname < yname) return -1;
                     if(xname > yname) return 1;
                 })
             }
             if (action.payload === 'down') {
                 return newState.sort((x: UserType, y: UserType): any => {
                     let xname = x.name.toLowerCase();
                     let yname = y.name.toLowerCase();
                     if(xname < yname) return 1;
                     if(xname > yname) return -1;
                 })
             }*/
        }
        case 'check': {
            let newState = [...state]
            return newState.filter(person => person.age >= action.payload)
            // need to fix

        }
        default:
            return state
    }
}