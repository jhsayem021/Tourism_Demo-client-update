import React from 'react';

const ReviewItem = (props) => {
    const { title, price, quantity, key } = props.product;
    const { handleRemove } = props;
    console.log(props.product);
    return (
        <div className="product">
            
            
        </div>
    );
};

export default ReviewItem;