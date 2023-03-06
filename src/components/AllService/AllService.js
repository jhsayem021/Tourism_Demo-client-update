import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Allservice.css'

const AllService = (props) => {

    const { title,duration,description,price,image } = props.product;
    return (
        <div className="service-product">
            <div>
                <img src={image} alt="" />
            </div>
            <div>
                <h4 className="service-product-name">{title}</h4>
                <p><small>{duration}</small></p>
                <p>Price: {price}</p>
                <p>{description}</p>
                <br />
                <button
                    onClick={() => props.handleAddToCart(props.product)}
                    
                    className="btn-regular"
                > <FontAwesomeIcon icon={faShoppingCart} />Add to Booking</button>
                
            </div>
        </div>
    );
};

export default AllService;