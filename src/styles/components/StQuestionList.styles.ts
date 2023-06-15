import Link from "next/link";
import styled from "styled-components";

export const Container = styled.div`
  min-height: calc(100vh - 80px);
  padding: 2.75rem 0;
`;

export const Title = styled.h1`
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 20px;
`;

export const PostList = styled.div`
  list-style: none;
  padding: 0;
`;

export const PostItem = styled(Link)`
  display: grid;
  grid-template-columns: 5fr 1fr 3fr 1fr;
  & > div {
    text-align: center;
    padding: 0.75rem;
    border-bottom: 1px solid black;
  }
  & > div:first-child {
    text-align: start;
  }
`;

export const Pagination = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
`;

export const PageLink = styled.a`
  margin: 0 5px;
  padding: 5px 10px;
  color: #333;
  text-decoration: none;
  border: 1px solid #ccc;
  border-radius: 3px;

  &:hover {
    background-color: #f2f2f2;
  }
`;

export const PostCreatedAt = styled.div`
  font-size: 14px;
  color: #888;
  margin-left: 20px;
`;

export const PostExpain = styled.div`
  display: grid;
  grid-template-columns: 5fr 1fr 3fr 1fr;
  background-color: #686d76;
  color: white;
  & > div {
    text-align: center;
    padding: 0.75rem;
    border-bottom: 1px solid black;
  }
  & > div:first-child {
    text-align: start;
  }
`;

export const PostViews = styled.p`
  font-size: 14px;
  color: #888;
  margin: 0;
`;

export const QnaPrivacy = styled.div<{ isPrivate: boolean }>`
  color: ${({ isPrivate }) => (isPrivate ? "red" : "green")};
`;

export const Button = styled.button`
  display: block;
  float: right;
  margin-bottom: 20px;
  margin: 0 4px;
  height: 40px;
  padding: 5px 10px;
  color: #ffffff;
  background-color: #333;
  text-decoration: none;
  border: 1px solid #ccc;
  border-radius: 3px;

  &:hover {
    background-color: #5f5f5f;
  }
`;

export const ListForm = styled.div`
  display: flex;
  justify-content: space-between;
`;
