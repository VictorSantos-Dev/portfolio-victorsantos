import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/gigagames.jpg'
import IMG2 from '../../assets/doguinhofeliz.jpg'
import IMG3 from '../../assets/CakeBoss.png'
import IMG4 from '../../assets/todolist.jpg'
import IMG5 from '../../assets/ToDoList_Bubble.jpg'
import IMG6 from '../../assets/victorsbank.jpg'
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
                    <p className='small_text'>Website responsivo para uma loja de games fictícia com sistema de login, compras, carrinho e gestão (PHP + MySQL).
                        <br></br>
                        Criado para o TCC (Trabalho de Conlusão de Curso).
                    </p>
                    <div className="portfolio__item-cta">
                        <a href='https://github.com/VictorSantos-Dev/gigagames.mytcc.com.br' className='btn' target="_blank" rel="noreferrer"><FaGithub/></a>
                        <a href='http://www.gigagames.mytcc.com.br/home/' className='btn btn-primary' target="_blank" rel="noreferrer">Live Demo</a>
                    </div>
                </article>

                <article className='portfolio__item'>
                    <div className="portfolio__item-image">
                        <img src={IMG2} height="370px" alt="Doguinho Feliz" />
                    </div>
                    <h4>Doguinho Feliz (Collaborator)</h4>
                    <p className='small_text'>Website responsivo de um petshop com sistema de login, agendamentos e carrinho de compras feito com PHP + MySQL.
                        <br></br>
                        Colabaroção no desenvolvimento do TCC (Trabalho de Conlusão de Curso) de um colega de classe.
                    </p>
                    <div className="portfolio__item-cta">
                        <a href='https://github.com/gsantos20/DoguinhoFeliz' className='btn' target="_blank" rel="noreferrer"><FaGithub/></a>
                        <a href='https://doguinhofeliz.mytcc.com.br' className='btn btn-primary' target="_blank" rel="noreferrer">Live Demo</a>
                    </div>
                </article>

                <article className='portfolio__item'>
                    <div className="portfolio__item-image">
                        <img src={IMG3} height="370px" alt="CakeBoss" />
                    </div>
                    <h4>CakeBoss</h4>
                    <p className='small_text'>Website responsivo para uma confeitaria com sistema de agendamentos de entrega/retirada
                        e carrinho de compras feito com Bootstrap e PHP + MySQL.
                        <br></br>
                        CRUD para bolos, sistema de login e etc...
                    </p>
                    <div className="portfolio__item-cta">
                        <a href='https://drive.google.com/drive/folders/1HNmXQSvGdeqbX6pgHFB1ZTTryHjqAI1V?usp=sharing' className='btn' target="_blank" rel="noreferrer"><FaGithub/></a>
                        <a href='https://drive.google.com/drive/folders/1HNmXQSvGdeqbX6pgHFB1ZTTryHjqAI1V?usp=sharing' className='btn btn-primary' target="_blank" rel="noreferrer">Live Demo</a>
                    </div>
                </article>

                <article className='portfolio__item'>
                    <div className="portfolio__item-image">
                        <img src={IMG6} height="370px" alt="" />
                    </div>
                    <h4>Victor's Bank</h4>
                    <p className='small_text'>Landing page responsiva de um banco digital fictício chamado Victor's Bank. Feito com React.
                    </p>
                    <div className="portfolio__item-cta">
                        <a href='https://github.com/VictorSantos-Dev/landingpage_victorsbank' className='btn' target="_blank" rel="noreferrer"><FaGithub/></a>
                        <a href='https://landingpage-victorsbank.vercel.app' className='btn btn-primary' target="_blank" rel="noreferrer">Live Demo</a>
                    </div>
                </article>

                <article className='portfolio__item'>
                    <div className="portfolio__item-image">
                        <img src={IMG4} height="370px" alt="" />
                    </div>
                    <h4>ToDo List (ReactJS)</h4>
                    <p className='small_text'>Lista de tarefas para anotações feita com ReactJs + Vite.
                    </p>
                    <div className="portfolio__item-cta">
                        <a href='https://github.com/VictorSantos-Dev/todo_react' className='btn' target="_blank" rel="noreferrer"><FaGithub/></a>
                        <a href='https://todo-react-teal-two.vercel.app' className='btn btn-primary' target="_blank" rel="noreferrer">Live Demo</a>
                        {/* <a href='' className='btn btn-primary disabled' target="_blank">Em construção</a> */}
                    </div>
                </article>

                <article className='portfolio__item'>
                    <div className="portfolio__item-image">
                        <img src={IMG5} height="370px" alt="" />
                    </div>
                    <h4>ToDo List (Bubble)</h4>
                    <p className='small_text'>Lista de anotações feito com Bubble (Version Test).
                    </p>
                    <div className="portfolio__item-cta">
                        <a href='https://bubble.io/page?type=page&name=listamercado_login&id=firstproject-70149&tab=tabs-1' className='btn' target="_blank" rel="noreferrer"><FaGithub/></a>
                        <a href='https://firstproject-70149.bubbleapps.io/version-test/listamercado_login' className='btn btn-primary' target="_blank" rel="noreferrer">Live Demo</a>
                    </div>
                </article>
            </div>
        </section>
    )
}

export default Portfolio