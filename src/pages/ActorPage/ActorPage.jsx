import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { api } from "../../API/api";
import { Container, Wrapper } from "../../Globalstyles";
import { StyledDescription, StyledTitle } from "./styled.actor.page";
import { StyledList } from "../../components/Header/styled.header";
import { StyledItem, StyledItemImage, StyledText } from "../SinglePage/styled.single.page";

export const ActorPage = () => {
  const navigate = useNavigate();
  const { single_page } = useParams();

  const [actor, setActor] = useState({});
  const [actorMovies, setActorMovies] = useState({});

  const getData = async () => {
    const actor = await api.getActor(single_page);
    setActor(actor.data);

    const actorMovies = await api.getActorMovies(single_page);
    setActorMovies(actorMovies.data.cast);

    console.log(actorMovies);
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    actor.name && (
      <Container>
        <Wrapper gap="45px" style={{ marginBottom: "70px" }}>
          <img src={`https://image.tmdb.org/t/p/w300/${actor.profile_path}`} alt={actor.name} />
          <Wrapper flexDirection="column" alignItems="start" gap="25px">
            <StyledTitle>{actor.name}</StyledTitle>
            <StyledDescription>{actor.biography}</StyledDescription>
            <StyledDescription>Date birth: {actor.birthday}</StyledDescription>
            <StyledDescription>Place of birth: {actor.place_of_birth}</StyledDescription>
          </Wrapper>
        </Wrapper>

        <StyledList style={{ overflow: "auto" }}>
          {actorMovies.length &&
            actorMovies.map((movie) => {
              return (
                <StyledItem
                  key={movie.id}
                  onClick={() => {
                    navigate(`/movie/${movie.id}`);
                  }}
                >
                  <StyledItemImage src={`https://image.tmdb.org/t/p/w220_and_h330_face/${movie.poster_path}`} />
                  <StyledText style={{ fontSize: "12px" }}>{movie.title}</StyledText>
                </StyledItem>
              );
            })}
        </StyledList>
      </Container>
    )
  );
};
