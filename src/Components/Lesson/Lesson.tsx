import { Ancora } from "./style";
import { AiOutlineCheckCircle } from 'react-icons/ai';

export function Lesson(){
    return(
        <Ancora href="#">
            <span className="date-span"> Domingo • 20 de junho • 19h00 </span>
            <div>
                <header>
                    <span> <AiOutlineCheckCircle/> Conteúdo Liberado </span>
                    <span> AO VIVO </span>
                </header>
                <strong> Abertura do Evento Ignite Lab </strong>
            </div>
        </Ancora>
    );
}