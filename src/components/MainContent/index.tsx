import React from 'react';
import CompleteChallenges from '../CompleteChallenges';
import Countdown from '../Countdown';
import Profile from '../Profile';
import ChallengeBox from '../ChallengeBox'

import { Container, Panel } from './styles';

const MainContent: React.FC = () => {
  return (
    <Container>
      <Panel>
        <Profile />
        <CompleteChallenges />
        <Countdown />
      </Panel>
      <Panel>
        <ChallengeBox />
      </Panel>
    </Container>
  )
}

export default MainContent;
