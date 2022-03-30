import React, {useState, useEffect, useContext} from "react";
import { ThemeContext } from "../context/Theme/ThemeContext";




const Characters = () => {
    
    const[characters, setCharacters] = useState<Array<any>>([]);
    const {favorites, addFavorite}  = useContext(ThemeContext);


    useEffect(() => {
        fetch('https://rickandmortyapi.com/api/character/')
        .then(response => response.json())
        .then(data => setCharacters(data.results))
    }, []);

    return (
        <div>
            {favorites.map((favorite: any) => (
                <li key={favorite.id}>
                    {favorite.name}
                </li>
            ))}
            {characters.map(character => (
                <div key={character.id}>
                    <h2>{character.name}</h2>
                    <button type="button" onClick={() => addFavorite(character)}> Agregar favoritos</button>
                </div>
            ))}
        </div>
    );
}
export default Characters;