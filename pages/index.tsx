import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import SliderImage from './SliderImage'
import Navbar from './Navbar'
import img from '../public/backtest.jpg'



const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Navbar/>
      <SliderImage/>
    </div>
  )
}

export default Home
