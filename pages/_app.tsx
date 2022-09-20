import React from 'react'
import './CSS/styles.css'
const MyApp = ({ Component, pageProps }:any) => {
  return (
    <Component {...pageProps} />
  )
}

export default MyApp