import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import Notification from 'components/Notification/Notification';
import api from 'services/api';
import {
  Profiles,
  Profile,
  PhotoActor,
  Name,
  Character
} from './Cast.styled';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const params = useParams();

  useEffect(() => {
    async function fetchCredits(id) {
      try {
        const credits = await api.fetchMovieCredits(id);
        setCast(credits.cast);
      } catch (error) {
        console.error(error);
      };
    };
    fetchCredits(params.movieId);
  }, [params.movieId]);
    
  return (
    <>
      {cast.length > 0
        ? <Profiles>
          {cast.map(({ cast_id, name, profile_path, character }) => {
            return (
              <Profile key={cast_id}>
                <PhotoActor src={profile_path
                  ? `https://image.tmdb.org/t/p/w500${profile_path}`
                  : 'https://via.placeholder.com/200x300'}
                  alt={name}
                />
                <Name>{name}</Name>
                <Character>Character: {character}</Character>
              </Profile>
            );
          })}
        </Profiles>
        : <Notification>We don't have cast for this movie.</Notification>
      }
    </>
  );
};

export default Cast;