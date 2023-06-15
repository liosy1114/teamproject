import styled from "styled-components";

export const Container = styled.div`
  width: 1024px;
  margin: 0 auto;
  padding: 40px;
  background-color: #fff;
`;
export const AnswerContainer = styled.div`
  margin: 20px auto;
  padding-bottom: 40px;
  background-color: #fff;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
`;

export const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
`;

export const PageTitle = styled.h1`
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 20px;
`;

export const PostInfo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

export const PostMeta = styled.div`
  display: flex;
  align-items: center;
  margin-right: 20px;
`;

export const MetaLabel = styled.span`
  font-size: 14px;
  font-weight: bold;
  margin-right: 5px;
`;

export const MetaValue = styled.span`
  font-size: 14px;
  color: #888;
`;

export const Content = styled.div`
  font-size: 16px;
  line-height: 1.5;
  margin-bottom: 20px;
  word-break: break-all;
`;

export const ButtonGroup = styled.div`
  display: flex;
  float: right;
  align-items: center;
`;

export const Button = styled.button`
  margin-right: 10px;
  padding: 8px 16px;
  font-size: 16px;
  color: #ffffff;
  background-color: #333;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #5f5f5f;
  }
`;

export const QnaPrivacy = styled.span<{ isPrivate: boolean }>`
  font-size: 0.8rem;
  color: ${({ isPrivate }) => (isPrivate ? "#f00" : "#0f0")};
`;
