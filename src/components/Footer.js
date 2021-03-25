import styled from 'styled-components';

function Footer() {
  return (
    <FooterStyle>
      <div className="container flex">
        <p>wknd@2020</p>
        <span>alpha version 0.1</span>
      </div>
    </FooterStyle>
  );
}

export default Footer;

const FooterStyle = styled.div`
  padding: 2.7rem 2.4rem;
  background-color: var(--blue);
  color: var(--textWhite);
  div {
    justify-content: space-between;
  }
  p {
    font-size: 1.2rem;
    @media only screen and (min-width: 400px) {
      font-size: 1.4rem;
    }
  }
  span {
    border: 1px solid var(--textWhite);
    border-radius: 9px;
    padding: 3px 9px;
    @media only screen and (min-width: 400px) {
      font-size: 1.2rem;
    }
  }
`;
