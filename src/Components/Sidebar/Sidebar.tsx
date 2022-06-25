import { Lesson } from "../Lesson/Lesson";
import { Aside } from "./style";

export function Sidebar(){
    return(
        <Aside>
            <h1> Cronograma das Aulas </h1>
            <div>
                <Lesson />
                <Lesson />
                <Lesson />
                <Lesson />
                <Lesson />
            </div>
        </Aside>
    );
}