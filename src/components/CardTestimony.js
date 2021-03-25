import styled from 'styled-components';

function CardTestimony({ data }) {
  return (
    <TestiStyle>
      <h2>{data.by}</h2>
      <p>{data.testimony}</p>
    </TestiStyle>
  );
}

export default CardTestimony;

const TestiStyle = styled.div`
  box-sizing: border-box;
  min-width: 24.7rem;
  background-color: var(--textWhite);
  color: var(--textBlack);
  padding: 2rem;
  text-align: left;
  p {
    font-size: 1.2rem;
    margin-top: 2rem;
    letter-spacing: -0.43px;
  }
`;
