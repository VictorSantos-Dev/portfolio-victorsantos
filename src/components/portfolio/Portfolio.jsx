import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/gigagames.jpg'
import IMG2 from '../../assets/doguinhofeliz.jpg'
import IMG3 from '../../assets/todolist.png'
import {FaGithub} from 'react-icons/fa'


const Portfolio = () => {
    return (
        <section id="portfolio">
            <h5>Portfólio</h5>
            <h2>Alguns projetos</h2>
            <div className="container portfolio__container">
                <article className='portfolio__item'>
                    <div className="portfolio__item-image">
                        <img src={IMG1} height="370px" alt="Giga Games" />
                    </div>
                    <h4>Giga Games</h4>
                    <p className='small_text'>Loja de games para todos os tipos de console: PC, PS4, PS5, Nintendo e etc... (PHP + MySQL).
                        <br></br>
                        Sistema de compras, CRUD, telas de ADM.
                        <br></br>
                        Criado para o TCC (Trabalho de Conlusão de Curso).
                    </p>
                    <div className="portfolio__item-cta">
                        <a href='https://github.com/VictorSantos-Dev/gigagames.mytcc.com.br' className='btn' target="_blank"><FaGithub/></a>
                        <a href='http://www.gigagames.mytcc.com.br/home/' className='btn btn-primary' target="_blank">Live Demo</a>
                    </div>
                </article>

                <article className='portfolio__item'>
                    <div className="portfolio__item-image">
                        <img src={IMG2} height="370px" alt="Doguinho Feliz" />
                    </div>
                    <h4>Doguinho Feliz (Collaborator)</h4>
                    <p className='small_text'>Petshop com sistema de agendamentos e carrinho de compras feito com PHP + MySQL.
                        <br></br>
                        Criado para o TCC (Trabalho de Conlusão de Curso) de um colega de classe.
                    </p>
                    <div className="portfolio__item-cta">
                        <a href='https://github.com/gsantos20/DoguinhoFeliz' className='btn' target="_blank"><FaGithub/></a>
                        <a href='https://doguinhofeliz.mytcc.com.br' className='btn btn-primary' target="_blank">Live Demo</a>
                    </div>
                </article>

                <article className='portfolio__item'>
                    <div className="portfolio__item-image">
                        <img src={IMG3} height="370px" alt="" />
                    </div>
                    <h4>ToDo List</h4>
                    <p className='small_text'>Lista de tarefas para anotações feita com ReactJs.
                    </p>
                    <div className="portfolio__item-cta">
                        {/* <a href='' className='btn' target="_blank"><FaGithub/></a>
                        <a href='' className='btn btn-primary' target="_blank">Live Demo</a> */}
                        <a href='' className='btn btn-primary disabled' target="_blank">Em construção</a>
                    </div>
                </article>
            </div>
        </section>
    )
}

export default Portfolio