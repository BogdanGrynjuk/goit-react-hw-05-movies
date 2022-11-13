import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import {
  Container,
  Form,
  Input,
  Button
} from 'components/SearchForm/SearchForm.styled';

export const SearchForm = ({onSubmit, query}) => {
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    if (query) {
      setSearchQuery(query);
    }
    return
  }, [query]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (searchQuery === '') {
      alert('Please fill in the search field');
      return;
    }
    onSubmit(searchQuery);
  };

  const handleChange = (event) => {
    event.preventDefault();
    setSearchQuery(event.target.value.toLowerCase());
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Input
          onChange={handleChange}
          value={searchQuery}
          type="text"
          autocomplete="off"
          autoFocus
          placeholder="Search movies"
        />
        <Button type="submit">Search</Button>
      </Form>
    </Container>
  );
}

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  query: PropTypes.string
}