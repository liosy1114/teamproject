import { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { accessToken } from "@/pages/accessToken";
import { PUBLIC_API_URL } from "@/pages/apiURL";
import Layout from "@/components/blocks/Layout/Layout";
import {
  Content,
  StyledForm,
  Title,
  RowBlock,
  PrivacySpan,
  AnswerDiv,
  AnswerButton,
  PageTitle,
  Textarea,
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

export default function QuestionAnswerPage() {
  // ステートの初期化
  const [inputTitle, setInputTitle] = useState("");
  const [inputContent, setInputContent] = useState("");
  const [inputPrivate, setInputPrivate] = useState(false);
  const [inputAnswer, setInputAnswer] = useState("");
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
      setInputTitle(data.question.title);
      setInputContent(data.question.content);
      setInputPrivate(data.question.isPrivate);
    };

    fetchData();
  }, []);

  // フォームの送信処理
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const headers = {
      Authorization: accessToken,
    };
    const { data }: { data: SampleData } = await axios.post(
      `${PUBLIC_API_URL}/qna/${id}`,
      {
        content: inputAnswer,
      },
      { headers }
    );
    router.push({
      pathname: `/question/${id}`,
    });
  };

  return (
    <Layout type="default">
      <AnswerDiv>
        <PageTitle>回答ページ</PageTitle>
        <StyledForm onSubmit={handleSubmit}>
          <div>
            <RowBlock>
              <Title>タイトル: {inputTitle}</Title>
              <PrivacySpan isPrivate={inputPrivate}>
                {inputPrivate ? "非公開" : "公開"}
              </PrivacySpan>
            </RowBlock>
            <Content>内容: {inputContent}</Content>
            <RowBlock>
              <Title>回答: </Title>
              <Textarea
                value={inputAnswer}
                onChange={(e) => setInputAnswer(e.target.value)}
              />
            </RowBlock>
          </div>
          <AnswerButton type="submit" onClick={() => {}}>
            提出
          </AnswerButton>
        </StyledForm>
      </AnswerDiv>
    </Layout>
  );
}
