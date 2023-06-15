import { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { accessToken } from "@/pages/accessToken";
import { PUBLIC_API_URL } from "@/pages/apiURL";
import Layout from "@/components/blocks/Layout/Layout";
import {
  Button,
  ButtonGroup,
  Container,
  Content,
  MetaLabel,
  MetaValue,
  PostInfo,
  PostMeta,
  Title,
  QnaPrivacy,
  AnswerContainer,
  PageTitle,
} from "@/styles/components/StQuestionDetail.styled";

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
  }[];
}

export default function QuestionDetailPage() {
  // stateの定義
  const [inputTitle, setInputTitle] = useState("");
  const [inputContent, setInputContent] = useState("");
  const [inputPrivate, setInputPrivate] = useState(false);
  const [inputNickName, setInputNickName] = useState("");
  const [inputDate, setInputDate] = useState("");
  const [inputAnswerId, setInputAnswerId] = useState<number | null>(null);
  const [answerContent, setAnswerContent] = useState("");

  // ルーターの取得
  const router = useRouter();
  const { id } = router.query;

  // リクエストヘッダーの設定
  const headers = {
    Authorization: accessToken,
  };

  useEffect(() => {
    // 質問のデータを取得する非同期関数
    const fetchData = async () => {
      const { data }: { data: SampleData } = await axios.get(
        `${PUBLIC_API_URL}/qna/${id}`,
        { headers }
      );
      setInputTitle(data.question.title);
      setInputContent(data.question.content);
      setInputPrivate(data.question.isPrivate);
      setInputNickName(data.question.nickname);
      setInputAnswerId(data.question.answerId ?? null);
      setInputDate(data.question.createdAt);
    };

    fetchData();
  }, []);

  const fetchAnswer = async () => {
    // 回答のデータを取得する非同期関数
    if (inputAnswerId !== null) {
      const { data } = await axios.get(
        `${PUBLIC_API_URL}/qna/${inputAnswerId}`,
        { headers }
      );
      const { answer } = data;
      setAnswerContent(answer[inputAnswerId - 1].content);
    }
  };

  useEffect(() => {
    fetchAnswer();
  }, [inputAnswerId]);

  const handleDelete = async () => {
    // 質問の削除を行う非同期関数
    try {
      const response = await axios.delete(`${PUBLIC_API_URL}/qna/${id}`, {
        headers,
      });
      alert("削除が完了しました。");
      router.push({ pathname: "/question" });
    } catch (error) {
      console.error(error);
      alert("削除中にエラーが発生しました。");
    }
  };

  const handleQuestionEdit = async () => {
    // 質問の編集ページに遷移する関数
    router.push(`./edit/${id}`);
  };

  return (
    <Layout type="default">
      <Container>
        <PageTitle>Detail Page</PageTitle>
        <Title>{inputTitle}</Title>
        <PostInfo>
          <PostMeta>
            <MetaLabel>作成日:</MetaLabel>
            <MetaValue>{inputDate}</MetaValue>
          </PostMeta>
          <PostMeta>
            <MetaLabel>作成者:</MetaLabel>
            <MetaValue>{inputNickName}</MetaValue>
          </PostMeta>
          <PostMeta>
            <MetaLabel>公開設定: </MetaLabel>
            <MetaValue>
              <QnaPrivacy isPrivate={inputPrivate}>
                {inputPrivate ? "非公開" : "公開"}
              </QnaPrivacy>
            </MetaValue>
          </PostMeta>
        </PostInfo>
        <Content>{inputContent}</Content>
        {inputAnswerId !== null && (
          <AnswerContainer>
            <Content>{answerContent}</Content>
          </AnswerContainer>
        )}
        <ButtonGroup>
          <Button onClick={handleQuestionEdit}>編集</Button>
          <Button onClick={handleDelete}>削除</Button>
          {inputAnswerId === null && (
            <Button onClick={() => router.push(`./answer/${id}`)}>
              回答する
            </Button>
          )}
        </ButtonGroup>
      </Container>
    </Layout>
  );
}
