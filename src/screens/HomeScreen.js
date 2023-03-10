import React, { useState, useEffect } from 'react'
import { Row, Col } from 'react-bootstrap'
// import products from '../products'
import Product from '../components/Product'
import Loader from '../components/Loader'
// import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux' 
import { listProducts } from '../actions/productActions'
import Message from '../components/Message'
import { useLocation, useNavigate } from 'react-router-dom'


function HomeScreen() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();

    const productList = useSelector(state => state.productList)
    const { error, loading, products } = productList
    let keyword = location.search
    useEffect(() => {
        dispatch(listProducts(keyword))
    }, [dispatch , keyword])

    return (
        <div>

            <h1>Latest Products</h1>
            {loading ? <Loader/>
                : error ? <Message variant='danger'>{error}</Message>
                    :
                    <Row>
                        {products.map(product => (
                            <Col key={product._id} sm={12} md={6} lg={4} xl={3} >
                                <Product product={product} />
                            </Col>

                        ))}
                    </Row>
            }
           
        </div>
    )
}

export default HomeScreen