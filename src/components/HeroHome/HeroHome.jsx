import { useEffect, useState } from "react";
import { Container, GridSystem, Wrapper } from "../../Globalstyles";
import { StyledHeroSection, StyledInput, StyledMovieItem } from "./styled.herohome";
import { api } from "../../API/api";
import { useLocation, useNavigate } from "react-router-dom";

export const HeroHome = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const [movie, setMovie] = useState({});

  const getMovies = async () => {
    const data = pathname === "/" ? await api.getPopularMovies() : pathname === "/top-rated" ? await api.getTopRatedMovies() : await api.getUpcomingMovies();
    setMovie(data.data.results);
  };

  const handleClick = (movie_id) => {
    navigate(`movie/${movie_id}`);
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
              <StyledMovieItem key={movie.id} onClick={() => handleClick(movie.id)}>
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
