import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { accessToken } from "@/pages/accessToken";
import { PUBLIC_API_URL } from "@/pages/apiURL";
import Layout from "@/components/blocks/Layout/Layout";

// スタイルのインポート
import {
  StyledForm,
  StyledInput,
  StyledButton,
  StyledCheckboxLabel,
  Title,
  EditDiv,
  Textarea,
  PrivacySpan,
  FormGroup,
  ContentDiv,
  PageTitle,
} from "@/styles/components/StQuestionInput.styles";

// サーバーから取得するデータの型定義
interface SampleData {
  message: string;
}

export default function CreateQuestionPage() {
  // ステートの初期化
  const [inputTitle, setInputTitle] = useState("");
  const [inputContent, setInputContent] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const router = useRouter();

  // フォームの送信処理
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const headers = {
      Authorization: accessToken,
    };
    const { data }: { data: SampleData } = await axios.post(
      `${PUBLIC_API_URL}/qna`,
      {
        title: inputTitle,
        content: inputContent,
        isPrivate: isChecked,
      },
      { headers }
    );

    router.push({
      pathname: "/question",
    });

    console.log(data.message);
  };

  return (
    <Layout type="small">
      <EditDiv>
        <PageTitle>作成ページ</PageTitle>
        <StyledForm onSubmit={handleSubmit}>
          <ContentDiv>
            <FormGroup>
              <Title>タイトル</Title>
              <StyledCheckboxLabel>
                <PrivacySpan isPrivate={isChecked}>
                  {isChecked ? "非公開" : "公開"}
                </PrivacySpan>
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={() => setIsChecked(!isChecked)}
                />
              </StyledCheckboxLabel>
            </FormGroup>
            <StyledInput
              type="text"
              value={inputTitle}
              onChange={(e) => setInputTitle(e.target.value)}
            />
            <Title>内容</Title>
            <Textarea
              value={inputContent}
              onChange={(e) => setInputContent(e.target.value)}
            />
            <StyledButton type="submit">提出</StyledButton>
          </ContentDiv>
        </StyledForm>
      </EditDiv>
    </Layout>
  );
}
