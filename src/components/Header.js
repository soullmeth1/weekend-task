import styled from 'styled-components';
import lego from '../assets/bitmap.png';
import bg from '../assets/bg-1.png';
import { useEffect, useRef } from 'react';

function Header() {
  const el = useRef();

  useEffect(() => {
    el.current.animate(
      {
        transform: ['translateX(-100%)', 'translateX(0)'],
        opacity: [0, 1],
      },
      { duration: 500 }
    );
  }, []);

  return (
    <HeaderStyle>
      <div ref={el}>
        <h1 className="wfh">WEEKEND FROM HOME</h1>
        <p className="italic">Stay active with a little workout.</p>
        <img src={lego} alt="Weekend Lego" />
      </div>
    </HeaderStyle>
  );
}

export default Header;

const HeaderStyle = styled.header`
  position: relative;
  color: var(--textWhite);
  overflow-x: hidden;
  font-size: 5.2rem;
  @media only screen and (min-width: 400px) {
    font-size: 6.2rem;
    margin-bottom: 3.6rem;
  }
  > div {
    text-align: center;
    position: relative;
    z-index: 1;
    h1 {
      @media only screen and (min-width: 400px) {
        margin-top: 8.7rem !important;
      }
    }
    p {
      margin-bottom: 6.7rem;
      @media only screen and (min-width: 400px) {
        font-size: 2.1rem;
      }
    }
    img {
      margin-bottom: 2rem;
      @media only screen and (min-width: 400px) {
        margin-bottom: 11.3rem;
      }
    }
  }
  ::after {
    content: '';
    background-image: url(${bg});
    background-size: cover;
    background-position: center bottom;
    background-repeat: no-repeat;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 0;
  }
`;
