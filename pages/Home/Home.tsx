import React from 'react'
import Header from '../Header/Header'
import style from "../CSS/Home/Home.module.css"
import { useTheme } from 'next-themes'
const Home = () => {
  const { theme, setTheme } = useTheme()
  return (
    <div className={style.Home}>
      <Header/>
      <button
          onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
          className="px-4 py-2 text-black bg-black rounded dark:bg-white dark:text-black">
          Dark Toggle
        </button>
    </div>
  )
}

export default Home