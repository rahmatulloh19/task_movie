import { useParams } from "react-router-dom";
import { Container, Wrapper } from "../../Globalstyles";
import { useEffect, useState } from "react";
import { api } from "../../API/api";
import { StyledImage, StyledItem, StyledItemImage, StyledText, StyledTitle } from "./styled.single.page";
import { StyledList } from "../../components/Header/styled.header";

export const SinglePage = () => {
  const { single_page } = useParams();
  const [movie, setMovie] = useState({});
  const [movieRecommendation, setMovieRecommendation] = useState([]);
  const [movieActors, setMovieActors] = useState([]);

  const getMovie = async () => {
    const movie = await api.getSingleMovie(single_page);
    setMovie(movie.data);

    const actors = await api.getSingleMovieActors(single_page);
    setMovieActors(actors.data.cast);

    const recommendations = await api.getSingleMovieRecommendation(single_page);
    setMovieRecommendation(recommendations.data.results);

    console.log(recommendations);
  };

  useEffect(() => {
    getMovie();
  }, []);

  return movie.title ? (
    <>
      <Container>
        <StyledTitle>{movie.title}</StyledTitle>
        <Wrapper gap="45px" style={{ marginBottom: "70px" }}>
          <StyledImage src={`https://media.themoviedb.org/t/p/w220_and_h330_face/${movie.poster_path}`} />
          <Wrapper flexDirection="column" alignItems="flex-start">
            <StyledText tagline="true">Subtitle: {movie.tagline}</StyledText>
            <StyledText>Overview: {movie.overview}</StyledText>
            <StyledText>Released Date: {movie.release_date}</StyledText>
            <StyledText>
              Duration Movie: {Math.trunc(movie.runtime / 60)} hour {Math.trunc(movie.runtime % 60)} min
            </StyledText>
            <Wrapper wrap="wrap" as="ul" style={{ margin: 0, padding: 0, listStyleType: "none" }} gap="25px">
              <li>
                <StyledText tagline="true" style={{ fontSize: "16px" }}>
                  Companies:{" "}
                </StyledText>
              </li>
              {movie.production_companies.map((company) => (
                <li key={company.id}>
                  <StyledText style={{ fontSize: "16px" }}>{company.name}</StyledText>
                </li>
              ))}
            </Wrapper>
          </Wrapper>
        </Wrapper>
        <StyledList style={{ overflow: "auto", marginBottom: "60px" }}>
          {movieActors.length &&
            movieActors.map((actor) => {
              return (
                actor.profile_path && (
                  <StyledItem key={actor.id}>
                    <StyledItemImage src={`https://image.tmdb.org/t/p/w220_and_h330_face/${actor.profile_path}`} />
                    <StyledText>{actor.name}</StyledText>
                  </StyledItem>
                )
              );
            })}
        </StyledList>

        <StyledList style={{ overflow: "auto" }}>
          {movieRecommendation.length &&
            movieRecommendation.map((movie) => {
              return (
                <StyledItem key={movie.id}>
                  <StyledItemImage src={`https://image.tmdb.org/t/p/w220_and_h330_face/${movie.poster_path}`} />
                  <StyledText style={{ fontSize: "12px" }}>{movie.title}</StyledText>
                </StyledItem>
              );
            })}
        </StyledList>
      </Container>
    </>
  ) : (
    <h1>Error !!!</h1>
  );
};
