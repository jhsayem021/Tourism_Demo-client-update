import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css';



const Shop = () => {


    // Services to be rendered on the UI
    const [displayServices, setDisplayServices] = useState([]);
    useEffect(() => {
        fetch(`https://tourism-demo-server-site-main-update.vercel.app/services`)
            .then(res => res.json())
            .then(data => {
                setDisplayServices(data.products);
                
            });
    }, []);



   

    return (
        <>
            <h1 className="p-5 text-center">Tour Packages</h1>
                
               { (displayServices.length ===0)?
               <div className="d-flex justify-content-center">
                   <div></div>
                   <div class="spinner-border text-primary" role="status">
               <span class="sr-only">Loading...</span>
               </div>
               </div>
               : 
                <div className="product-container grid ">
                
                    
                       { displayServices.map(product => <Product 
                            
                            key={product._id}
                            product={product}
                          
                        >  
                        </Product>)}
                    
                </div>
                }
        </>
    );
};

export default Shop;