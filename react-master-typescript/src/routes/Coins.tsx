import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { fetchCoins } from "../api";
import { useQuery } from "react-query";

const Container = styled.div`
  padding: 0px 20px;
  max-width: 480px;
  margin: 0 auto;
`;

const Header = styled.header`
  height: 15vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CoinsList = styled.ul``;

const Coin = styled.li`
  background-color: white;
  color: ${(props) => props.theme.bgColor};
  border-radius: 15px;
  margin-bottom: 10px;
  a {
    display: flex;
    align-items: center;
    padding: 20px;
    transition: color 0.2s ease-in;
  }
  &:hover {
    a {
      color: ${(props) => props.theme.accentColor};
    }
  }
`;

const Title = styled.h1`
  font-size: 48px;
  color: ${(props) => props.theme.accentColor};
`;

const Loader = styled.span`
  text-align: center;
  display: block;
`;

const Img = styled.img`
  width: 35px;
  height: 35px;
  margin-right: 10px;
`;

interface ICoin {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
}

function Coins() {
  //react query 는 데이터를 캐쉬에 저장하고 있다. 페이지 이동후 다시 돌아와도 loading 이 작동하지 않는다.
  const { isLoading, data } = useQuery<ICoin[]>("allCoins", fetchCoins);

  /* useEffect 두번째 파라매터 값을 입력 안하면 무한호출 함 */
  /* 별도의 변수를 지정하여 함수를 생성 하지 않고 싶을때 ()(); 사용하여 라인에서 바로 함수를 실행 할수있게 한다. */
  // const [coins, setCoins] = useState<CoinInterface[]>([]);
  // const [loading, setLoading] = useState(true);
  // useEffect(() => {
  //   (async () => {
  //     const result = await (
  //       await fetch("https://api.coinpaprika.com/v1/coins")
  //     ).json();

  //     setCoins(result.slice(0, 100));
  //     setLoading(false);
  //   })();
  // }, []);

  return (
    <Container>
      <Header>
        <Title>코인</Title>
      </Header>
      <CoinsList>
        {isLoading ? (
          <Loader> Loding ... </Loader>
        ) : (
          data?.slice(0, 100).map((coin) => (
            <Coin key={coin.id}>
              <Link
                to={{
                  pathname: `/${coin.id}`,
                  state: {
                    name: coin.name,
                  },
                }}
              >
                <Img
                  src={`https://coinicons-api.vercel.app/api/icon/${coin.symbol.toLowerCase()}`}
                />
                {coin.name} &rarr;
              </Link>
            </Coin>
          ))
        )}
      </CoinsList>
    </Container>
  );
}
export default Coins;
