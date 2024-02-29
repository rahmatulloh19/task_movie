import { useCallback, useEffect, useState } from "react";
import { Container, GridSystem } from "../../Globalstyles";
import { StyledHeroSection, StyledInput, StyledMovieItem, StyledWrapper } from "./styled.herohome";
import { api } from "../../API/api";
import { useLocation, useNavigate } from "react-router-dom";
import { MovieList } from "../MovieList/MovieList";
import debounce from "debounce";

export const HeroHome = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const [movie, setMovie] = useState({});
  const [searchedMovies, setSearchedMovies] = useState([]);

  const getMovies = useCallback(async () => {
    const data = pathname === "/" ? await api.getPopularMovies() : pathname === "/top-rated" ? await api.getTopRatedMovies() : await api.getUpcomingMovies();
    setMovie(data.data.results);
  }, [pathname]);

  const handleClick = (movie_id) => {
    navigate(`/movie/${movie_id}`);
  };

  let handleSearch = async (evt) => {
    const searchedMovie = await api.search(evt.target.value.trim());
    setSearchedMovies(searchedMovie.data.results);
  };

  handleSearch = debounce(handleSearch, 500);

  useEffect(() => {
    getMovies();
  }, [getMovies]);

  return (
    <StyledHeroSection>
      <Container>
        <StyledWrapper>
          <StyledInput onChange={handleSearch} />
          <MovieList searchedMovies={searchedMovies} />
        </StyledWrapper>
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
