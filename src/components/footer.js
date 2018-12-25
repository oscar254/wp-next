import styled from 'styled-components';

import Container from './ui/container';

const Footer = styled.footer`
  background: #343a40 !important;
  color: #ffffff;
  text-align: center;
  padding-bottom: 3rem !important;
  padding-top: 3rem !important;
`;

export default () => (
  <Footer>
    <Container>
      <p>Footer</p>
    </Container>
  </Footer>
);
