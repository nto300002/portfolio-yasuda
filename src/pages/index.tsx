import { client } from "../libs/client";
import Portfolio from "./components/Portfolio";
import { Pagination } from "./components/Pagination"

export default function Home({ portfolio, totalCount }:any) {
  return (
    <>
      <Portfolio portfolio={portfolio} />
      <Pagination currentPageNumber={1} maxPageNumber={Math.ceil(totalCount / 4)} />
    </>
  );
}

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async () => {
  const offset = 0;
  const limit = 4;
  const queries = { offset: offset, limit: limit };
  const data = await client.get({ endpoint: "portfolio", queries: queries  });

  return {
    props: {
      portfolio: data.contents,
      totalCount: data.totalCount,
    },
  };
};
