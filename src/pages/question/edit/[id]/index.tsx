import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { accessToken } from "@/pages/accessToken";
import { PUBLIC_API_URL } from "@/pages/apiURL";
import Layout from "@/components/blocks/Layout/Layout";

// スタイルのインポート
import {
  EditDiv,
  StyledForm,
  StyledInput,
  StyledButton,
  StyledCheckboxLabel,
  Title,
  Textarea,
  FormGroup,
  PrivacySpan,
  ContentDiv,
  PageTitle,
} from "@/styles/components/StQuestionInput.styles";

// サーバーから取得するデータの型定義
interface SampleData {
  question: {
    answerId: number;
    content: string;
    createdAt: string;
    id: number;
    isPrivate: boolean;
    nickname: string;
    title: string;
  };
  answer: {
    id: number;
    content: string;
    nickname: string;
    questionId: number;
    createdAt: string;
  };
}

export default function QustionEditPage() {
  // ステートの初期化
  const [currentTitle, setCurrentTitle] = useState("");
  const [currentContent, setCurrentContent] = useState("");
  const [currentPrivate, setCurrentPrivate] = useState(false);
  const router = useRouter();
  const { id } = router.query;
  const headers = {
    Authorization: accessToken,
  };

  // 質問データの取得
  useEffect(() => {
    const fetchData = async () => {
      const { data }: { data: SampleData } = await axios.get(
        `${PUBLIC_API_URL}/qna/${id}`,
        { headers }
      );

      setCurrentTitle(data.question.title);
      setCurrentContent(data.question.content);
      setCurrentPrivate(data.question.isPrivate);
    };

    fetchData();
  }, []);

  // フォームの送信処理
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const headers = {
      Authorization: accessToken,
    };
    const { data }: { data: SampleData } = await axios.put(
      `${PUBLIC_API_URL}/qna/${id}`,
      {
        title: currentTitle,
        content: currentContent,
        isPrivate: currentPrivate,
      },
      { headers }
    );

    router.push({
      pathname: "/question",
    });
  };

  return (
    <Layout type="default">
      <EditDiv>
        <PageTitle>修正ページ</PageTitle>
        <StyledForm onSubmit={handleSubmit}>
          <ContentDiv>
            <FormGroup>
              <Title>タイトル</Title>
              <StyledCheckboxLabel>
                <PrivacySpan isPrivate={currentPrivate}>
                  {currentPrivate ? "Private" : "Public"}
                </PrivacySpan>
                <input
                  type="checkbox"
                  checked={currentPrivate}
                  onChange={() => setCurrentPrivate(!currentPrivate)}
                />
              </StyledCheckboxLabel>
            </FormGroup>
            <StyledInput
              type="text"
              value={currentTitle}
              onChange={(e) => setCurrentTitle(e.target.value)}
            />
            <Title>内容</Title>
            <Textarea
              value={currentContent}
              onChange={(e) => setCurrentContent(e.target.value)}
            />
            <StyledButton type="submit" onClick={() => {}}>
              提出
            </StyledButton>
          </ContentDiv>
        </StyledForm>
      </EditDiv>
    </Layout>
  );
}
