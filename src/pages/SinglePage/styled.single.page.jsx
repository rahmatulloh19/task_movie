import styled from "styled-components";

export const StyledTitle = styled.h1`
  margin: 15px 0;
  font-size: 38px;
  text-align: center;
  letter-spacing: 3px;
`;

export const StyledImage = styled.img`
  width: 350px;
  border-radius: 15px;
  flex-shrink: 0;
`;

export const StyledText = styled.p.withConfig({
  shouldForwardProp: (prop) => !["tagline"].includes(prop),
})`
  margin: 25px 0;
  font-size: ${(props) => (props.tagline ? "24px" : "20px")};
  font-weight: ${(props) => (props.tagline ? "700" : "400")};
  text-align: left;
  letter-spacing: 3px;
`;

export const StyledItem = styled.li``;
export const StyledItemImage = styled.img`
  width: 120px;
  margin-bottom: 20px;
`;
