import styled from 'styled-components';

export const Aside = styled.aside`

width: 348px;
background-color: var(--gray-500);
border-left: 0.2rem solid var(--gray-200);
padding: 1.5rem;

h1 {
    font-size: 1.5rem;
    font-weight: bold;
    
    border-bottom: 0.15rem solid var(--gray-200);
    display: block;
    height: 3rem;

    margin-bottom: 2rem;
     
}

div {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}
`