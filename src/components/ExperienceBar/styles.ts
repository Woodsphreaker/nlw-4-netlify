import styled from 'styled-components'

interface ProgressBarProps {
  experience: number
}

export const Header = styled.header`
  display: flex;
  align-items: center;

  > span {
    font-size: 1rem;
  }
`

export const ProgressBar = styled.div`
  display: flex;
  flex: 1;
  height: 4px;
  border-radius: 4px;
  background-color: var(--gray-line);
  margin: 0 1.5rem;
  position: relative;

  > div {
    height: 4px;
    border-radius: 4px;
    width: ${({experience}: ProgressBarProps) => `${experience}%`};
    background-color: var(--green);
  }

  > span {
    position: absolute;
    left: ${({experience}: ProgressBarProps) => `${experience}%`};
    top: 12px;
    transform: translateX(-50%)
  }

`
