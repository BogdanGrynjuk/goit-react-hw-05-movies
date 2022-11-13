import { useState, useEffect } from 'react';
import { useLocation, useSearchParams } from "react-router-dom";
import api from 'services/api';
import { SearchForm } from 'components/SearchForm/SearchForm';
import {
  Container,
  List,
  Item,
  Link
} from 'pages/Movies/Movies.styled'

const Movies = () => {
  const [searchQuery, setSearchQuery] = useState(null);
  const [movies, setMovies] = useState(null);
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    async function fetchMovies(searchQuery) {
      try {
        const movies = await api.fetchMovies(searchQuery);
        setMovies(movies.results);
      } catch (error) {
        console.log(error);
      } 
    };
    
    setSearchQuery(searchParams.get('query'));
    
    if (searchQuery !== null) {
      fetchMovies(searchQuery);
    }

  }, [searchQuery, searchParams]);

  const onSubmit = (searchQuery) => {
    setSearchQuery(searchQuery.toString());
    setSearchParams(`?query=${searchQuery}`);
  };

  return (
    <Container>
      <SearchForm onSubmit={onSubmit} query={searchParams.get('query')} />
      {movies
        ? <List>
          {movies.map(({ id, title, name }) => {
            return (
              <Item key={id}>
                <Link
                  to={`${id}`}
                  state={{ from: location }}
                >
                  {title ? title : name}
                </Link>
              </Item>
            )
          })}
        </List>
        : null
      }
    </Container>
  );
};

export default Movies;