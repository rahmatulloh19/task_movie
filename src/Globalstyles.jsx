import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  /* Mobile first */

* {
  box-sizing: border-box;
}

html {
  height: 100%;
}

body {
  display: flex;
  flex-direction: column;
  height: 100%;
  margin: 0;
  font-family: "Arial", "Roboto", sans-serif;
  background-color: #11151c;
  color: white;
}

#root {
  display: flex;
  flex-direction: column;
  height: 100%;
}

img {
  display: block;
  height: auto;
}

.visually-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
  border: 0;
  overflow: hidden;
  clip: rect(0 0 0 0);
}

/* Sticky footer */

.site-main {
  flex-grow: 1;
}
`;

export const Container = styled.div`
  max-width: 1500px;
  width: 100%;
  margin: 0 auto;
  padding: 0 24px;
`;

export const Wrapper = styled.div.withConfig({
  shouldForwardProp: (prop) => !["justifyContent", "alignItems", "gap"].includes(prop),
})`
  display: flex;
  justify-content: ${(props) => (props.justifyContent ? props.justifyContent : "space-between")};
  align-items: ${(props) => (props.alignItems ? props.alignItems : "center")};
  gap: ${(props) => (props.gap ? props.gap : "")};
`;

export const GridSystem = styled.ul.withConfig({
  shouldForwardProp: (prop) => !["gap", "columns", "rows"].includes(prop),
})`
  display: grid;
  grid-template-columns: repeat(${(props) => (props.columns ? props.columns : "auto")}, 1fr);
  grid-gap: ${(props) => (props.gap ? props.gap : "")};
  margin-block: 0;
  padding-left: 0;
  list-style: none;
`;
