import { client } from "../../../libs/client";
import Portfolio from "../../components/Portfolio";
import { Pagination } from "../../components/Pagination"

export default function PortfolioPageId({ portfolio, totalCount, currentPageNumber }) {
  return (
    <>
      <Portfolio portfolio={portfolio} />
      <Pagination currentPageNumber={currentPageNumber} maxPageNumber={Math.ceil(totalCount / 4)} />
    </>
  );
}

export const getStaticPaths = async () => {
  const range = (start, end) => [...Array(end - start + 1)].map((_, i) => start + i);
  const data = await client.get({ endpoint: 'portfolio' });

  const { totalCount } = data;
  const paths = range(1, Math.ceil(totalCount / 4)).map((i) => `/portfolio/page/${i}`);
  return { paths, fallback: false };
};

export const getStaticProps = async (context) => {
  const numId = context.params.id;
  const offset = (numId - 1) * 4;
  const limit = 4;
  const queries = { offset: offset, limit: limit };
  const data = await client.get({ endpoint: 'portfolio', queries: queries });


  return {
    props: {
      portfolio: data.contents,
      totalCount: data.totalCount,
      currentPageNumber: numId,
    },
  };
};
