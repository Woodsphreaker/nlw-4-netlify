import React from 'react';
import { useChallenge } from '../../context/ChallengeContext';
import { Header, ProgressBar } from './styles';

const ExperienceBar = () => {

  const {currentExperience, experienceToNextLevel} = useChallenge()
  const experiencePercentComplete = Math.round(currentExperience * 100) / experienceToNextLevel

  return (
    <Header>
      <span>0 xp</span>
      <ProgressBar experience={experiencePercentComplete}>
        <div />
        <span>
          {currentExperience} xp
        </span>
      </ProgressBar>
      <span>{experienceToNextLevel} xp</span>
    </Header>
  )
}

export default ExperienceBar;
