import React from 'react';
import { useChallenge } from '../../context/ChallengeContext';
import { Container, InfoPanel } from './styles';

const Profile: React.FC = () => {
  const { level } = useChallenge()
  return (
    <Container>
      <img src="https://github.com/Woodsphreaker.png" alt="Woods"/>
      <InfoPanel>
        <strong>Carlo Enrico</strong>
        <p>
          <img src="icons/level.svg" alt="level"/>
          Level {level}
        </p>
      </InfoPanel>
    </Container>
  );
}

export default Profile;
