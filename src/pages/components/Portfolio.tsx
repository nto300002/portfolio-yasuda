import Link from "next/link";
import { client } from "../../libs/client";
import { emojis } from "../api/randomEmoji";
import ProfileIcon from "../components/ProfileIcon";

export default function Portfolio({ portfolio }:any) {
  return (
    <>
    <ProfileIcon />
    <h1>yasuda naotoのポートフォリオサイトです</h1>
    <div className="main">
      <ul>
        {portfolio.map((portfolio:any) => (
            <li key={portfolio.id}>
              <Link href={`/portfolio/${portfolio.id}`}>
              <p className="emoji" suppressHydrationWarning={true}>{emojis[Math.floor(Math.random() * emojis.length)]}</p>
              {portfolio.title}
              </Link>
            </li>
        ))}
      </ul>
    </div>
    </>
  );
}

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async () => {
  const data = await client.get({ endpoint: "portfolio" });

  return {
    props: {
      portfolio: data.contents,
    },
  };
};
