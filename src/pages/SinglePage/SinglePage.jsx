import { useParams } from "react-router-dom";
import { Container } from "../../Globalstyles";
import { useEffect, useState } from "react";
import { api } from "../../API/api";
import { StyledTitle } from "./styled.single.page";

export const SinglePage = () => {
  const { single_page } = useParams();
  const [movie, setMovie] = useState({});

  const getMovie = async () => {
    const res = await api.getSingleMovie(single_page);
    setMovie(res.data);

    console.log(res);
  };

  useEffect(() => {
    getMovie();
  }, []);

  return movie.title ? (
    <>
      <Container>
        <StyledTitle>{movie.title}</StyledTitle>
      </Container>
    </>
  ) : (
    <h1>Error !!!</h1>
  );
};
