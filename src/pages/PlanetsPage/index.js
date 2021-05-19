import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';

import api from '../../services/api';
import PlanetsCard from '../../components/PlanetsCard';

import * as S from './styles';

const PlanetsPage = () => {
    const [detailsFilmPlanets, setDetailsFilmPlanets] = useState("");
    const history = useHistory();
    const pathParams = useParams();

    useEffect(() => {
        getDetailsPlanets();
    }, [pathParams]);

    const getDetailsPlanets = async () => {
        try {
            const response = await api.get(`/films/${pathParams.url_film}/`);
      
            setDetailsFilmPlanets(response.data);
        } catch(e) {
            alert("Falha ao buscar planetas");
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
                    <h1>Planetas - {detailsFilmPlanets.title}</h1>
                    <S.Planets>
                        {detailsFilmPlanets ? detailsFilmPlanets.planets.map((planet, index) => 
                            <PlanetsCard key={index} planets={planet} />
                        )
                            : null
                        }
                    </S.Planets>
                </S.Content>
            </S.Container>
        </S.Wrapper>
    );
};

export default PlanetsPage;

/*

<S.Characters>
                        {filmDetailsCharacters ? filmDetailsCharacters.characters.map((character, index) => 
                            <CharacterCard key={index} character={character} />
                        )
                            : null
                        }
                    </S.Characters>

*/
