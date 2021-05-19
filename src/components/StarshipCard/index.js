import React, { useEffect, useState } from 'react';
import axios from 'axios';

import * as S from './styles';

const StarshipCard = ({ starships }) => {
    const [starship, setStarship] = useState("");

    useEffect(() => {
        getDetailsStartships();
    }, []);

    const getDetailsStartships = async () => {
        try {
            const response = await axios.get(`${starships}`);
      
            setStarship(response.data);
        } catch(e) {
            alert("Falha ao buscar as naves");
        };
    };

    return (
        <S.Wrapper>
            {starship.name}
        </S.Wrapper>
    );
};

export default StarshipCard;
