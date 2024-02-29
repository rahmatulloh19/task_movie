/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import { StyledMovieItem, StyledMovieList } from "./styled.movie.list";

export const MovieList = ({ searchedMovies }) => {
  const navigate = useNavigate();
  return searchedMovies.length ? (
    <StyledMovieList>
      {searchedMovies.map((movie) => {
        return (
          <StyledMovieItem key={movie.id} onClick={() => navigate(`/movie/${movie.id}`)}>
            {movie.title}
            {/* <img src={`https://image.tmdb.org/t/p/w220_and_h330_face/${movie.poster_path}`} width={30} height={40} alt="" /> */}
          </StyledMovieItem>
        );
      })}
    </StyledMovieList>
  ) : (
    ""
  );
};
