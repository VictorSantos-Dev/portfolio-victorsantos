import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id="services">
      <h5>Serviços</h5>
      <h2>Tenho a oferecer</h2>
      <div className="container services__container">
        <article className='service'>
          <div className="service__head">
            <h3>UX | UI DESIGN</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='sevice__list-icon'/>
              <p>Combinação de cores</p>
            </li>

            <li>
              <BiCheck className='sevice__list-icon'/>
              <p>Interface e Design</p>
            </li>

            <li>
              <BiCheck className='sevice__list-icon'/>
              <p>Usabilidade</p>
            </li>

            <li>
              <BiCheck className='sevice__list-icon'/>
              <p>Experiência do usuário</p>
            </li>

            <li>
              <BiCheck className='sevice__list-icon'/>
              <p>Interação humano computador</p>
            </li>

            <li>
              <BiCheck className='sevice__list-icon'/>
              <p>Facilidade de busca</p>
            </li>

            <li>
              <BiCheck className='sevice__list-icon'/>
              <p>Design agradavél e harmonioso</p>
            </li>

          </ul>
        </article>

        <article className='service'>
          <div className="service__head">
            <h3>Habilidades</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='sevice__list-icon'/>
              <p>Criação de conteúdo</p>
            </li>

            <li>
              <BiCheck className='sevice__list-icon'/>
              <p>Sites responsivos</p>
            </li>

            <li>
              <BiCheck className='sevice__list-icon'/>
              <p>Metodologia Scrum</p>
            </li>

            <li>
              <BiCheck className='sevice__list-icon'/>
              <p>Team work</p>
            </li>

            <li>
              <BiCheck className='sevice__list-icon'/>
              <p>Visão sistêmica</p>
            </li>

            <li>
              <BiCheck className='sevice__list-icon'/>
              <p>Produtividade</p>
            </li>

          </ul>
        </article>

        <article className='service'>
          <div className="service__head">
            <h3>Desenvolvimento</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='sevice__list-icon'/>
              <p>Lógica de programação</p>
            </li>

            <li>
              <BiCheck className='sevice__list-icon'/>
              <p>Capacidade análitica</p>
            </li>

            <li>
              <BiCheck className='sevice__list-icon'/>
              <p>Boa comunicação</p>
            </li>

            <li>
              <BiCheck className='sevice__list-icon'/>
              <p>Gerenciamento do tempo</p>
            </li>

            <li>
              <BiCheck className='sevice__list-icon'/>
              <p>Criatividade</p>
            </li>

            <li>
              <BiCheck className='sevice__list-icon'/>
              <p>Proatividade</p>
            </li>

            <li>
              <BiCheck className='sevice__list-icon'/>
              <p>Desenvolvimento Fullstack</p>
            </li>

          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services