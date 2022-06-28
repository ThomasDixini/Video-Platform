import styled from "styled-components";

export const Container = styled.div`
max-width: 1100px;
width: 100%;
margin: 0 auto;
display: grid;
grid-template-columns: repeat(2, 1fr);
gap: 3rem;
margin-bottom: 2rem;
margin-top: 3rem;

a.material {
    
    background-color: #1e1e1e;
    display: flex;
    justify-content: center;
    align-items: center;
    max-height: 15vh;
    height: 15vh;
    overflow: hidden;
    border-radius: 0.25rem;

    div.imgFile {
        background-color: var(--green);
        height: 100%;
        width: 20%;
        padding: 1.5rem;
        display: flex;
        overflow: auto;
        align-items: center;
        justify-content: center;
    }

    div.content {
        padding: 1.5rem;
        strong {
            font-size: 1.5rem;
            font-weight: bold;
        }
        p {
            margin-top: 1rem;
            line-height: 1.5rem;
            color: var(--gray-300)
        }
    }

    div.arrow {
        padding: 1.5rem;
    }

    &:hover {
        background-color: var(--gray-500);
        div.imgFile {
            background-color: #015F43;
        }
        div.arrow {
            color: var(--blue);
        }
    }
}
`