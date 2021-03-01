import styled, {css} from 'styled-components';

export const Container = styled.div`
  height: 100%;
  background: var(--white);
  border-radius: 5px;
  box-shadow: 0 0 60px rgba(0,0,0, 0.05);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
`;

export const BoxInactiveContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  strong {
    font-size: 1.5rem;
    font-weight: 500;
    line-height: 1.4;
    text-align: center;
  }

  p {
    display: flex;
    flex-direction: column;
    align-items: center;
    line-height: 1.4;
    max-width: 70%;
    margin-top: 3rem;
    text-align: center;

    > img {
      margin-bottom: 1rem;
    }
  }
`

export const BoxActiveContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;

  > header {
    color: var(--blue);
    font-weight: 600;
    font-size: 1.25rem;
    padding: 0 2rem 1.5rem;
    border-bottom: 1px solid var(--gray-line);
    text-align: center;
  }
`

export const Main = styled.main`
  flex: 1;
  display:flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  > img {

  }

  > strong {
    font-size: 2rem;
    font-weight: 600;
    color: var(--title);
    margin: 1.5rem 0 1rem;
  }

  > p {
    line-height: 1.5
  }

`

export const Footer = styled.footer`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1rem;
`

const buttonStyle = css`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 3rem;
  border: 0;
  border-radius: 5px;
  color: var(--white);
  font-size: 1rem;
  font-weight: 600;
  transition: filter 0.5s;

  :hover{
    filter: brightness(0.9)
  }
`

export const ButtonFailed = styled.button`
  ${buttonStyle}
  background: var(--red);
`
export const ButtonSucceeded = styled.button`
  ${buttonStyle}
  background: var(--green);
`
