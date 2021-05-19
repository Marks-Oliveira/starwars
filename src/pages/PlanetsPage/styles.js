import styled from 'styled-components';

export const Wrapper = styled.main`
    width: 100vw;
    height: 100vh;
    background-image: url('https://i.pinimg.com/originals/3b/7a/d7/3b7ad78975be3de20c7f88116e09b5ba.gif');
    background-size: cover;
    background-position: center;

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
    margin-right: 4.6rem;
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

export const Planets = styled.div`
    width: 100%;
    height: 40%;
    padding-top: 2rem;

    display: flex;
    flex-flow: row wrap;
`