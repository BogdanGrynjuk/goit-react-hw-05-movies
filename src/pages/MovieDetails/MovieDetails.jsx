import { useState, useEffect } from 'react';
import { useParams, useLocation, Outlet } from "react-router-dom";
import { Loader } from 'components/Loader/Loader';
import Notification from 'components/Notification/Notification';
import api from 'services/api';
import {
  Container,
  Link,
  MovieDescription,
  MoviePoster ,
  ContentMovie,
  CaptionMovie,
  Text,
  Title,
  MovieAddictionalInfo  
} from "pages/MovieDetails/MovieDetails.styled";
import { Suspense } from "react";

const MovieDetails = () => {
  const [movie, setMovie] = useState({});
  
  const { movieId } = useParams();
  const location = useLocation();
  const goBack = location.state?.from ?? '/';

  useEffect(() => {
    async function fetchMoviesById(id) {
      try {
        const film = await api.fetchMoviesDetails(id);
        
        setMovie(film);
        console.log(film)
      } catch (error) {
        console.error(error);
        setMovie({});
        
      }
    };
    fetchMoviesById(movieId)
  }, [movieId])

  return (
    <> {movie ?    
      <Container>
        <Link to={goBack}>Go back</Link>
        <MovieDescription>
          {Object.keys(movie).length > 0
            ? <MoviePoster src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
            : 'https://via.placeholder.com/300x450'}
          <ContentMovie>
            <CaptionMovie>{movie.title}</CaptionMovie>
            <Text>User Score: {Math.floor(Number(movie.vote_average) * 10)}%</Text>
            <Title>Overview</Title>
            <Text>{movie.overview}</Text>
            <Title>Genres</Title>
            <Text>{Object.keys(movie).length > 0
              ? movie.genres.map(genre => { return genre.name; }).join(', ')
              : null}
            </Text>
          </ContentMovie>
        </MovieDescription>
        <hr></hr>
        <MovieAddictionalInfo>
          <Title>Additional information</Title>
          <Link to="cast" state={{ from: goBack }}>Cast</Link>
          <Link to="reviews" state={{ from: goBack }}>Reviews</Link>
        </MovieAddictionalInfo>
        <hr></hr>
        <Suspense fallback={<Loader/>}>
          <Outlet />
        </Suspense>
      </Container>
      : <Notification>Movie not found, try again please</Notification>}
    </>
  );
};

export default MovieDetails;