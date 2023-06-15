import styled from "styled-components";

// 네비게이션 스타일
export const Nav = styled.nav`
  color: white;
  background-color: black;
  margin: auto;
`;

// 바디 스타일
export const Body = styled.div`
  background-color: blanchedalmond;
`;

// 버튼 스타일
export const StyledButton = styled.button`
  display: block;
  float: right;
  margin-top: 20px;
  width: 140px;
  height: 45px;
  font-size: 20px;
  border: none;
  border-radius: 3px;
  background-color: #333;
  color: #fff;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #5f5f5f;
  }
`;

export const AnswerButton = styled.button`
  display: block;
  float: right;
  margin-right: 20px;
  margin-top: 20px;
  width: 140px;
  height: 45px;
  font-size: 20px;
  border: none;
  border-radius: 3px;
  background-color: #333;
  color: #fff;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #5f5f5f;
  }
`;

// 폼 스타일
export const FormGroup = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const StyledCheckboxLabel = styled.label`
  display: block;
  padding-top: 20px;
  margin-bottom: 10px
  font-size: 17px;
`;

export const StyledInput = styled.input`
  display: block;
  width: 100%;
  height: 40px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 3px;
  font-size: 16px;
  line-height: 1.4;
`;

export const Textarea = styled.textarea`
  display: block;
  width: 100%;
  height: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 3px;
  font-size: 16px;
  line-height: 1.4;
  resize: vertical;
`;

// 버튼 스타일
export const SubmitButton = styled.button`
  display: block;
  margin: 20px auto 0;
  margin-top: 30px;
  padding: 10px 20px;
  border: none;
  border-radius: 3px;
  background-color: gray;
  color: #ffffff;
  font-size: 16px;
  line-height: 1.4;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #5f5f5f;
  }
`;

export const EditDiv = styled.div`
  min-height: calc(100vh - 80px);
  padding: 2.75rem 0;
`;

export const AnswerDiv = styled.div`
  max-width: 1024px;
  padding: 40px;
  padding-left: 60px;
  margin: 0 0 100 100px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
`;

// 컨테이너 스타일
export const ContainerDiv = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  padding: 40px;
  background-color: #fff;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
`;

// 제목 스타일
export const Heading = styled.h1`
  margin-bottom: 20px;
  font-size: 32px;
  font-weight: 600;
  text-align: center;
`;

export const RowBlock = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Title = styled.h1`
  display: flex;
  margin-top: 10px;
  margin-bottom: 10px;
  margin-right: 20px;
  font-size: 24px;
  text-align: center;
`;
export const PageTitle = styled.h1`
  font-size: 36px;
  font-weight: 600;
  word-break: break-all;
`;

export const PrivacySpan = styled.span<{ isPrivate: boolean }>`
  font-size: 19px;
  margin-left: 10px;
  margin-right: 10px;
  margin-top: 10px;
  color: ${({ isPrivate }) => (isPrivate ? "#f00" : "#0f0")};
`;

export const StyledForm = styled.form`
  margin-top: 10px;
  flex-direction: column;
  align-items: center;
`;

export const ContentDiv = styled.div`
  margin-top: 20px;
`;
export const Content = styled.div`
  font-size: 16px;
  line-height: 1.5;
  margin-bottom: 20px;
  word-break: break-all;
`;
