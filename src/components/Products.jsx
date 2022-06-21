import styled from 'styled-components'
import { popularProducts } from '../data'
import Product from './Product'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'


const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`


const Products = ({cat, sort, filters})=> {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    // update products as the category changes
    useEffect(()=> {
        const getProducts = async ()=> {
            try {
                const res = cat ? await axios.get(`http://localhost:5000/api/products/?category=${cat}`) : await axios.get(`http://localhost:5000/api/products`);
            // console.log(data)
            if(res.data.success)
            {

                setProducts(res.data.products) 
            }
            } catch (error) {
                console.log(error)
            } 
        }
        getProducts();
    },[cat])


    // updating the fetched products by applying filters on them
    useEffect(()=> {
        cat && setFilteredProducts(
            products.filter(item => Object.entries(filters).every(([key,value]) =>  item[key].includes(value)))
        )
        console.log(products,filteredProducts); 
    }, [products, cat, filters])


    useEffect(()=> {
        if(sort === 'newest')
        {
            setFilteredProducts(prev => [...prev].sort((a,b) => a.createdAt - b.createdAt))
        }else if(sort === 'asc'){
            setFilteredProducts(prev => [...prev].sort((a,b) => a.price - b.price))
        }
        else if(sort === 'desc'){
            setFilteredProducts(prev => [...prev].sort((a,b) => b.price - a.price))
        } 
    }, [sort])


    return (
        <Container>
            {
                cat ? filteredProducts.map((item) => {
                    return <Product item = {item} key={item.id}/>
                }) : products.slice(0,8).map((item) => {
                    return <Product item = {item} key={item.id}/>
                })
            }
        </Container>
    )
}

export default Products