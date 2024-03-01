import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <meta property="og:image" content="https://user0514.cdnw.net/shared/img/thumb/nekocyanPAKE5286-484_TP_V.jpg"/>
      <meta property="og:image:secure_url" content="https://user0514.cdnw.net/shared/img/thumb/nekocyanPAKE4491-427_TP_V.jpg" />
      <div>og:image</div>
    </>
  )
}
