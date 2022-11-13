import { useState, useEffect } from 'react';
import api from 'services/api';
import {
  Container,
  Title,
  List,
  Item,
  Link
} from 'pages/Home/Home.styled';

const Home = () => {
  const [moviesInTrend, setMoviesInTrend] = useState([]);

  useEffect(() => {
    async function fetchMovies() {
      try {
        const movies = await api.fetchMoviesInTrend();
        setMoviesInTrend(movies.results);
      } catch (error) {
        console.error(error);
      } 
    };

    fetchMovies();    
  }, []);  

  return (
    <Container>
      <Title>Trending today</Title>
      <List>
        {moviesInTrend.map(({ id, title, name }) => {
          return (
            <Item key={id}>
              <Link to={`movies/${id}`}>
                {title ? title : name}
              </Link>
            </Item>
          );
        })}
      </List>
    </Container>
  );
};

export default Home;