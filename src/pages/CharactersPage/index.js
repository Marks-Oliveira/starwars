import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';

import api from '../../services/api';
import CharacterCard from '../../components/CharacterCard';

import * as S from './styles';

const CharactersPage = () => {
    const [filmDetailsCharacters, setFilmDetailsCharacters] = useState("");
    const history = useHistory();
    const pathParams = useParams();

    useEffect(() => {
        getFilmDetailsCharacters();
    }, [pathParams]);

    const getFilmDetailsCharacters = async () => {
        try {
            const response = await api.get(`/films/${pathParams.url_film}/`);
      
            setFilmDetailsCharacters(response.data);
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
                    <h1>Personagens - {filmDetailsCharacters.title}</h1>
                    <S.Characters>
                        {filmDetailsCharacters ? filmDetailsCharacters.characters.map((character, index) => 
                            <CharacterCard key={index} character={character} />
                        )
                            : null
                        }
                    </S.Characters>
                </S.Content>
            </S.Container>
        </S.Wrapper>
    );
};

export default CharactersPage;
