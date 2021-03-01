import styled, {keyframes} from 'styled-components';

interface ModalProps {
  modalActive: boolean
}

const backdropAnimationIn = keyframes`
  from {
    opacity: 0
  }

  to {
    opacity: 1;
  }
`

const backdropAnimationOut = keyframes`
  from {
    opacity: 1
  }

  to {
    opacity: 0;
  }
`

const modalContainerAnimation = keyframes`
  0% {
    transform: translateY(-100vh)
  }

  60% {
    transform: translateY(13rem)
  }

  100% {
    transform: translateY(0)
  }
`

export const Backdrop = styled.div`
  display: ${({modalActive}: ModalProps) => modalActive ? 'flex' : 'none'};
  // display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background: rgba(0,0,0,0.5);
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  z-index: 10;
  animation: ${backdropAnimationIn} linear 0.3s forwards;
`

export const ModalContainer = styled.div`
 display: flex;
 flex-direction: column;
 background: var(--white);
 width: 100%;
 max-width: 38rem;
 height: fit-content;
 min-height: 18rem;
 padding: 1rem;
 border-radius: 5px;
 box-shadow: 0 0 60px rgba(0,0,0,0.05);
 transform: translateY(-1000px);
 animation: ${modalContainerAnimation} linear 0.3s forwards;
 animation-delay: 0.3s;
`

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* border-bottom: 1px solid var(--gray-line);
  padding-bottom: 1rem; */
`

export const Title = styled.div`
  font-size: 1.1rem;
  font-weight: 600;
`

export const CloseButton = styled.img`
  cursor: pointer;
`

export const ModalBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
  flex: 1;

  > header {
    font-size: 8.75rem;
    font-weight: 600;
    color: var(--blue);
    background: url('/icons/levelup.svg') no-repeat center;
    background-size: contain;
    width: 100%;
    text-align: center;

  }

  strong {
    font-size: 2.25rem;
    color: var(--title);
  }

  > p {
    font-size: 1.25rem;
    color: var(--text);
    margin-top: 0.25rem;
  }
`
