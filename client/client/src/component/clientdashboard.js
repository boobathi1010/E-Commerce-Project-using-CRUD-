import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CSVLink } from "react-csv";

export function Clientdash(){
    const[product,setProduct]=useState([])

    useEffect(()=>{
        fetch('http://localhost:1011/getdata')
        .then(res=>res.json())
        .then(data=>setProduct(data))
    })

    const headers=[
        {label:"TITLE",key:"title"},
        {label:"IMAGE",key:"image"},
        {label:"CATEGORY",key:"detail"},
        {label:"DESCRIPTION",key:"price"},
    ]
    return(
        <>
        <h1><span className="nav_head">Floppy</span> Customers Page</h1>
        <div>
            <img src={"https://img.freepik.com/free-vector/super-sale-banner-template-with-abstract-background_1361-1629.jpg"} className="client_carousel"/>
        </div>
        {
            product.map((value,index)=>(
                <>
                <div className="client_Bg">
                <div className="card mb-3">
                    <div className="row g-4">
                        <div className="col-md-4">
                        <img src={value.image} className="img-fluid hardware rounded-start" alt="..."/>
                        </div>
                        <div className="col-md-8">
                        <div className="card-body p-5 m-3">
                            <h5 className="card-title">{value.title}</h5>
                            <p className="card-text"><b>Product Details:</b> {value.detail}</p>
                            <p className="card-text"><b>PRICE:</b> Rs.{value.price} <i><span className="nav_head">Diwali sale offer 50%</span></i></p>
                            <Link to={`/clientsingle_view/${value.aid}`}><button className="btn btn-success">View Product</button></Link>
                            <CSVLink data={[product]} headers={headers} filename="Product_detail.csv">
                                <button className="btn btn-primary mt-2">ORDER NOW</button>                   
                            </CSVLink>
                        </div>
                        </div>
                    </div>
                </div>
                </div>
                </>
            ))
        }
        </>
    );
}