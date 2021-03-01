import React, {
  ComponentType,
  ReactChild,
  ReactNode
} from 'react';

import { useModal } from '../../context/ModalContext'

import {
  Backdrop,
  ModalContainer,
  ModalHeader,
  Title,
  CloseButton,
  ModalBody
} from './styles';

const withModal = (Component: ComponentType<any | string> ) => (props: any) => {

  const {
    showModal,
    userLevel,
    setShowModal
  } = useModal()

  return (
    <>
      <Backdrop modalActive={showModal}>
        <ModalContainer>
          <ModalHeader>
            <Title />
            <CloseButton
              src='/icons/close.svg'
              onClick={() => setShowModal(false)}
            />
          </ModalHeader>
          <ModalBody>
            <header>{userLevel}</header>
            <strong>Parabéns</strong>
            <p>Você alcançou um novo level</p>
          </ModalBody>
        </ModalContainer>
      </Backdrop>
      <Component {...props} />
    </>
  );
}

export default withModal;
