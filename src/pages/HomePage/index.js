import React, { useEffect, useState } from 'react';

import api from '../../services/api';
import FilmCard from '../../components/FilmCard';
import Logo from '../../images/logoStarWars.png';

import * as S from './styles';

const HomePage = () => {
    const [listFilms , setListFilms] = useState("");

    useEffect(() => {
        getFilms();
    }, []);

    const getFilms = async () => {
        try {
            const response = await api.get(`/films/`);
      
            setListFilms(response.data.results);
        } catch(e) {
            alert("Falha ao carregar lista de filmes");
        }
    };

    return (
        <S.Wrapper>
            <S.Container>
                <S.Logo>
                    <img src={Logo} alt="Logo" />
                </S.Logo>
                <S.Films>
                    {listFilms ? listFilms.map((film, index) => 
                        <FilmCard key={index} film={film} />
                    )
                    : null
                    }
                </S.Films>
            </S.Container>
        </S.Wrapper>
    );
}

export default HomePage;
