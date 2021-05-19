import styled from 'styled-components';

export const Wrapper = styled.main`
    width: 100vw;
    height: 100vh;
    background-image: url('https://i1.wp.com/windowscustomization.com/wp-content/uploads/2019/12/Do-Not-Oppose-Me-Darth-Vader-Star-Wars-Battlefront-II.gif?fit=768%2C432&quality=80&strip=all&ssl=1');
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

export const Container = styled.section`
    width: inherit;
    height: inherit;
    background: linear-gradient(to top, #111 10%, transparent 90%);
`

export const Content = styled.div`
    width: 50%;
    height: inherit;
    padding-left: 2rem;
    background: linear-gradient(to right, #111 55%, transparent 80%);

    h1 {
        font-family: 'Pathway Gothic One', sans-serif;
        color: #feda4a;
        font-size: 3.5rem;
        font-weight: 600;
        letter-spacing: 2px;
        margin: 0;
        padding-top: 2rem;
    }

    p {
        font-family: 'Pathway Gothic One', sans-serif;
        color: #feda4a;
        font-size: 1.5rem;
        font-weight: 600;
        letter-spacing: 2px;
    }
`

export const OtherInfos = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    padding-top: 2.4rem;

    font-family: 'Pathway Gothic One', sans-serif;
    color: #feda4a;
    font-size: 2.4rem;
    font-weight: 600;
    letter-spacing: 2px;
    
    span {
        cursor: pointer;
    }
`