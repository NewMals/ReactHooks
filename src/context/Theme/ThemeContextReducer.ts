import { ThemeState } from "./ThemeContext";
import { ADD_TO_FAVORITE, CHANGE_COLOR, ThemeContextAction } from "./ThemeContextAction";

export const favoriteReducer = (state: ThemeState, action: ThemeContextAction) =>{
    let newState: ThemeState = {...state};
    
    switch (action.type){
        case CHANGE_COLOR:
            newState = {
                ...newState,
                color: action.payload
            }
            break;

        case ADD_TO_FAVORITE:
            newState = {
                ...newState,
                favorites: [...newState.favorites, action.payload]
            }
            break;        
        default:
            break;
    }
    return newState;
}



