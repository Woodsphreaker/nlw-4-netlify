import React, {useState, useEffect} from "react";
import { Container, CountdownContainer, Counter, Separator, Button, FinishedButton } from './styles';

import { useChallenge } from '../../context/ChallengeContext'
import { useCountdown } from "../../context/CountdownContext";

const splitTime = (time) => {
  return time.toString().padStart(2, '0').split('')
}

const Countdown: React.FC = () => {

  const {
    minutes,
    seconds,
    hasFinish,
    counterIsActive,
    resetCountdown,
    startCountdown
  } = useCountdown()

  const [minuteLeft, minuteRight] = splitTime(minutes)
  const [secondLeft, secondRight] = splitTime(seconds)

  const renderButtonByCounterStatus = () => {

    if(hasFinish) {
      return <FinishedButton>Finalizado</FinishedButton>
    }

    if (counterIsActive) {
      return (
        <Button isActive={counterIsActive} onClick={resetCountdown}>
          Abandonar ciclo atual
        </Button>
      )
    }

    return (
      <Button isActive={counterIsActive} onClick={startCountdown}>
        Iniciar um ciclo
      </Button>
    )
  }

  return (
    <Container>
      <CountdownContainer>
        <Counter>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </Counter>
        <Separator>
          :
        </Separator>
        <Counter>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </Counter>
      </CountdownContainer>
      {
        renderButtonByCounterStatus()
      }
    </Container>
  )
}

export default Countdown;
