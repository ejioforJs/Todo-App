import React from 'react'
import './Register.css'
import {Link} from 'react-router-dom'


class RegisterPage extends React.Component{

    constructor(props){
        super(props)
        this.state={
            name:"",
            username:"",
            password:"",
            conPassword:""
        }
        this.RegisterHandler=this.RegisterHandler.bind(this)
    }

   async RegisterHandler(){
    document.title = "Register"
        var name=document.querySelector(".name").value
        var username=document.querySelector(".username").value
        var password=document.querySelector(".password").value
        var conPassword=document.querySelector(".conPassword").value
        if(password!==conPassword){
            alert("passwords don't match")
        }

        else{
        var user={
            name,
            username,
            password
        }

        JSON.parse(localStorage.getItem("userProfile"))

        if(!localStorage.getItem("userProfile")){
            var storageCreation=JSON.stringify([user])
            await localStorage.setItem("userProfile",storageCreation)
            const onUser=user.username
            await localStorage.setItem("username",onUser)
        }

        else{
            var userDatebase=JSON.parse(localStorage.getItem("userProfile"))
            userDatebase.push(user)
            await localStorage.setItem("userProfile",JSON.stringify(userDatebase))
            const onUser=user.username
            await localStorage.setItem("username",onUser)
        }
        this.props.history.push({
            pathname:'/todos'
        })
    }
    }

    changeHandlerName = (e) =>{
        this.setState(
            ()=>({
                name:e.target.value,
            })
        )
    }

    changeHandlerUsername = (e) =>{
        this.setState(
            ()=>({
                username:e.target.value
            })
        )
    }

    changeHandlerPassword = (e) =>{
        this.setState(
            ()=>({
                password:e.target.value
            })
        )
    }

    changeHandlerConPassword = (e) =>{
        this.setState(
            ()=>({
                conPassword:e.target.value
            })
        )
    }
    
    render(){
        return(
            <div>
                <div className="mainPage">
                    <div className="registerMainPage">
                        <div className="signUp">Sign Up</div>
                        <div className="signupWords">Create an account to start doing more</div>
                        <input type="text" onChange={this.changeHandlerName} value={this.state.name} className="inputR name" placeholder="Name" autoFocus/>
                        <input type="text" onChange={this.changeHandlerUsername} value={this.state.username} className="inputR username" placeholder="Username" />
                        <input type="password" onChange={this.changeHandlerPassword} value={this.state.password} className="inputR password" placeholder="Password" />
                        <input type="password" onChange={this.changeHandlerConPassword} value={this.state.conPassword} className="inputR conPassword" placeholder="Confirm Password" />
                        <input type="button" onClick={this.RegisterHandler} className="inputR register" value="Register" />
                        <div className="haveAccount">Already have an account?<span><Link to="/" className="login"> Log in</Link></span></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default RegisterPage