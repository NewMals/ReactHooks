
export const CHANGE_COLOR = "CHANGE_COLOR";
export const ADD_TO_FAVORITE = "ADD_TO_FAVORITE";


export interface AddColor {
    type: typeof CHANGE_COLOR;
    payload: string;
}

export interface AddFavorite {
    type: typeof ADD_TO_FAVORITE;
    payload: any[];
}

export type ThemeContextAction =
| AddColor
| AddFavorite
