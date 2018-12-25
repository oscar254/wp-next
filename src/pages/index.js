import React from 'react'
import styled from 'styled-components';

import DefaultLayout from '../layouts/default';

const Title = styled.h1`
  color: red;
  font-size: 50px;
`;

export default () => (
  <DefaultLayout>
    <Title>My page</Title>
  </DefaultLayout>
);
