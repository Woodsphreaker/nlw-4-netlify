import Head from 'next/head'
import {GetServerSideProps} from 'next'
import { useEffect } from 'react'
import Container from '../components/Container'
import ExperienceBar from '../components/ExperienceBar'
import MainContent from '../components/MainContent'
import { useChallenge } from '../context/ChallengeContext'
import withModal from '../components/Modal'

interface UserSavedData {
  level: number
  currentExperience: number
  challengesCompleted: number
}

const Index = (props: UserSavedData) => {

  const { loadUserSavedData } = useChallenge()

  useEffect(() => {
    const {
      level,
      currentExperience,
      challengesCompleted
    } = props

    loadUserSavedData(
      {
        level,
        challengesCompleted,
        currentExperience
      }
    )
  }, [])

  return (
  <Container>
    <Head>
      <title>
        Início | move.it
      </title>
    </Head>
    <ExperienceBar />
    <MainContent />
  </Container>
  )
}

export default withModal(Index)

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const cookiesData = ctx.req.cookies

  const {
    level,
    currentExperience,
    challengesCompleted
  } = cookiesData

  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted)
    }
  }
}
