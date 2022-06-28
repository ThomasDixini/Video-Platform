import { Container } from "./style";

import { FaFileDownload } from 'react-icons/fa'
import { AiOutlineArrowRight, AiOutlineFileImage } from 'react-icons/ai'

export function Materials() {
    return(
        <Container>
            <a className="material">
                <div className="imgFile">
                    <FaFileDownload size={25} />
                </div>
                <div className="content">
                    <strong className="title"> Material Complementar </strong>
                    <p className="material-descprition"> Acesse o material complementar para acelerar o seu desenvolvimento </p>
                </div>
                <div className="arrow">
                    <AiOutlineArrowRight size={25} />
                </div>
            </a>

            <a className="material">
                <div className="imgFile">
                    <AiOutlineFileImage size={25} />
                </div>
                <div className="content">
                    <strong> Wallpapers Exclusivos </strong>
                    <p> Baixe wallpapers exclusivos do Ignite Lab e personalize a sua máquina </p>
                </div>
                <div className="arrow">
                    <AiOutlineArrowRight size={25} />
                </div>
            </a>
        </Container>
    );
}