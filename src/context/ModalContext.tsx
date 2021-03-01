import React, { createContext, ReactNode, useContext, useState } from 'react'

interface ModalProps {
  children: ReactNode
}

interface ModalContext {
  showModal: boolean,
  userLevel: number,
  setShowModal: (status: boolean) => void
  setUserLevel: (status: number) => void
}

const ModalContext = createContext({} as ModalContext)

const ModalProvider = ({children}: ModalProps) => {

  const [showModal, setShowModal] = useState(false)
  const [userLevel, setUserLevel] = useState(1)

  return (
    <ModalContext.Provider value={{
        showModal,
        userLevel,
        setShowModal,
        setUserLevel
      }
    }>
      {children}
    </ModalContext.Provider>
  )
}

export const useModal = () => useContext(ModalContext)

export default ModalProvider
