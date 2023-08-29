import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'

const HeaderSocial = () => {
  return (
    <div className='header__social'>
        <a href='https://www.linkedin.com/in/victorsantos-dev/' target="_blank" rel="noreferrer"><BsLinkedin/></a>
        <a href='https://github.com/VictorSantos-Dev' target="_blank" rel="noreferrer"><FaGithub/></a>
    </div>
  )
}

export default HeaderSocial