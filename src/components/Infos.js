import { useCallback, useEffect, useRef } from 'react';
import intersection from '../utils/intersection';
import HelpAndTips from './HelpAndTips';
import Info from './Info';

function Infos() {
  const el = useRef([]);
  const cb = useCallback((node) => {
    if (node) {
      el.current = [...node.childNodes];
    }
  }, []);

  useEffect(() => {
    // el.current = el.current?.childNodes;
    intersection(el, (element, i) => {
      element.animate(
        {
          transform: [`translateX(${-10 * (i + 1)}%)`, 'translateX(0)'],
          opacity: [0, 1],
        },
        {
          duration: 500,
          fill: 'forwards',
        }
      );
    });
  }, []);

  return (
    <div ref={cb}>
      <Info
        title={'POV'}
        desc={
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud ullamco laboris nisi ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. '
        }
      />
      <Info
        title={'Resource'}
        desc={
          'These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best'
        }
      />
      <HelpAndTips />
      <Info
        title="You're all set."
        desc="The wise man therefore always holds in these matters to this principle of solection."
      />
    </div>
  );
}

export default Infos;
