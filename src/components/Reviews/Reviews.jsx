import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import Notification from 'components/Notification/Notification';
import api from 'services/api';
import {
  ReviewsList,
  ReviewsItem,
  Autor,
  Content
} from './Reviews.styled';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const params = useParams();

  useEffect(() => {
    async function fetchReviews(id) {
      try {
        const reviews = await api.fetchMovieReviews(id);
        setReviews(reviews.results);
      } catch (error) {
        console.error(error);           
      };
    };
      fetchReviews(params.movieId);
  }, [params.movieId]);

  return (
    <>
      {reviews.length > 0
        ? <ReviewsList>
          {reviews.map(({ id, author, content }) => {
            return (
              <ReviewsItem key={id}>
                <Autor>Autor: {author}</Autor>
                <Content>{content}</Content>
              </ReviewsItem>
            )
          })}
        </ReviewsList>
        : <Notification>No reviews here</Notification>
      }
    </>
  );
};

export default Reviews;