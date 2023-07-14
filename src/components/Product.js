import React, { useEffect} from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from 'react-redux';
import { Alert } from 'react-bootstrap';
import { add } from '../store/cartSlice';
import  {getProducts}  from '../store/productSlice';
import StatusCode from '../utils/StatusCode';
function Product() {
    // const [products, getProducts] = useState([]);
    const dispatch = useDispatch();
    const {data:products,status}=useSelector(state=>state.products)
    useEffect(() => {
        // disapatch an action for fetchProducts
        dispatch(getProducts())
        // fetch('https://fakestoreapi.com/products')
        //     .then((response) => response.json()) 
        //     .then((result) => {
        //         getProducts(result);
        //     });
    }, [dispatch]);

    if(status===StatusCode.LOADING){
        return <p>Loading....</p>
    }

    if(status===StatusCode.ERROR){
        return <Alert key='danger' variant='danger'>Something went wrong...</Alert>
    }

    const addToCart = (product) => {
        // dispatch an add action to my redux state
        dispatch(add(product))
        // here my payload is product
    }

    const cards = products.map((product) => (
        <div className='col-md-3' style={{ marginBottom: '10px' }}>

            <Card key={product.id} className='h-100'>
                <div className='text-center'>

                    <Card.Img variant="top" src={product.image} style={{ width: '100px', height: '130px' }} />
                </div>
                <Card.Body>
                    <Card.Title>{product.title}</Card.Title>
                    <Card.Text>
                        INR:  {product.price}
                    </Card.Text>

                </Card.Body>
                <Card.Footer style={{ background: 'white' }}>
                    <Button variant="primary" onClick={() => {
                        addToCart(product)
                    }}>Add to Cart</Button>
                </Card.Footer>
            </Card>
        </div>
    ))

    return (
        <>
            <h1>Product Dashboard</h1>
            {/* {JSON.stringify(products)} */}
            <div className='row'>
                {cards}
            </div>


        </>
    );
}

export default Product