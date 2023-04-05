import {useState} from "react";
import axios from "axios";

const Search = () => {
  const [keyword, setKeyword] = useState("");
  const [portfolios, setPortfolios] = useState([]);
  const [show, setShow] = useState(false)

  const searchPortfolio = async () => {
    // 検索APIにリクエストを送信
    const res = await axios.get("/api/portfolio", {
      params: {
        keyword,
      },
    });
    // 検索結果をセット
    setPortfolios(res.data.contents);
    setShow(true)
  };

  return (
    <>
      <div style={{display: "flex"}}>
        <input
          value={keyword}
          placeholder="Search"
          onChange={(e) => setKeyword(e.target.value)}
        />
          <button onClick={searchPortfolio} style={{marginLeft: "4px"}}>
            検索実行
          </button>
      </div>
      <div style={{marginTop: "24px"}}>
          { portfolios &&  
            portfolios.map((portfolio, index):any => (
              <div
                key={index}
                style={{
                  border: "1px solid #E2E8F0",
                  padding: "12px",
                  marginTop: "8px",
                }}
              >
                {/* <h2>{portfolio.title}</h2> */}
              </div>
            )) }

        { show ? (    
          <p>a</p>               
        ):(
          <></>
        )
        }
      </div>
    </>
  )
}

export default Search
