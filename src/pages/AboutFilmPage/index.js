import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';

import api from '../../services/api';

import * as S from './styles';

const AboutFilmPage = () => {
    const [filmDetails, setFilmDetails] = useState("");
    const history = useHistory();
    const pathParams = useParams();

    useEffect(() => {
        getFilmDetails();
    }, [pathParams]);

    const getFilmDetails = async () => {
        try {
            const response = await api.get(`/films/${pathParams.url_film}/`);
      
            setFilmDetails(response.data);
        } catch(e) {
            alert("Falha ao buscar filme");
        };
    };

    const goToCharactersPage = () => {
        history.push(`/film/${filmDetails.title}/${pathParams.url_film}/characters`);
    };

    const goToPlanetsPage = () => {
        history.push(`/film/${filmDetails.title}/${pathParams.url_film}/planets`);
    };

    const goToStarshipsPage = () => {
        history.push(`/film/${filmDetails.title}/${pathParams.url_film}/starships`);
    };

    const goBack = () => {
        history.goBack();
    };

    return (
        <S.Wrapper>
            <S.BackButton onClick={goBack}>Voltar</S.BackButton>
            <S.Container>
                <S.Content>
                    <h1>{filmDetails.title}</h1>
                    <p>Episódio: {filmDetails.episode_id}</p>
                    <p>{filmDetails.opening_crawl}</p>
                    <p>Diretor: {filmDetails.director}</p>
                    <p>Lançamento: {filmDetails.release_date}</p>
                    <S.OtherInfos>
                        <span onClick={goToCharactersPage}>Personagens</span>
                        <span onClick={goToPlanetsPage}>Planetas</span>
                        <span onClick={goToStarshipsPage}>Naves</span>
                    </S.OtherInfos>
                </S.Content>
            </S.Container>
        </S.Wrapper>
    );
};

export default AboutFilmPage;
