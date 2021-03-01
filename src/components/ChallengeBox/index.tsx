import React from "react"
import { useChallenge } from "../../context/ChallengeContext";
import { useCountdown } from "../../context/CountdownContext";

import {
  Container,
  BoxInactiveContainer,
  BoxActiveContainer,
  Main,
  Footer,
  ButtonFailed,
  ButtonSucceeded
} from './styles';

const ChallengeBox: React.FC = () => {

  const {
    currentChallenge,
    completeChallenge,
    resetChallenge
  } = useChallenge()

  const {resetCountdown} = useCountdown()

  const succeededChallenge = () => {
    completeChallenge()
    resetCountdown()
  }

  const failedChallenge = () => {
    resetChallenge()
    resetCountdown()
  }

  const renderBoxChallenge = () => {

    if (currentChallenge) {
      const {amount, description, type} = currentChallenge
      return (
        <BoxActiveContainer>
          <header>Ganhe {amount} xp</header>

          <Main>
            <img src={`icons/${type}.svg`} alt=""/>
            <strong>Novo desafio</strong>
            <p>{description}</p>
          </Main>

          <Footer>
            <ButtonSucceeded onClick={succeededChallenge}>Completei</ButtonSucceeded>
            <ButtonFailed onClick={failedChallenge}>Falhei</ButtonFailed>
          </Footer>
        </BoxActiveContainer>
      )
    }

    return (
      <BoxInactiveContainer>
        <strong>Finalize um ciclo para receber um desafio</strong>
        <p>
          <img src="icons/level-up.svg" alt="Level Up"/>
          Avance de level completando desafios.
        </p>
      </BoxInactiveContainer>
    )
  }

  return (
    <Container>
      {renderBoxChallenge()}
    </Container>
  )
}

export default ChallengeBox;
