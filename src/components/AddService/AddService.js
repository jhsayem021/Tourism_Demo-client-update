import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";

const AddService = () => {
    const { register, handleSubmit} = useForm();
    const onSubmit = data =>{
         console.log(data)
        axios.post('https://tourism-demo-server-site-main-update.vercel.app/services',data)
        .then(res=>{
            
        })
        
        };
    return (
        <div className="d-flex justify-content-center py-5">
            <div >
            <h1 className="text-center py-5">Add a service</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
        
      <input {...register("title", { required: true, maxLength: 20 })} placeholder="Service Title" /> <br/>
      <textarea {...register("description")} placeholder="Description" /> <br/>
      <input type="number" {...register("price")} placeholder="Price" /> <br/>
      <input {...register("image")} placeholder="Image Url" /> <br/>

      <input type="submit" />
    </form>
            </div>
        </div>
    );
};

export default AddService;