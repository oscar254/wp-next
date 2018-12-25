import styled from 'styled-components';

import Container from './ui/container';

const Header = styled.header`
  background: #343a40 !important;
  color: #ffffff;
  padding-bottom: 1.5rem !important;
  padding-top: 1.5rem !important;
`;

export default () => (
  <Header>
    <Container>
      <h1>Header</h1>
    </Container>
  </Header>
);
