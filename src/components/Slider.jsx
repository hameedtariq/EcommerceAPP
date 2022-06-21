import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons'
import styled from 'styled-components'
import {sliderItems} from '../data'
import { useEffect, useState } from 'react'
import { mobil } from '../responsive'


const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    /* background-color: coral; */
    position: relative;
    overflow: hidden;
    ${mobil({display  : "none"})}

`

const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: #fff7f7;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${props=> props.direction === 'left' && '10px'};
    right: ${props=> props.direction === 'right' && '10px'};
    margin: auto;
    cursor: pointer;
    opacity: 0.5;
    z-index: 2;
`

const Wrapper = styled.div`
    height: 100%;
    display: flex;
    transition: all 1s ease;
    transform: translateX(${props => props.activeSlide * -100}vw);
`

const Slide = styled.div`
    display: flex;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background-color: #${props => props.bg};
`
const ImageContainer = styled.div`
    flex: 1;
    position: relative;
    height: 100%;
`

const BgCircle = styled.div`
    width: 25vw;
    height: 25vw;
    border-radius: 50%;
    position: relative;
    top:20px;
    left: 30px;
    background-color: #ce2121;
    /* opacity: 0.9; */
`

const Image = styled.img`
    height: 80%;
    /* width: 100%; */
    object-fit:contain ;
    position: absolute;
    top: 0;
    left: 0;
    bottom:0;
    right: 0;
    margin: auto;
    z-index: 2;
    
`

const InfoContainer = styled.div`
    flex: 1;
    padding: 50px;
`

const Title = styled.h1`
    font-size: 70px;
`

const Desc = styled.p`
    margin: 50px 0px;
    font-weight: 500;
    letter-spacing: 3px;
`

const Button = styled.button`
    padding: 10px;
    font-size: 20px;
    background-color: transparent;
    cursor: pointer;    
`





const Slider = () => {
    const [slideIndex,setSlideIndex] = useState(0);
    
    const handleClick = (direction)=> {
        if(direction === 'left')
        {
            setSlideIndex(slideIndex > 0 ? slideIndex-1 : sliderItems.length -1)
        }
        else{
            setSlideIndex(slideIndex < sliderItems.length-1 ? slideIndex+1 : 0)
        }
    }
    useEffect(()=> {
        const timeout = setTimeout(()=> {
            handleClick("right");
        },10000);

        return ()=> {
            clearTimeout(timeout);
        }
    })
    return (
        <Container>
            <Arrow direction="left" onClick={()=>handleClick('left')}>
                <ArrowLeftOutlined/>
            </Arrow>
            <Wrapper activeSlide = {slideIndex}> 
                {
                    sliderItems.map(item => (
                        <Slide bg={item.bg} key={item.id}>
                            
                            <ImageContainer>
                                <Image src={item.img}/>
                                <BgCircle/>
                            </ImageContainer>
                            <InfoContainer>
                                <Title>{item.title}</Title>
                                <Desc>{item.desc}</Desc>
                                <Button>SHOP NOW</Button>
                            </InfoContainer>
                        </Slide>
                    ))
                }
                
               
            </Wrapper>
            <Arrow direction="right" onClick={()=>handleClick('right')}>
                <ArrowRightOutlined/>
            </Arrow>
        </Container>
    )
}

export default Slider