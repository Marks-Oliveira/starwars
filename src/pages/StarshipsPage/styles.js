import styled from 'styled-components';

export const Wrapper = styled.main`
    width: 100vw;
    height: 100vh;
    background-image: url('https://i.pinimg.com/originals/18/99/a5/1899a5a6e6567adfab2b5b94e4ae59e9.gif');
    background-size: cover;

    display: flex;
    flex-direction: column;
`

export const BackButton = styled.div`
    font-family: 'Pathway Gothic One', sans-serif;
    color: #feda4a;
    font-size: 1.5rem;
    font-weight: 600;
    letter-spacing: 2px;
    position: absolute;
    top: 0;
    right: 0;
    padding: 1.6rem;
    cursor: pointer;
    margin-right: 7.2rem;
`

export const HomePageButton = styled.div`
    font-family: 'Pathway Gothic One', sans-serif;
    color: #feda4a;
    font-size: 1.5rem;
    font-weight: 600;
    letter-spacing: 2px;
    position: absolute;
    top: 0;
    right: 0;
    padding: 1.6rem;
    margin-right: 12rem;
    cursor: pointer;
`

export const Container = styled.section`
    width: inherit;
    height: inherit;
    background: linear-gradient(to top, #111 5%, transparent 90%);
`

export const Content = styled.div`
    width: 50%;
    height: inherit;
    padding-left: 2rem;
    background: linear-gradient(to right, #111 5%, transparent 80%);

    h1 {
        font-family: 'Pathway Gothic One', sans-serif;
        color: #feda4a;
        font-size: 3rem;
        font-weight: 600;
        letter-spacing: 2px;
        margin: 0;
        padding-top: 4rem;
    }
`

export const Starships = styled.div`
    width: 100%;
    height: 40%;
    padding-top: 2rem;

    display: flex;
    flex-flow: row wrap;
`