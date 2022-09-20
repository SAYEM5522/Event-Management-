import Image from 'next/image'
import React from 'react'
import style from "../CSS/Header/Header.module.css"
import P_Logo from '../public/P_Logo.jpg'
const Header = () => {
  return (
    <div className={style.Header}>
      <div className={style.Header__Left}>
      <Image
        src={P_Logo}
        alt="P"
        width={120}
        height={120}
        objectFit='cover'
        className='avatar'
       />
      </div>
      <div className={style.Header__Right}>
      <p>world</p>
      </div>
    </div>
  )
}

export default Header