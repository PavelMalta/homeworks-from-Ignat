type action = {type: 'sort', payload: 'up'} | {type: 'sort', payload: 'down'} | {type: 'check', payload: 18}

export const homeWorkReducer = (state: any, action: any): any => { // need to fix any
    switch (action.type) {
        case 'sort': {
            let newState = [...state]
            if (action.payload === 'up') {
                return newState.sort((x: any,y: any): any => {
                    let xname = x.name.toLowerCase();
                    let yname = y.name.toLowerCase();
                    if(xname < yname) return -1;
                    if(xname > yname) return 1;
                })
            }
            if (action.payload === 'down') {
                return newState.sort((x: any,y: any): any => {
                    let xname = x.name.toLowerCase();
                    let yname = y.name.toLowerCase();
                    if(xname < yname) return 1;
                    if(xname > yname) return -1;
                })
            }
            // need to fix
        }
        case 'check': {
            let newState = [...state]
            return newState.filter(person => person.age >= action.payload)
            // need to fix

        }
        default: return state
    }
}