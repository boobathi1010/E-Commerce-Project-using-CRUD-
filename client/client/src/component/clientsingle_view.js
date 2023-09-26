import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

export function Customersingle(){
    var {aid}=useParams()
    const[title,setTitle]=useState('')
    const[image,setImage]=useState('')
    const[detail,setDetail]=useState('')
    const[price,setPrice]=useState('')

    useEffect(()=>{
        fetch('http://localhost:1011/getsingle/'+aid)
        .then(res=>res.json())
        .then((data)=>{
            setTitle(data[0].title)
            setImage(data[0].image)
            setDetail(data[0].detail)
            setPrice(data[0].price)
        })
    })

    
    return(
        <>
            <div class="card mb-3">
                    <div class="row g-4">
                        <div class="col-md-4">
                        <img src={image} class="img-fluid hardware rounded-start" alt="..."/>
                        </div>
                        <div class="col-md-8">
                        <div class="card-body p-5 m-3">
                            <h5 class="card-title"><b>{title}</b></h5>
                            <p class="card-text"><b>Product Details:</b> {detail}</p>
                            <p class="card-text"><b>PRICE: Rs.</b>{price} <i><span className="nav_head">Diwali sale offer 50%</span></i></p>
                        </div>
                        </div>
                    </div>
                </div>
        </>
    );
}