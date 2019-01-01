import styled from 'styled-components';

export const Header = styled.header`
  background-color: #f60;
  position: fixed;
  z-index: 999;
  height: 55px;
  top: 0;
  left: 0;
  right: 0;
  a {
    color: hsla(0,0%,100%,.8);
    line-height: 24px;
    transition: color .15s ease;
    display: inline-block;
    vertical-align: middle;
    font-weight: 300;
    letter-spacing: .075em;
    margin-right: 1.8em;
  }
`;

export const Menu = styled.nav`
  max-width: 800px; 
  box-sizing: border-box;
  margin: 0 auto;
  padding: 15px 5px;
`;
