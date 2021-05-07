import styled from 'styled-components';

export const Wrapper = styled.main`
    width: 100vw;
    height: 100vh;
    background-image: url('https://i.pinimg.com/originals/1b/f4/e4/1bf4e4619e9d80cfe68775f3bdf3f51d.gif');
    background-size: cover;
    overflow: hidden;

    display: flex;
    flex-direction: column;
`

export const Container = styled.section`
    width: 50%;
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
`

export const Logo = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    img {
        width: 35%;
        height: 68%;
    }
`

export const Films = styled.div`
    margin-top: 0.4rem;

    display: flex;
    flex-flow: row wrap;
    justify-content: center;
`