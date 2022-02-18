import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import SliderImage from './SliderImage'
import Navbar from './Navbar'
import SocialProof from './SocialProof'



const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Navbar/>
      <SliderImage/>
      <SocialProof/>
    </div>
  )
}

export default Home
