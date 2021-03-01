import React, { createContext, ReactNode, useContext, useEffect, useState } from 'react'
import { useChallenge } from './ChallengeContext'

interface CountdownProps {
  children: ReactNode
}

interface CountdownProviderProps {
  minutes: number
  seconds: number
  hasFinish: boolean
  counterIsActive: boolean
  resetCountdown: () => void
  startCountdown: () => void
}

const CountdownContext = createContext({} as CountdownProviderProps)

const CountdownProvider = ({children}: CountdownProps) => {

  const { startNewChallenge, challengeTimeCourse } = useChallenge()
  const [time, setTime] = useState(challengeTimeCourse * 60)
  const [counterIsActive, setCounterActive] = useState(false)
  const [hasFinish, setHasFinish] = useState(false)
  const [counterID, setCounterID] = useState(null)
  const minutes = Math.floor(time / 60)
  const seconds = time % 60

  const startCountdown = () => {
    setCounterActive(true)
  }

  const resetCountdown = () => {
    setCounterActive(false)
    setTime(challengeTimeCourse * 60)
    setHasFinish(false)
    clearTimeout(counterID)
  }

  useEffect(() => {
    if(counterIsActive && time > 0) {
      return setCounterID(setTimeout(() => setTime((prevState) => prevState - 1) , 1000))
    }

    if (counterIsActive && time === 0) {
      setHasFinish(true)
      setCounterActive(false)
      return startNewChallenge()
    }

    return null

  }, [counterIsActive, time]);


  return (
    <CountdownContext.Provider value={
      {
        minutes,
        seconds,
        hasFinish,
        counterIsActive,
        resetCountdown,
        startCountdown
      }
    }>
      {children}
    </CountdownContext.Provider>
  )
}

export const useCountdown = () => useContext(CountdownContext)

export default CountdownProvider
