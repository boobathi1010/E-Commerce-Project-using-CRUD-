import React from 'react';
import axios from 'axios';

export function Login(){
    function handlelogin(event){
        event.preventDefault()
        var username=document.getElementById("username").value
        var password=document.getElementById("password").value
        var key={
            username:username,
            password:password
        }
        if(username==''){
            alert("Plz enter the username")
        }
        else if(password==''){
            alert("plz enter the password")
        }
        else{
            axios.post("http://localhost:1011/login",key)
            .then((res)=>{
                if(res.data.status==="empty_set"){
                    alert("plz enter the username or register a new one")
                }
                else if(res.data.status==="success"){
                    var id=res.data.id
                    var roll=res.data.roll
                    alert("Successful Logedin")
                    if(roll==="client"){
                        window.location.href=`/clientdashboard/${id}`
                    }
                    else if(roll==="admin"){
                        window.location.href=`/admindashboard/${id}`
                    }
                }
                else if(res.data.status==="invalid_user"){
                    alert("plz check your password")
                }
                else if(res.data.status==="error"){
                    alert("All the data are invalid")
                }
                else{
                    alert("plz register your details first")
                }
            })
        }
    }
    return (
        <>
            <form onSubmit={handlelogin} className='login_Bg'>
            <div className="login_form_container">
                <div className="login_form">
                    <h2>User Login</h2>
                    <div class="input_group">
                        <input type="text" placeholder="Username" id="username" className="input_texts"/>
                    </div>
                    <div class="input_group">
                        <input type="password" placeholder="Password" id='password' className="input_texts"/>
                    </div>
                    <div className="button_group" id="login_button">
                        <button type='submit' className='btn_One'>Login</button>
                    </div>
                </div>
            </div>
            </form>
        </>
    );
}