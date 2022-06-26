import { Lesson } from "../Lesson/Lesson";
import { Aside } from "./style";
import { gql, useQuery } from '@apollo/client'

const GET_LESSONS_QUERY = gql`
    query {
    lessons(stage: PUBLISHED, orderBy: availableAt_ASC) {
        id
        title
        availableAt
        lessonType
        slug
    }
}
`

interface GetLessonsQueryResponse {
    lessons: {
        id: string;
        title: string;
        slug: string;
        availableAt: string;
        lessonType: 'live' | 'class';
    }[]
}

export function Sidebar(){

    const { data } = useQuery<GetLessonsQueryResponse>(GET_LESSONS_QUERY);

    return(
        <Aside>
            <h1> Cronograma das Aulas </h1>
            <div>
                {data?.lessons.map(lesson => {
                    return(
                        <Lesson
                            id={lesson.id}
                            title={lesson.title}
                            slug={lesson.slug}
                            availableAt={new Date(lesson.availableAt)}
                            type={lesson.lessonType}
                        />
                    );
                })}
            </div>
        </Aside>
    );
}