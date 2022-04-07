import React, {useState} from 'react'
import { FaRegMoon, FaRegSun } from "react-icons/fa"
import "./index.scss"

const ThemeToggle = () => {
    const icon_size = 30;
    // icon size
    const [icon, setIcon] = useState('FaRegSun');
    // defining 2 stuff
    const changeTheme = () => {
        const item = localStorage.getItem("theme");
        // tries to get the localStorage of theme
        const item2 = localStorage.getItem("iconName");
        // tries to get the localStorage of iconName
        let theme;
        // defines theme
        let iconName;
        // defines iconName
        if (item === "dark" && item2 === "FaRegSun") {
            theme = "";
            // the theme (css selector) for light is empty (i.e. light more in css)
            iconName = "FaRegMoon";
            // icon that should be used in light time
            localStorage.setItem('theme', theme);
            // sets item in localstorage
            localStorage.setItem('iconName', iconName);
            // sets item in localstorage
        } else {
            theme = "dark";
            // the theme (css selector) for dark is dark
            iconName = "FaRegSun";
            // icon that should be used in dark time
            localStorage.setItem('theme', theme);
            // sets item in localstorage
            localStorage.setItem('iconName', iconName);
            // sets item in localstorage
        }
        localStorage.setItem('theme', theme);
        // sets item in localstorage
        localStorage.setItem('iconName', iconName);
        // sets item in localstorage
        document.body.className = localStorage.getItem("theme");
        // sets the css selector for the body
        setIcon(localStorage.getItem("iconName"));
        // sets the icon
    }
    const themeIsDark = (localStorage.getItem("iconName") === 'FaRegSun');
    // checks if the icon is sun
    const Icon = themeIsDark ? <FaRegSun size={icon_size} onClick={() => changeTheme() }/> : <FaRegMoon size={icon_size} onClick={() => changeTheme() }/>;
    // if the icon is sun, then the icon is moon, otherwise the icon is sun
    return (
        <div className="icon">
            {Icon}
        </div>
    );
}

export default ThemeToggle;
