import React from 'react';
import List from './List';
import { Link } from 'react-router-dom';

import star from "./img/star.png"

function ProductList({products}){
    return(
        <div>
            {products ? products.map(({id, title, price, description, category, image}) => (
                <List
                    key={id}
                    title={title}
                    price={price}
                    description={description}
                    category={category}
                    image={image}
                />
            )):<p> Loading...</p>}
            
        </div>
    );
}

/*
class ProductList extends React.Component {
    render(){   
        return (
        <Container className='container'>
        <Item.Group divided>
            <Item>
            <Item.Image src={star} width={100} height={100} />

            <Item.Content>
                <Item.Header as='a'>12 Years a Slave</Item.Header>
                <Item.Meta>
                <span className='cinema'>Union Square 14</span>
                </Item.Meta>

                <Item.Extra>
                    <Button primary floated="right">
                        <Link to="/cart">
                        Buy
                        </Link>
                    </Button>
                </Item.Extra>

            </Item.Content>
            </Item>
        </Item.Group>
        </Container>
        );
    }  
}
*/
export default ProductList;