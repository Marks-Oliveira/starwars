import React, { useEffect, useState } from 'react';
import axios from 'axios';

import * as S from './styles';

const PlanetsCard = ({ planets }) => {
    const [planet, setPlanet] = useState("");

    useEffect(() => {
        getDetailsPlanets();
    }, []);

    const getDetailsPlanets = async () => {
        try {
            const response = await axios.get(`${planets}`);
      
            setPlanet(response.data);
        } catch(e) {
            alert("Falha ao buscar os planetas");
        };
    };

    return (
        <S.Wrapper>
            {planet.name}
        </S.Wrapper>
    );
};

export default PlanetsCard;
