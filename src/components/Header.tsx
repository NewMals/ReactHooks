import React, {useState, useContext} from "react";
import { ThemeContext } from "../context/Theme/ThemeContext";

const Header = () => {
    
    const[darkMode, setDarkMode] = useState<boolean>(false);
    const {color, changeColor} = useContext(ThemeContext);

    const handleClick = () => {
        setDarkMode(!darkMode);
        changeColor(darkMode ? "red": "blue");
    }

    return (
        <div>
            <h1 style={{ color : `${color}`}}>ReactHooks</h1>
            <button type="button" onClick={handleClick}>{darkMode ? 'Dark Mode' : 'Light Mode' }</button>
        </div>
    );
}
export default Header;