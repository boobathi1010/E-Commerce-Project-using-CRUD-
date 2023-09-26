import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export function Register(){
    function handlelogined(event){
        event.preventDefault()
        var firstname=document.getElementById("firstname").value
        var lastname=document.getElementById("lastname").value
        var phoneno=document.getElementById("phone").value
        var email=document.getElementById("email").value
        var city=document.getElementById("city").value
        var password=document.getElementById("pwd").value
        var roll=document.getElementById("roll").value

        var key={
            firstname:firstname,
            lastname:lastname,
            phoneno:phoneno,
            email:email,
            city:city,
            password:password,
            roll:roll
        }

        if(firstname==''){
            alert("enter the first name")
        }
        else if(lastname==''){
            alert("enter the last name")
        }
        else if(phoneno==''){
            alert("Enter the phone number")
        }
        else if(email==''){
            alert("Enter the email")
        }
        else if(city==''){
            alert("enter the city")
        }
        else if(password==''){
            alert("Enter the password")
        }
        else if(roll==''){
            alert("enter the roll")
        }
        else{
            axios.post("http://localhost:1011/inserted",key)
            .then((res)=>{
                if(res.data.status==="error"){
                    alert("data are not inserted")
                    window.location.reload()
                }
                else if(res.data.status==="success"){
                    alert("data are inserted")
                    window.location.href='/login'
                }
            })
        }
    }
    return (
        <>
            <div className="reg_Bg">
            <form onSubmit={handlelogined}>
                <div className="registration-form shadow">
                    <h2 className="text-primary">Registration</h2>
                        <div className="form-group">
                            <input type="text" name="firstName" placeholder="First Name" id="firstname"/>
                        </div>
                        <div className="form-group">
                            <input type="text" name="lastName" placeholder="Last Name" id="lastname"/>
                        </div>
                        <div className="form-group">
                            <input type="text" name="phone" placeholder="Phone No" id="phone"/>
                        </div>
                        <div className="form-group">
                            <input type="email" name="email" placeholder="Email" id="email"/>
                        </div>
                        <div className="form-group">
                            <input type="text" name="city" placeholder="City" id="city"/>
                        </div>
                        <div className="form-group">
                            <input type="password" name="password" placeholder="Password" id="pwd"/>
                        </div>
                        <div className="form-group mb-2">
                            <select id="roll">
                                <option>Select The Roll</option>
                                <option value="client">CLIENT</option>
                                <option value="admin">ADMIN</option>
                            </select>
                        </div>
                        <div>
                            <input type="submit" value="Register" className="btn btn-primary text-center"/>
                        </div>
                        <div>
                            <span>Already have an Account?</span>
                            <Link to='/Login' className="link_One p-2 text-primary">Login</Link>
                        </div>
                </div>
            </form>
            </div>
        </>
    );
}

