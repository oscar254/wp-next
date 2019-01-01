import React from 'react';

import DefaultLayout from '../layouts/default';
import Pagination from '../components/pagination';
import List from '../components/list';
import wp from '../lib/wp';

const HomePage = ({ posts }) => (
  <DefaultLayout>
    <Pagination />
    <List posts={posts} />
  </DefaultLayout>
);

HomePage.getInitialProps = async () => {
  const posts = await wp.posts().embed();
  return { posts };
};

export default HomePage;
