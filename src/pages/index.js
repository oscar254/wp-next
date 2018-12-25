import React from 'react';
import styled from 'styled-components';
import { Flex, Box } from '@rebass/grid';

import DefaultLayout from '../layouts/default';
import Container from '../components/ui/container';

const Title = styled.h1`
  color: red;
  font-size: 50px;
`;

export default () => (
  <DefaultLayout>
    <Container>
      <Title>My page</Title>
      <Flex>
        <Box width={1 / 2} px={2}>
          Half width
        </Box>
        <Box width={1 / 2} px={2}>
          Half width
        </Box>
      </Flex>
    </Container>
  </DefaultLayout>
);
