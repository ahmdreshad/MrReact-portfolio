import { createContext, useContext, useReducer, useEffect } from 'react'
import themeReducer from './themeReducer'

export const ThemeContext = createContext()

const initialThemeState = JSON.parse(localStorage.getItem('themeSettings')) || { primary: 'color-1', background: 'bg-1' }

// useReducer is also like useState but for more complex states
// takes 2 arguments reducer and initial state
export const ThemeProvider = ({ children }) => {
  const [themeState, dispatchTheme] = useReducer(
    themeReducer,
    initialThemeState
  )

  // using useEffect we store changes in local storage
    
    useEffect(() => {
        localStorage.setItem('themeSettings', JSON.stringify(themeState))
    },)

  const themeHandler = (buttonClassName) => {
    dispatchTheme({ type: buttonClassName })
  }

  return (
    <ThemeContext.Provider value={{ themeState, themeHandler }}>
      {children}
    </ThemeContext.Provider>
  )
}

// custom hook
export const useThemeContext = () => {
  return useContext(ThemeContext)
}
