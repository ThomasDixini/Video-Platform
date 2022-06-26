import { Ancora, LessonType } from "./style";
import { AiFillLock, AiOutlineCheckCircle } from 'react-icons/ai';
import { format, isPast } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
interface LessonProps {
    title: string;
    slug: string;
    availableAt: Date;
    type: 'live' | 'class';
}

export function Lesson(props: LessonProps){

    const isLessonAvailable = isPast(props.availableAt);
    const formatedDate = format(props.availableAt, "EEEE' • 'd' de 'MMMM' • 'k'h'mm'", {
        locale: ptBR
    })

    return(
        <Ancora href="#">
            <span className="date-span"> {formatedDate} </span>
            <div>
                <header>
                    {isLessonAvailable ? (
                        <LessonType available={isLessonAvailable}> <AiOutlineCheckCircle/> Conteúdo Liberado </LessonType >
                    ) : (
                        <LessonType available={isLessonAvailable}> <AiFillLock/> Em breve </LessonType >
                    )}
                    <span> {props.type == "live" ? 'AO VIVO' : 'AULA PRÁTICA'} </span>
                </header>
                <strong> {props.title} </strong>
            </div>
        </Ancora>
    );
}