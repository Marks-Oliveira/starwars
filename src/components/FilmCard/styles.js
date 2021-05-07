import styled from 'styled-components';

export const Wrapper = styled.main`
    width: 26%;
    height: 26%;
    padding: 0 0.5rem;
    margin-top: 0.8rem;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const Poster = styled.section`
    cursor: pointer;
    
    img {
        width: 100%;
        transform: scale(0.9);
        transition: all ease 0.2s;
    }

    img:hover {
        transform: scale(1);
    }
`

export const Title = styled.section`
    font-family: 'Pathway Gothic One', sans-serif;
    color: #feda4a;
    font-size: 1rem;
    font-weight: 600;
    letter-spacing: 2px;
`