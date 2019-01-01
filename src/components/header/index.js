import React from 'react';
import { Header, Menu } from './style';

const links = [
  { id: 0, slug: '/top', text: 'Top' },
  { id: 1, slug: '/new', text: 'New' },
  { id: 2, slug: '/show', text: 'Show' },
  { id: 3, slug: '/ask', text: 'Ask' },
  { id: 4, slug: '/jobs', text: 'Jobs' },
];

export default () => (
  <Header>
    <Menu>
      {
        links.map(link => (
          <a key={link.id} href={link.slug}>{link.text}</a>
        ))
      }
    </Menu>
  </Header>
);
