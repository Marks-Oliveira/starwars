import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

import api from '../../services/api';

import * as S from './styles';

const AboutFilmPage = () => {
    const [filmDetails, setFilmDetails] = useState("");
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

    return (
        <S.Wrapper>
            <S.Container>
                <S.Content>
                    <h1>{filmDetails.title}</h1>
                    <p>Episódio: {filmDetails.episode_id}</p>
                    <p>{filmDetails.opening_crawl}</p>
                    <p>Diretor: {filmDetails.director}</p>
                    <p>Lançamento: {filmDetails.release_date}</p>
                </S.Content>
            </S.Container>
        </S.Wrapper>
    );
};

export default AboutFilmPage;
