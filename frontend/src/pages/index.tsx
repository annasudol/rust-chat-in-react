import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React, { ReactElement } from 'react'
import CardBox from '../components/CardBox'
import NoAuthenticated from '../layouts/NoAuthenticated'
import SectionMain from '../components/Section/Main'
import { gradientBgPurplePink } from '../colors'
import { appTitle } from '../config'
import { useAppDispatch } from '../stores/hooks'
import { setDarkMode } from '../stores/darkModeSlice'

const StyleSelectPage = () => {
  const dispatch = useAppDispatch()

  dispatch(setDarkMode(false))

  const styles = ['white', 'basic']

  const router = useRouter()

  const handleStylePick = (e: React.MouseEvent, style: string) => {
    e.preventDefault()

    document.documentElement.classList.forEach((token) => {
      if (token.indexOf('style') === 0) {
        document.documentElement.classList.replace(token, `style-${style}`)
      }
    })

    router.push('/dashboard')
  }

  return (
    <>
      <Head>
        <title>{appTitle}</title>
      </Head>
    </>
  )
}

StyleSelectPage.getLayout = function getLayout(page: ReactElement) {
  return <NoAuthenticated>{page}</NoAuthenticated>
}

export default StyleSelectPage
