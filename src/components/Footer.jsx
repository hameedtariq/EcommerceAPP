import { Facebook, Instagram, MailOutline , Phone, Pinterest, Room, Twitter } from "@material-ui/icons";
import styled from "styled-components";
import { mobil } from "../responsive";


const Container = styled.div`
    display: flex;
    ${mobil({flexDirection  : "column"})}

`

const Left = styled.div`
    flex:1;
    display: flex;
    flex-direction:column;
    padding: 20px;
`

const Logo = styled.h1`
    flex:1;
    
`
const Desc = styled.p`
    margin: 20px 0px;
    
`
const SocialContainer = styled.div`
    display: flex;
    
`
const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${props=> props.color};
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 20px;
`



const Center = styled.div`
    flex:1;
    padding: 20px;
    
`

const Title = styled.h3`
    margin-bottom: 30px;

`
const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`

const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
`

 
const Right = styled.div`
    flex:1;
    padding: 20px;
    
`
const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`

const Payment = styled.img`
    
`

const Footer = ()=> {
    return (
        <Container>
            <Left>
                <Logo>HEMS</Logo>
                <Desc>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo blanditiis aut amet consectetur. Voluptatum, voluptatibus. Quasi cum voluptas optio nihil nobis amet nam atque dolorum assumenda, voluptatem nesciunt quos aspernatur officia, voluptatibus laudantium neque a non id ipsa illo! Autem accusantium sequi pariatur suscipit enim beatae consectetur quod necessitatibus, non quasi nihil officiis tenetur optio voluptas dignissimos facere laborum maxime?
                </Desc>
                <SocialContainer>
                    <SocialIcon color="385999">
                        <Facebook/>
                    </SocialIcon>
                    <SocialIcon color="E4405F">
                        <Instagram/>
                    </SocialIcon>
                    <SocialIcon color="55ACEE"> 
                        <Twitter/>
                    </SocialIcon >
                    <SocialIcon color="E60023">
                        <Pinterest/>
                    </SocialIcon>
                </SocialContainer>
            </Left>
            <Center>
                <Title>Useful Links</Title>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Cart</ListItem>
                    <ListItem>Man Fashion</ListItem>
                    <ListItem>Woman Fashion</ListItem>
                    <ListItem>Accessories</ListItem>
                    <ListItem>My Account</ListItem>
                    <ListItem>Order Tracking</ListItem>
                    <ListItem>Wishlist</ListItem>
                    <ListItem>Terms</ListItem>

                </List>
            </Center>
            <Right>
                <Title>Contact</Title>
                <ContactItem>
                    <Room style={{marginRight: "10px"}}/>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, placeat?
                </ContactItem>
                <ContactItem>
                    <Phone style={{marginRight: "10px"}}/>
                    +1 234 456 66
                </ContactItem>
                <ContactItem>
                    <MailOutline style={{marginRight: "10px"}}/>
                    contact@hems.code
                </ContactItem>
                <Payment src = "https://i.ibb.co/Qfvn4z6/payment.png"/>
            </Right>
        </Container>
    )
}

export default Footer;