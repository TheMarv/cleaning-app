import styled from 'styled-components';
import Link from 'next/link';

export default function Layout({ children }) {
  return (
    <>
      <StyledMain>{children}</StyledMain>
      <StyledNavbar>
        <Link href="/">
          <a href="/">Rooms</a>
        </Link>
        <Link href="/mates">
          <a href="/persons">Flat Mates</a>
        </Link>
      </StyledNavbar>
    </>
  );
}
const StyledNavbar = styled.nav`
  position: absolute;
  inset: auto 0 0 0;
  display: flex;
  a {
    flex-grow: 1;
    text-align: center;
    padding: 1rem;
    text-decoration: none;
  }
`;

const StyledMain = styled.main`
  padding: 1rem 1rem 3rem;
`;
