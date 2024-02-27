import { useEffect, useState } from "react";
import { Container, GridSystem, Wrapper } from "../../Globalstyles";
import { StyledHeroSection, StyledInput, StyledMovieItem } from "./styled.herohome";
import { api } from "../../API/api";

export const HeroHome = () => {
  const [movie, setMovie] = useState({});

  const getMovies = async () => {
    const data = await api.getPopularMovies();
    setMovie(data.data.results);

    console.log(data);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <StyledHeroSection>
      <Container>
        <Wrapper>
          <StyledInput />
        </Wrapper>
        <GridSystem columns="5" gap="24px">
          {movie.length &&
            movie.map((movie) => (
              <StyledMovieItem key={movie.id}>
                <img src={`https://media.themoviedb.org/t/p/w220_and_h330_face/${movie.poster_path}`} alt="" />
                <div>
                  <h4>
                    <span>Movie title:</span>
                    {movie.title}
                  </h4>

                  <strong>
                    <span>Movie year:</span>
                    {movie.release_date.slice(0, 4)}
                  </strong>
                </div>
              </StyledMovieItem>
            ))}
        </GridSystem>
      </Container>
    </StyledHeroSection>
  );
};