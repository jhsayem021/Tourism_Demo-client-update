import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
// import useAuth from './../../hooks/useAuth';
// import { useHistory } from 'react-router';

const AllOrder = () => {

    const [orders, setOrders] = useState([]);
    // const { user } = useAuth();
    // const history = useHistory();
    
    useEffect(() => {
        fetch(`https://tourism-demo-server-site-main-update.vercel.app/booked_service`)
            .then(res => res.json())
            .then(data => setOrders(data.order));
    }, [])
    const handleRemoveOrder = (id)=>{
        const confirm = window.confirm('Are you confirm to delete order ?')
        if(confirm){
            const url = `https://tourism-demo-server-site-main-update.vercel.app/booked_service/${id}`;
        fetch(url,{
            method:'DELETE'
        })
        .then(res=> res.json())
        .then(data=>{
            if(data.deletedCount>0){
                alert('Deleted Succesfully')
                // const OrderArray = Object.keys(orders);
                const remainingUsers =orders.filter(order => order._id !== id);
                setOrders(remainingUsers);
            }
        })
        }
    }

    return (
        <div>
            <h2>You have placed: {orders.length} Orders</h2>
            <ol>
                {orders.map(order => <li
                    key={order._id}
                >Name: {order.name} <br /> Email: {order.email} <button onClick={()=>handleRemoveOrder(order._id)}>remove order</button></li>)}
            </ol>
            
        </div>
    );
};

export default AllOrder;