import React from 'react';
import { useHistory } from 'react-router';

import * as S from './styles';

import Episode1 from '../../images/episode1.jpg';
import Episode2 from '../../images/episode2.png';
import Episode3 from '../../images/episode3.png';
import Episode4 from '../../images/episode4.jpg';
import Episode5 from '../../images/episode5.png';
import Episode6 from '../../images/episode6.jpg'; 

const FilmCard = ({ film }) => {
    const history = useHistory();

    const episodes = [
        {
            episode: Episode4,
            number: 4,
            url_film: 1
        },
        {
            episode: Episode5,
            number: 5,
            url_film: 2
        },
        {
            episode: Episode6,
            number: 6,
            url_film: 3
        },        
        {
            episode: Episode1,
            number: 1,
            url_film: 4
        },
        {
            episode: Episode2,
            number: 2,
            url_film: 5
        },
        {
            episode: Episode3,
            number: 3,
            url_film: 6
        }
    ];

    let filmPoster = episodes.filter((poster) => poster.number === film.episode_id);

    let filmObj = {};
    for (let item of filmPoster) {
        filmObj = {
            ...item
        };
    };

    const goToFilmPage = () => {
        history.push(`/film/${film.title}/${filmObj.url_film}`);
    };

    return (
        <S.Wrapper>
            <S.Poster onClick={goToFilmPage}>
                <img src={filmObj.episode} alt="Poster" />
            </S.Poster>
            <S.Title>
                <span>{film.title}</span>
            </S.Title>
        </S.Wrapper>
    );
};

export default FilmCard;
