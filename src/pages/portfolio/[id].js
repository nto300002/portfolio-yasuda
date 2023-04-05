import { client } from "../../libs/client";
import { emojis } from "../api/randomEmoji";

export default function portfolioId({ portfolio }) {
  return (
    <main>
      <div className="main">
      <p>作成日時：{portfolio.publishedAt}</p>
        <div className="content">
        <p className="emoji" suppressHydrationWarning={true}>{emojis[Math.floor(Math.random() * emojis.length)]}</p>
        <h1>{portfolio.title}</h1>
          <div
            dangerouslySetInnerHTML={{
              __html: `${portfolio.content}`,
            }}
          />
        </div>
      </div>
    </main>
  );
}

// 静的生成のためのパスを指定します
export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: "portfolio" });

  const paths = data.contents.map((content) => `/portfolio/${content.id}`);
  return { paths, fallback: false };
};

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async (context) => {
  const id = context.params.id;
  const data = await client.get({ endpoint: "portfolio", contentId: id });

  return {
    props: {
      portfolio: data,
    },
  };
};
