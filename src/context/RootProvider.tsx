import React, { ComponentType, createContext, ReactNode } from 'react'
import ChallengeProvider from './ChallengeContext'
import CountdownProvider from './CountdownContext'
import ModalProvider from './ModalContext'

interface RootProviderProps {
  children: ReactNode
}

const providers = [ModalProvider, ChallengeProvider, CountdownProvider]

const RootContext = createContext({})

const combineProviders = (providers: Array<ComponentType>, children: ReactNode) => {
  const [Provider] = providers

  if (!Provider) {
    return children
  }

  return <Provider>{combineProviders(providers.slice(1), children)}</Provider>
}

const RootProvider = ({children}: RootProviderProps) => {
  return (
    <RootContext.Provider value={{}}>
      {
        combineProviders(providers, children)
      }
      {/* <ModalProvider>
        <ChallengeProvider>
          <CountdownProvider>
            {children}
          </CountdownProvider>
        </ChallengeProvider>
      </ModalProvider> */}
    </RootContext.Provider>
  )
}

export default RootProvider
