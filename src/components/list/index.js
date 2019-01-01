import React from 'react';
import {
  List,
  Card,
  Score,
  Meta,
} from './style';

export const Post = ({ post }) => {
  const { _embedded } = post;
  return (
    <Card>
      <Score>{post.id}</Score>
      <span>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={post.link}
        >
          {post.title.rendered}
        </a>
      </span>
      <br />
      <Meta>
        {_embedded.author
          ? (
            <span className="by">
              by
              {' '}
              <a href={_embedded.author[0].link} className="">
                {_embedded.author[0].name}
              </a>
            </span>
          )
          : null
        }
        <span className="time">
          {' '}
          {post.date}
        </span>
        {_embedded.replies
          ? (
            <span className="comments-link">
              {' '}
              |
              {' '}
              <a href={post.link}>{`${_embedded.replies[0].length} comments`}</a>
            </span>
          )
          : null
        }
      </Meta>
    </Card>
  );
};

export default ({ posts }) => (
  <List>
    <ul>
      {
        posts.map(post => (
          <Post key={post.id} post={post} />
        ))
      }
    </ul>
  </List>
);
