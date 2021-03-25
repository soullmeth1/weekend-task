import CardTip from './CardTip';
import styled from 'styled-components';
import path from '../assets/path-3.svg';
import useFetch from '../utils/useFetch';

function HelpAndTips() {
  const { data, loading } = useFetch(
    'https://wknd-take-home-challenge-api.herokuapp.com/help-tips'
  );

  return (
    <CardTipsStyle>
      <h2 className="title">Help & Tips</h2>
      <div>
        {!loading && data.map((val) => <CardTip key={val.id} data={val} />)}
      </div>
    </CardTipsStyle>
  );
}

export default HelpAndTips;

const CardTipsStyle = styled.div`
  margin-bottom: 6.7rem;
  position: relative;
  @media only screen and (min-width: 400px) {
    text-align: center;
    margin-bottom: 12.7rem;
    margin-top: 10rem;
    ::after {
      content: url(${path});
      display: block;
      right: 12.7rem;
      top: 0;
      position: absolute;
      z-index: 0;
    }
  }
  > div {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    @media only screen and (min-width: 400px) {
      flex-direction: row;
      text-align: center;
      justify-content: center;
      position: relative;
      z-index: 1;
    }
  }
`;
