import { Container, Wrapper } from "../../Globalstyles";
import { StyledHeader, StyledLink, StyledList, StyledListItem, StyledNav } from "./styled.header";

export const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <Wrapper justifyContent="center">
          <StyledNav>
            <StyledList>
              <StyledListItem>
                <StyledLink to="/" end>
                  Home
                </StyledLink>
              </StyledListItem>
              <StyledListItem>
                <StyledLink to="top-rated" end>
                  Top Rated
                </StyledLink>
              </StyledListItem>
              <StyledListItem>
                <StyledLink to="upcoming" end>
                  Upcoming
                </StyledLink>
              </StyledListItem>
            </StyledList>
          </StyledNav>
        </Wrapper>
      </Container>
    </StyledHeader>
  );
};
