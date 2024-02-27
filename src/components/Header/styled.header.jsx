import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledHeader = styled.header`
  padding: 40px;
`;

export const StyledNav = styled.nav``;
export const StyledList = styled.ul`
  display: flex;
  gap: 40px;
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const StyledListItem = styled.li``;

export const StyledLink = styled(NavLink)`
  text-decoration: none;
  font-size: 28px;
  font-weight: bold;
  letter-spacing: 1.75px;
  color: #ffffff75;
  &.active {
    color: #fff;
  }
`;
