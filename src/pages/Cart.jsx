import { Add, Remove } from '@material-ui/icons'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { mobil } from '../responsive'


const Container = styled.div`
    
`


const Wrapper = styled.div`
    padding: 20px;
    ${mobil({padding: "10px"})}

`
const Title = styled.h1`
    font-weight: 300;
    text-align: center;
`
const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
`

const TopButton = styled.button`
    padding: 10px;
    font-weight: 600;
    cursor: pointer;
    border: ${props => props.type === 'filled' && 'none'};
    background-color: ${props => props.type === 'filled' ? 'black' : 'transparent'};
    color: ${props => props.type === 'filled' && 'white'};


`
const TopTexts = styled.div`
    ${mobil({display: "none"})}
    
`

const TopText = styled.span`
    text-decoration: underline;
    cursor: pointer;
    margin: 0px 10px;
`


const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
    ${mobil({flexDirection: "column"})}

`
const Info = styled.div`
    flex: 3;
`


const Product = styled.div`
    display: flex;
    align-items: center;
    ${mobil({flexDirection: "column"})}

`
const ProductDetails = styled.div`
    flex: 2;
    display: flex;
    
`
const Image = styled.img`
    width: 200px;
`
const Details = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    
`
const ProductName = styled.span``
const ProductId = styled.span``
const ProductSize = styled.span``

const ProductColor = styled.div`
    height: 20px;
    width: 20px;
    border-radius: 50%;
    background-color: ${props => props.color};
`
const PriceDetails = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    
`
const ProductAmountContainer = styled.div`
    display: flex;
    align-items: center;

`
const ProductAmount = styled.div`
    font-size: 24px;
    margin: 5px;
    ${mobil({margin: "5px 15px"})}

`
const ProductPrice = styled.div`
    font-size: 30px;
    font-weight: 300;
    margin-top: 10px;
    ${mobil({marginBottom: "20px"})}

`

const Hr = styled.div`
    border: none;
    background-color: #eee;
    height: 1px;
`

const Summary = styled.div`
    flex: 1;
    /* background-color: red; */
    border: 0.5px solid lightgray;
    border-radius: 10px;
    padding: 20px;
    height: 50vh;
`

const SummaryTitle = styled.h1`
    font-weight: 200;
`

const SummaryItemText = styled.span`
    
`

const SummaryItem = styled.div`
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
    font-weight: ${props=> props.type === 'total' && '500'};
    font-size: ${props=> props.type === 'total' && '24px'};

`
const SummaryItemPrice = styled.span`
    
`


const Button = styled.button`
    width: 100%;
    padding: 10px;
    background-color: black;
    color: white;
    font-weight: 600;
`




// const  = styled.div``


const Cart = ()=> {
    const cart = useSelector((states) => states.cart)
    console.log(cart);
    return(
        <Container>
            <Announcement/>
            <Navbar/>
            <Wrapper>
                <Title>Your Bag</Title>
                <Top>
                    <TopButton>CONTINUE SHOPPING</TopButton>
                    <TopTexts>
                        <TopText>Shopping Bag (2)</TopText>
                        <TopText>Your Wishlist (0)</TopText>

                    </TopTexts>
                    <TopButton type='filled'>CHECKOUT NOW</TopButton>

                </Top>
                <Bottom>
                    <Info>
                        {cart.products.map((product) => {
                            return(
                                <>
                                <Product>
                            <ProductDetails>
                                <Image src={product.img}/>
                                <Details>
                                    <ProductName><b>Product: </b>{product.title}</ProductName>
                                    <ProductId>
                                        <b>ID: </b>{product._id}
                                    </ProductId>
                                    <ProductColor color={product.color}/>

                                    <ProductSize>
                                        <b>Size: </b>{product.size}
                                    </ProductSize>

                                </Details>
                            </ProductDetails>
                            <PriceDetails>
                                <ProductAmountContainer>
                                    <Add/>
                                    <ProductAmount>
                                        {product.quantity}
                                    </ProductAmount>
                                    <Remove/>
                                </ProductAmountContainer>
                                <ProductPrice>
                                    {product.quantity* product.price}
                                </ProductPrice>
                            </PriceDetails>
                        </Product>
                        <Hr/>
                        </>
                            )
                        })}
                        
                    </Info>
                    <Summary>
                        <SummaryTitle>
                            ORDER SUMMARY
                        </SummaryTitle>
                        <SummaryItem>
                            <SummaryItemText>
                                Subtotal
                            </SummaryItemText>
                            <SummaryItemPrice>
                                {cart.total}
                            </SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>
                                Estimated Shipping 
                            </SummaryItemText>
                            <SummaryItemPrice>
                                $ 5.90
                            </SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>
                                Shipping Discount 
                            </SummaryItemText>
                            <SummaryItemPrice>
                                30 %
                            </SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem type="total">
                            <SummaryItemText>
                                Total 
                            </SummaryItemText>
                            <SummaryItemPrice>
                               {cart.total + 5.90 * 0.7}
                            </SummaryItemPrice>
                        </SummaryItem>
                        <Button>CHECKOUT NOW</Button>
                   
                    </Summary>
                </Bottom>
            </Wrapper>
            <Footer/>
        </Container>
    )

}

export default Cart