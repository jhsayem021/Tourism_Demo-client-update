import React from 'react';

import './Product.css';

import { Link } from 'react-router-dom';

const Product = (props) => {

    const { title,duration,description,price,image } = props.product;

    return (
        <div className="home-product grid-col-4  m-3">
            <div>
                <img src={image} alt="" />
            </div>
            <div>
                <h4 className="home-product-name">{title}</h4>
                <p><small>{duration}</small></p>
                <p>Price: {price}</p>
                <p>{description}</p>
                
                <Link to="/review" className="btn-regular">View All</Link>
            </div>
        </div>
    );
};

export default Product;