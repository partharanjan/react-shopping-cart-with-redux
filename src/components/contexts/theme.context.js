import { createContext } from "react"

export const themes={
    light:{
        foreground:'#000',
        background:'#eee',
    },
    dark:{
        foreground:'#fff',
        background:'#000',
    }
}

export const ThemeContext=createContext(themes.light);