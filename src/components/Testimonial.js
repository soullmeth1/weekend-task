import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { ReactComponent as LeftAr } from '../assets/oval-icon-copy.svg';
import { ReactComponent as RightAr } from '../assets/oval-icon.svg';
import intersection from '../utils/intersection';
import useFetch from '../utils/useFetch';
import CardTestimony from './CardTestimony';

function Testimonial() {
  const [scrollLeft, setScrollLeft] = useState(true);
  const [scrollRight, setScrollRight] = useState(false);

  const { data, loading } = useFetch(
    'https://wknd-take-home-challenge-api.herokuapp.com/testimonial'
  );

  const el = useRef();
  const elScroll = useRef();

  useEffect(() => {
    intersection(el, () => {
      el.current.animate(
        {
          transform: ['translateX(-100%)', 'translateX(0)'],
          opacity: [0, 1],
        },
        {
          duration: 500,
          fill: 'forwards',
        }
      );
    });
  }, []);

  const handleRight = () => {
    const scroll = elScroll.current;
    if (scroll.scrollLeft < scroll.offsetWidth) {
      scroll.scrollTo(scroll.scrollLeft + 100, 0);
    }
    if (scroll.scrollLeft > scroll.offsetWidth) {
      setScrollRight(true);
    } else {
      setScrollRight(false);
      setScrollLeft(false);
    }
  };

  const handleLeft = (e) => {
    const scroll = elScroll.current;
    if (scroll.scrollLeft !== 0) {
      scroll.scrollTo(scroll.scrollLeft - 100, 0);
    }
    if (scroll.scrollLeft === 0) {
      setScrollLeft(true);
    } else {
      setScrollLeft(false);
      setScrollRight(false);
    }
  };

  return (
    <TestimonyContainer ref={el}>
      <h2 className="title">Testimonial</h2>
      <TestimonyStyle ref={elScroll}>
        <LeftAr opacity={scrollLeft ? 0.3 : 1} onClick={handleLeft} />
        {!loading &&
          data.map((val) => <CardTestimony key={val.id} data={val} />)}
        <RightAr opacity={scrollRight ? 0.3 : 1} onClick={handleRight} />
      </TestimonyStyle>
    </TestimonyContainer>
  );
}

export default Testimonial;

const TestimonyStyle = styled.div`
  display: flex;
  overflow-x: scroll;
  scroll-behavior: smooth;
  gap: 1rem;
  ::-webkit-scrollbar {
    display: none;
  }
  > svg {
    display: none;
    position: absolute;
    z-index: 1;
    cursor: pointer;

    @media only screen and (min-width: 400px) {
      :first-child {
        display: block;
        top: 60%;
        left: -75px;
      }
      :last-child {
        display: block;
        position: absolute;
        top: 60%;
        right: -5rem;
      }
    }
  }
`;

const TestimonyContainer = styled.div`
  position: absolute;
  top: -115px;
  left: 32px;
  right: 0;
  max-width: 619px;
  margin: 0 auto;
  z-index: 1;
  transform: translateX(-100%);
  > h2 {
    @media only screen and (min-width: 400px) {
      text-align: center;
    }
  }
  ::before {
    content: '';
    background-color: var(--blue);
    width: 89px;
    height: 89px;
    border-radius: 50%;
    display: block;
    position: absolute;
    top: -75px;
    left: 25px;
    z-index: -1;
    @media only screen and (min-width: 400px) {
      top: -50px;
      left: calc(-89px - 25px);
    }
  }
`;
