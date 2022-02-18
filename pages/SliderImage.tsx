import styled from "styled-components"
import styles from '../styles/Home.module.css'


const Slider = styled.div`
width: 100%;
height: auto;
display: flex;
background-size: 100%;
padding-top: 2rem;
padding-bottom: 2rem;
`

const SliderLeft = styled.div`
width: 50%;
position: relative;
height: 100%;
padding-top: 1.7rem;
padding-bottom: 1.7rem;
`

const SliderForm = styled.div`
background-color: white;
width: 45%;
border-radius: .3rem;
padding-top: .6rem;
padding-bottom: .6rem;
padding-left: 2rem;
padding-right: 2rem;
justify-content: center;
margin: auto;
`

const Title = styled.h1`
font-size: 2.8rem;
font-weight: 400;
text-align: center;
margin: 0;
padding: 0;
color: #131A34
`

const Subtitle = styled.h2`
text-align: center;
font-weight: bold;
font-size: 3rem;
margin: 0;
padding: 0;
margin-bottom: 2rem;
color: #1FADAF;
`

const Continue = styled.button`
border-radius: .2rem;
appearance: none;
border: none;
width: 100%;
padding-top: 1rem;
padding-bottom: 1rem;
margin-left: auto;
margin-right: auto;
display:flex;
background: #EFDC40;
justify-content: center;
`

const Slogan = styled.p`
text-align: center;
margin-left: auto;
margin-right: auto;
font-size: .85rem;
display:flex;
justify-content: center;
`
const Choose = styled.h2`
color: gray;
padding: 0;
margin: 0;
`
const SliderImage = () => {
    return (
        <div>
            <Slider className={styles.sliderImage}>
                <SliderLeft>
                    <Title>Let´s Check Out Your</Title>
                    <Subtitle>Lease Options</Subtitle>
                    <SliderForm>
                        <Choose>Choose Your Vehicle</Choose>
                        <form action="" className={styles.form1}>
                            <select name="" id="" className={styles.inputSelect}>
                                <option value="">
                                    Year
                                </option>
                            </select>
                            <select name="" id="" className={styles.inputSelect} disabled>
                                <option value="">
                                    Make
                                </option>
                            </select>
                            <select name="" id="" className={styles.inputSelect} disabled>
                                <option value="">
                                    Model
                                </option>
                            </select>
                            <select name="" id="" className={styles.inputSelect} disabled>
                                <option value="">
                                    Style
                                </option>
                            </select>
                            <Continue>Continue</Continue>
                        </form>
                        <Slogan>Helping consumers find the car that´s right for them since 1995.</Slogan>
                    </SliderForm>
                </SliderLeft>
            </Slider>
        </div>
    );
}

export default SliderImage