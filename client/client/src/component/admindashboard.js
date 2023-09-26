import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export function Admin(){
    const[product,setProduct]=useState([])

    useEffect(()=>{
        fetch('http://localhost:1011/getdata')
        .then(res=>res.json())
        .then(data=>setProduct(data))
    })
    const delt=(aid)=>{
        var key={aid:aid}
        axios.post("http://localhost:1011/delete",key)
        .then((res)=>{
            if(res.data.status==="error"){
                alert("data are not deleted")
            }
            else if(res.data.status==="success"){
                alert("data are deleted")
            }
        })
    }
    return(
        <>
        <h1 className="text-center"><b>Admin Login Page</b></h1>
        {
            product.map((value,index)=>(
                <>
                <div className="admin_Bg">
                <div className="card mb-3 p-3">
                    <div className="row g-4">
                        <div className="col-md-4">
                        <img src={value.image} className="img-fluid hardware rounded-start" alt="..."/>
                        </div>
                        <div className="col-md-8">
                        <div className="card-body p-5 m-3">
                            <h5 className="card-title"><b>{value.title}</b></h5>
                            <p className="card-text"><b>Product Details:</b> {value.detail}</p>
                            <p className="card-text"><b>PRICE:</b> Rs.{value.price} <i><span className="nav_head">Diwali sale offer 50%</span></i></p>
                            <button className="btn btn-danger" onClick={()=>{delt(value.aid)}}>Delete</button>
                            <Link to={`/update_page/${value.aid}`}><button className="btn btn-success mt-3">Update</button></Link>
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