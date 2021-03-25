import { useCallback, useEffect, useRef } from 'react';
import styled from 'styled-components';
import icn from '../assets/group-4.png';
import intersection from '../utils/intersection';

function DefinitionSection() {
  const el = useRef([]);
  const cb = useCallback((target) => {
    if (target) {
      el.current = [...target.childNodes];
    }
  }, []);

  useEffect(() => {
    intersection(el, (tag) => {
      tag.animate(
        { transform: ['translateX(100%)', 'translateX(0)'], opacity: [0, 1] },
        { duration: 500, fill: 'forwards' }
      );
    });
  }, []);

  return (
    <DefinitionStyle>
      <div ref={cb}>
        <p className="def">
          <strong>Deffinition;</strong> a practice or exercise to test or
          improve one's fitness for athletic competition, ability, or
          performance to exhaust (something, such as a mine) by working to
          devise, arrange, or achieve by resolving difficulties.
          Merriam-Webster.com Dictionary.
        </p>
        <p className="italic weekend">-weekend team</p>
      </div>
    </DefinitionStyle>
  );
}

export default DefinitionSection;

const DefinitionStyle = styled.section`
  position: relative;
  padding: 22.1rem 3.2rem 22rem;
  font-size: 1.6rem;
  @media only screen and (min-width: 400px) {
    padding: 15.2rem 3.2rem 22.4rem;
    font-size: 2.1rem;
  }
  ::before {
    content: '';
    position: absolute;
    display: block;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background-image: url(${icn});
    background-repeat: no-repeat;
    background-position: top right;
  }
  strong {
    color: var(--blue);
  }
  div {
    margin: 0 auto;
    max-width: 62rem;
  }

  p.def {
    margin-bottom: 2rem;
    font-weight: 500;
    line-height: 1.5;
    letter-spacing: -0.57px;
    text-align: right;
    font-size: inherit;
    @media only screen and (min-width: 400px) {
      margin-bottom: 3rem;
    }
  }
  p.weekend {
    font-size: inherit;
    font-weight: 600;
    text-align: right;
    color: var(--textWhite);
  }
  p {
    opacity: 0;
  }
`;
