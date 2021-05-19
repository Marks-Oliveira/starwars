import styled from 'styled-components';

export const Wrapper = styled.main`
    width: 100vw;
    height: 100vh;
    background-image: url('https://thumbs.gfycat.com/EnviousNearBluefish-size_restricted.gif');
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
    background: linear-gradient(to right, #111 25%, transparent 80%);

    h1 {
        font-family: 'Pathway Gothic One', sans-serif;
        color: #feda4a;
        font-size: 2.5rem;
        font-weight: 600;
        letter-spacing: 2px;
        margin: 0;
        padding-top: 2rem;
    }
`

export const Characters = styled.div`
    width: 100%;
    height: 80%;
    padding-top: 2rem;

    display: flex;
    flex-flow: row wrap;
`