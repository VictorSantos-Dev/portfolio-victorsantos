import React from "react";
import './about.css'
import VICTOR2 from '../../assets/VICTOR2.jpg'
import {FaAward} from 'react-icons/fa'
import {HiOutlineDesktopComputer} from 'react-icons/hi'

const About =()=>{
    return(
        <section id="about">
            <h5>Conheça</h5>
            <h2>Sobre mim</h2>

            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-image">
                        <img src={VICTOR2} alt="foto victor" />
                    </div>
                </div>
                
                <div className="about__content">
                    <p className="paragraph">Eu me chamo Victor Hugo Severo dos Santos e tenho 19 anos de idade. No momento, 
                        estou matriculado no curso de Ciência da Computação na Universidade Presbiteriana Mackenzie. 
                        Minha paixão pela tecnologia é uma parte essencial de quem sou, e estou continuamente 
                        em busca de oportunidades para expandir meus conhecimentos.
                        <br></br><br></br>
                        Minha abordagem em relação à tecnologia é fundamentada na busca constante pela excelência. 
                        Sempre que me envolvo em projetos, meu objetivo principal é encontrar soluções otimizadas. 
                        Tenho experiência no desenvolvimento de sites responsivos e na criação de sistemas eficientes 
                        que atendam às necessidades específicas de cada negócio.
                    </p>

                    <div className="about__cards">
                        <article>
                            <div className="about__card">
                                <FaAward className="about__icon"/>
                                <h5>Experiencia</h5>
                                <small>Mais de 2 anos na área de desenvolvimento</small>
                            </div>
                        </article>
                        <article>
                            <div className="about__card">
                                <HiOutlineDesktopComputer className="about__icon"/>
                                <h5>Tecnologias</h5>
                                <small>Desenvolvimento FullStack</small>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
