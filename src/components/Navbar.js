import styled from 'styled-components';
import logo from '../assets/bitmap(1).png';

const NavStyle = styled.nav`
  padding: 1.7rem 2.4rem;
  gap: 1.3rem;

  div > p:first-child {
    font-size: 1.2rem;
  }
`;

function Navbar() {
  return (
    <nav style={{ backgroundColor: 'var(--textWhite)' }}>
      <NavStyle className="container flex">
        <img src={logo} alt="Weekend Inc Logo" />
        <div>
          <p>Good Morning</p>
          <p>
            <strong>Fellas</strong>
          </p>
        </div>
      </NavStyle>
    </nav>
  );
}

export default Navbar;
