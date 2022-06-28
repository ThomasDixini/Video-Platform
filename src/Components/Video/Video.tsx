import { Container } from "./style";

import { TbBrandDiscord } from 'react-icons/tb'
import { BsLightningCharge } from 'react-icons/bs'

export function Video(){
    return(
        <Container>
            <div className="bg-player">
                <div className="player">
                    Video
                </div>
            </div>

            <div className="content-lesson">
                <div className="description">
                    <span> Aula 01 - Abertura do Evento Ignite Lab</span>
                    <p>
                        Nessa aula vamos dar início ao projeto criando a estrutura base da aplicação utilizando ReactJS, Vite e TailwindCSS. Vamos também realizar o setup do nosso projeto no GraphCMS criando as entidades da aplicação e integrando a API GraphQL gerada pela plataforma no nosso front-end utilizando Apollo Client.               
                    </p>

                    <div className="perfil">
                        <img src="https://github.com/ThomasDixini.png" alt="Professor da Aula" width="70"/>
                        <div className="bio-teacher">
                            <strong> Thomás Dixini </strong>
                            <p> Estudante at @Unis </p>
                        </div>
                    </div>
                </div>
                <div className="link-buttons">
                    <a href="#">
                        <TbBrandDiscord size={24} /> Comunidade do Discord
                    </a>
                    <a href="#" className="btn-challenge">
                       <BsLightningCharge size={24} /> Acesse o desafio
                    </a>
                </div>
            </div>
            
        </Container>
    );
}