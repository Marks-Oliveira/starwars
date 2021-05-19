import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';

import api from '../../services/api';
import StarshipCard from '../../components/StarshipCard';

import * as S from './styles';

const StarshipsPage = () => {
    const [filmDetailsStarships, setFilmDetailsStarships] = useState("");
    const history = useHistory();
    const pathParams = useParams();

    useEffect(() => {
        getFilmDetailsStarships();
    }, [pathParams]);

    const getFilmDetailsStarships = async () => {
        try {
            const response = await api.get(`/films/${pathParams.url_film}/`);
      
            setFilmDetailsStarships(response.data);
        } catch(e) {
            alert("Falha ao buscar filme");
        };
    };

    const goBack = () => {
        history.goBack();
    };

    const goToHomePage = () => {
        history.push(`/`);
    };

    return (
        <S.Wrapper>
            <S.HomePageButton onClick={goToHomePage}>Página inicial</S.HomePageButton>
            <S.BackButton onClick={goBack}>Voltar</S.BackButton>
            <S.Container>
                <S.Content>
                    <h1>Naves - {filmDetailsStarships.title}</h1>
                    <S.Starships>
                        {filmDetailsStarships ? filmDetailsStarships.starships.map((starship, index) => 
                            <StarshipCard key={index} starships={starship} />
                        )
                            : null
                        }
                    </S.Starships>
                </S.Content>
            </S.Container>
        </S.Wrapper>
    );
};

export default StarshipsPage;
