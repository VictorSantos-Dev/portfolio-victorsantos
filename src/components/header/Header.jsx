import React from 'react'
import './header.css'
import CTA from './CTA'
import VICTOR from '../../assets/VICTOR.jpg'
import HeaderSocial from './HeaderSocial'

const Header = () => {
  return (
      <header>
        <div className='container header__container'>
          <h5>Olá, eu sou o </h5>
          <h1>Victor Santos</h1>
          <h5 className="text-light">FullStack Developer</h5>
          <CTA/>
          
          <div className="me">
            <img src={VICTOR} className="eu" alt="eu"/>
          </div>

          <HeaderSocial/>
        </div>
      </header>
  )
}

export default Header