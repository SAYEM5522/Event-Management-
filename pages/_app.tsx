import React from 'react'
import { ThemeProvider } from 'next-themes'
import './CSS/styles.css'
const MyApp = ({ Component, pageProps }:any) => {
  return (
    <ThemeProvider attribute='class'>
    <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp