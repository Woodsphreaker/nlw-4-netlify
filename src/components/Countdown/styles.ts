import styled, { css } from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`

export const CountdownContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-family: 'Rajdhani';
  font-weight: 600;
  color: var(--title);

`;

export const Counter = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  background-color: var(--white);
  box-shadow: 0 0 60px rgba(0,0,0,0.05);
  border-radius: 5px;
  font-size: 8.5rem;
  text-align: center;

  > span {
    flex: 1;
  }

  > span:first-child {
    border-right: 1px solid #f0f1f3;
  };

  > span:last-child {
    border-left: 1px solid #f0f1f3;
  }
`
export const Separator = styled.span`
 font-size: 6.25rem;
 margin: 0 0.5rem;
`

interface ButtonProps {
  isActive: Boolean
}

const buttonStyles = css`
  width: 100%;
  height: 5rem;
  margin-top: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0;
  border-radius: 5px;
  font-size: 1.25rem;
  font-weight: 600;
  outline: none;
  transition: background 0.5s;
`

export const Button = styled.button.attrs({
  type: 'button'
})`
 ${buttonStyles};
 background: ${({isActive}: ButtonProps ) => isActive ? 'var(--white)' : 'var(--blue)'};
 color: ${({isActive}: ButtonProps ) => isActive ? 'var(--title)' : 'var(--white)'};

 :hover {
   background: ${({isActive}: ButtonProps ) => isActive ? 'var(--red)' : 'var(--blue-dark)'};
   color: ${({isActive}: ButtonProps ) => isActive ? 'var(--white)' : 'var(--white)'};
 }
`

export const FinishedButton = styled.button`
  ${buttonStyles};
  background: var(--white);
  color: var(--text);
  cursor: not-allowed
`
