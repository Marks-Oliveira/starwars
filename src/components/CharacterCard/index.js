import React, { useEffect, useState } from 'react';
import axios from 'axios';

import * as S from './styles';

const CharacterCard = ({ character }) => {
    const [characters, setCharacters] = useState("");

    useEffect(() => {
        getDetailsCharacters();
    }, []);

    const getDetailsCharacters = async () => {
        try {
            const response = await axios.get(`${character}`);
      
            setCharacters(response.data);
        } catch(e) {
            alert("Falha ao buscar personagem");
        };
    };

    return (
        <S.Wrapper>
            {characters.name}
        </S.Wrapper>
    );
};

export default CharacterCard;
