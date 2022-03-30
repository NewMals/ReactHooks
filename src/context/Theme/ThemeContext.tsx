import React, { FunctionComponent, useReducer } from "react";
import { CHANGE_COLOR, ADD_TO_FAVORITE } from "./ThemeContextAction";
import { favoriteReducer } from "./ThemeContextReducer";

export interface ThemeState {
    color: string,
    favorites: any[]
    changeColor: (color: string) => void,
    addFavorite: (favorite: any[]) => void
}


const initialState : ThemeState = {
    color: 'blue',
    favorites: [],
    changeColor: () => {},
    addFavorite: () => {}
}

export const ThemeContext = React.createContext(initialState);

export const ThemeStore: FunctionComponent = ({children}) => {
    const [state,  dispatch] = useReducer(favoriteReducer, initialState);

    const changeColor = (color: string) => {
        dispatch({
            type: CHANGE_COLOR,
            payload: color
        })
    }

    const addFavorite = (favorite: any[]) => {
        dispatch({
            type: ADD_TO_FAVORITE,
            payload: favorite
        })
    }

    return (
        <ThemeContext.Provider 
            value={{...state,
                changeColor,
                addFavorite
            }}
        >
            {children}
        </ThemeContext.Provider>
    );
    
}

export default ThemeStore;