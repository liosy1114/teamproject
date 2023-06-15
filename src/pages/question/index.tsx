import { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";
import { accessToken } from "@/pages/accessToken"; // アクセストークンの取得
import { PUBLIC_API_URL } from "@/pages/apiURL"; // APIのベースURL
import {
  Button,
  Container,
  Pagination,
  PostExpain,
  PostItem,
  PostList,
  QnaPrivacy,
  Title,
  ListForm,
} from "@/styles/components/StQuestionList.styles"; // スタイルのインポート
import Layout from "@/components/blocks/Layout/Layout"; // レイアウトコンポーネントのインポート
import dayjs from "dayjs";
import "dayjs/locale/es";

interface Qna {
  id: number;
  title: string;
  content: string;
  isPrivate: boolean;
  nickname: string;
  answerid: number | null;
  createdAt: string;
}

export default function QuestionListPage() {
  const [id, setid] = useState(1); // ページ番号の状態管理
  const [qnaList, setQnaList] = useState<Qna[]>([]); // 質問リストの状態管理
  const headers = {
    Authorization: accessToken, // リクエストヘッダーにアクセストークンを設定
  };

  useEffect(() => {
    const fetchData = async () => {
      const { data }: { data: Qna[] } = await axios.get(
        `${PUBLIC_API_URL}/qna/page/${id}`, // APIから質問リストを取得
        /* `http://3.39.9.214:80/qna/page/${id}`, */
        { headers }
      );
      console.log(data);
      setQnaList(data); // 取得した質問リストを状態にセット
    };

    fetchData();
  }, [id]); // idの変化に応じてデータの取得を行う

  return (
    <Layout type="default">
      {/* レイアウトコンポーネントの呼び出し */}
      <Container>
        <ListForm>
          <Title>QnA</Title> {/* ページのタイトル */}
          <Button>
            <Link href="/question/new">質問作成</Link>
            {/* 新しい質問作成ページへのリンク */}
          </Button>
        </ListForm>
        <PostList>
          <PostExpain>
            <div>質問のタイトル</div>
            <div>質問の作成者</div>
            <div>質問の作成日時</div>
            <div>質問の公開状態</div>
          </PostExpain>
          {qnaList.map((qna) => (
            <PostItem key={qna.id} href={`/question/${qna.id}`}>
              {/* 質問の詳細ページへのリンク */}
              <div>{qna.title}</div>
              <div>{qna.nickname}</div>
              <div>
                {dayjs(qna.createdAt)
                  .locale("en-us")
                  .format("dddd, MMMM D, YYYY")}
                {/* dayjsを使用して日付をフォーマット */}
              </div>
              <QnaPrivacy isPrivate={qna.isPrivate}>
                {qna.isPrivate ? "非公開" : "公開"}
                {/* 質問の公開状態に応じて表示を切り替え */}
              </QnaPrivacy>
            </PostItem>
          ))}
        </PostList>
        <Pagination>
          <Button
            onClick={() => {
              setid(id - 1); // 前のページへ移動
            }}
            disabled={id === 1} // 最初のページではボタンを無効化
          >
            前のページ
          </Button>
          <Button
            onClick={() => {
              setid(id + 1); // 次のページへ移動
            }}
          >
            次のページ
          </Button>
        </Pagination>
      </Container>
    </Layout>
  );
}
