import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export function Updateprofile(){
    var {aid}=useParams()
    const[image,setImage]=useState('')
    const[title,setTitle]=useState('')
    const[detail,setDetail]=useState('')
    const[price,setPrice]=useState('')
    
    useEffect(()=>{
        fetch("http://localhost:1011/getsingle/"+aid)
        .then(res=>res.json())
        .then((output)=>{
            setImage(output[0].image)
            setTitle(output[0].title)
            setDetail(output[0].detail)
            setPrice(output[0].price)
        })
    },[])
    function handleupdate(event){
        event.preventDefault()
        var image=document.getElementById("img").value
        var title=document.getElementById("title").value
        var detail=document.getElementById("detail").value
        var price=document.getElementById("price").value

        var key={
            image:image,
            title:title,
            detail:detail,
            price:price
        }

        if(image==''){
            alert("Enter the Image")
        }
        else if(title==''){
            alert("Enter the phone Title")
        }
        else if(detail==''){
            alert("Enter the Details")
        }
        else if(price==''){
            alert("Enter the Price")
        }
        else{
            axios.put("http://localhost:1011/update/"+aid,key)
            .then((res)=>{
                if(res.data.status==="error"){
                    alert("data are not updated")
                }
                else if(res.data.status==="success"){
                    alert("data are updated")
                }
            })
        }
    }

    return(
        <>
            <div className="update_Bg">
                <form onSubmit={handleupdate}>
                    <h1 className="text-center text-primary">Update Product Details</h1>
                    <div className="text-center p-5">
                        <label>Enter your Image URL Link</label><br/>
                        <input type="text" value={image} id="img" onChange={(up)=>setImage(up.target.value)}/><br/>
                        <label>Enter your Title</label><br/>
                        <input type="text" value={title} id="title" onChange={(up)=>setTitle(up.target.value)}/><br/>
                        <label>Enter your Detail</label><br/>
                        <input type="text" value={detail} id="detail" onChange={(up)=>setDetail(up.target.value)}/><br/>
                        <label>Enter your Price</label><br/>
                        <input type="text" value={price} id="price" onChange={(up)=>setPrice(up.target.value)}/><br/>
                        <input type="submit" className="btn btn-success m-3" value="submit"/> 
                    </div>
                </form>
            </div>
        </>
    );
}