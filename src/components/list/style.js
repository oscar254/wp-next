import styled from 'styled-components';

export const List = styled.div`
  position: absolute;
  margin: 30px 0;
  width: 100%;
  transition: all .5s cubic-bezier(.55,0,.1,1);
  background-color: #fff;
  border-radius: 2px;
  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }
`;

export const Card = styled.li`
  background-color: #fff;
  padding: 20px 30px 20px 80px;
  border-bottom: 1px solid #eee;
  position: relative;
  line-height: 20px;  
`;

export const Score = styled.span`
  color: #f60;
  font-size: 1.1em;
  font-weight: 700;
  position: absolute;
  top: 50%;
  left: 0;
  width: 80px;
  text-align: center;
  margin-top: -10px;
`;

export const Meta = styled.span`
  font-size: .85em;
  color: #828282;
  a {
    color: #828282;
    text-decoration: underline;
  }
`;
