import styled from "styled-components";

export const StyledHeroSection = styled.section`
  padding-block: 40px;
`;

export const StyledInput = styled.input.attrs({
  type: "text",
  placeholder: "Search movies...",
})`
  width: calc(100% - 120px);
  margin-top: 0;
  margin-bottom: 50px;
  margin-inline: auto;
  padding: 14px;
  padding-inline: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  background-color: transparent;
  color: #fff;
  font-size: 24px;
  &:focus {
    outline: none;
  }
`;

export const StyledMovieItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #292929;
  border-radius: 25px;

  & img {
    width: 100%;
    object-fit: cover;
    border-top-left-radius: 25px;
    border-top-right-radius: 25px;
  }

  & div {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 20px;
    flex-grow: 1;
  }

  & h4,
  strong {
    display: flex;
    justify-content: space-between;
  }

  & span {
    font-weight: 400;
    color: #b9b9b9;
  }
`;
