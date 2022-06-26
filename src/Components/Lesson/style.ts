import styled from 'styled-components';

export const Ancora = styled.a`

padding: 1rem;
width: 100%;

.date-span {
    font-size: 0.85rem;
    opacity: 0.5;  
}

div {
    border: 1px solid gray;
    border-radius: 0.25rem;
    padding: 1rem;
    margin-top: 1rem;

    header {
        display: flex;
        justify-content: space-between;
        align-items: center;

        font-weight: bold;
        gap: 1rem;

        span {
            font-size: 0.9rem;
        }

        span:nth-child(1){
            color: var(--blue);
        }

        span:nth-child(2) {
            color: var(--green);
            border: 1px solid var(--green);
            border-radius: 0.25rem;
            padding: 5px;
        }
    }

    span {
    font-size: 1rem;
    border: none;
    }
}
` 
interface LessonTypeProps {
    available: boolean;
}

export const LessonType = styled.span<LessonTypeProps>`

color: ${props => props.available == true ? 'var(--blue)' : 'orange'} !important;
`