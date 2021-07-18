import {UserType} from "../HW8";


type ActionsType = { type: 'sort', payload: 'up' }
    | { type: 'sort', payload: 'down' }
    | { type: 'check', payload: 18 }

export const homeWorkReducer = (state: UserType[], action: ActionsType): UserType[] => {
    switch (action.type) {
        case 'sort': {
            if (action.payload === 'up') {
                return [...state.sort((a, b) => a.age - b.age)]
            }
            return [...state.sort((a, b) => b.age - a.age)]
        }
        case 'check': {
            return state.filter(el => el.age >= action.payload)
        }
        default:
            return state
    }
}

