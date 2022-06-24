import styled from 'styled-components';

export const HeaderContainer = styled.header`
width: 100%;
display: flex;
justify-content: center;
background-color: #131214;
border-bottom: 0.5rem solid #3f3f3f;

svg {
    max-width: 400px;
}

@media(max-width: 600px){
    svg {
        max-width: 300px;
    }
}
`