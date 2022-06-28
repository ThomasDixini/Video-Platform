import styled from "styled-components";

export const Container = styled.div`

display: flex;
flex: 1 1 0%;
flex-direction: column;


div.bg-player {
    background-color: black;
    width: 100%;
    height: 100%;
    max-height: 60vh;
    aspect-ratio: 16/9;
    display: flex;
    justify-content: center;

    div.player {
        width: 100%;
        max-width: 1100px;
        max-height: 60vh;
        aspect-ratio: 16/9;
        background-color: gray;
    }
}

div.content-lesson {
    max-width: 1100px;
    width: 100%;
    margin: 0 auto;
    padding: 2rem;

    display: flex;
    align-items: flex-start;

    div.description {
        span {
            font-size: 1.5rem;
            font-weight: bold;
        }
        p {
            font-size: 1rem;
            margin-top: 2rem;
            line-height: 1.65rem;
            color: var(--gray-300);
        }
        div.perfil {
            margin-top: 2rem;
            display: flex;
            align-items: center;
            gap: 1rem;

            img {
                border-radius: 5rem;
                border: 2px solid var(--blue);
            }
            div.bio-teacher {
                strong {
                    font-size: 1.5rem;
                }
                p {
                    margin: 0;
                    font-size: 0.9rem;
                }
            }
        }
    }

    div.link-buttons {
        display: flex;
        flex-direction: column;
        gap: 1rem;

        margin-left: 4rem;
        a {
            background-color: var(--blue-700);
            padding: 1.25rem;
            border-radius: 0.25rem;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            text-transform: uppercase;
            font-weight: bold;
            transition: filter 0.2s;

            & {
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 0.5rem;
            }

            &:hover {
                filter: brightness(0.75);
            }

            &.btn-challenge {
                background-color: transparent;
                border: 2px solid var(--green);
                color: var(--green);

                &:hover {
                    background-color: var(--green);
                    color: black;
                    filter: brightness(1);
                }
            }
        }
    }
}
`