import styled from "styled-components";
import { StyledList } from "../Header/styled.header";

export const StyledMovieList = styled(StyledList)`
  position: absolute;
  top: 32px;
  left: 50%;
  flex-direction: column;
  width: 1332px;
  height: 420px;
  margin-top: 25px;
  padding-inline: 20px;
  gap: 15px;
  overflow: auto;
  transform: translateX(-50%);
  background-color: #292929b8;
  border-radius: 20px;
`;

export const StyledMovieItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  &:hover {
    cursor: pointer;
  }
`;
