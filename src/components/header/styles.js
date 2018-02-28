import styled from 'styled-components';

const Header = styled.div`
  width: 100%;
  height: 50px;
  background-color: black;
`;

const HeaderElement = styled.div `
  height: 100%;
  width: 100%;
  float: left;
  text-align: center;
`;

const AppIcon = styled.a`
   text-decoration: none;
   color: white;
`;

export { Header, HeaderElement, AppIcon };
