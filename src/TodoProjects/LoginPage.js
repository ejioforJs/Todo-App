import React from 'react'
import "./Login.css"
import {Link} from 'react-router-dom'
import {GrLogin} from "react-icons/gr"

class LoginPage extends React.Component{
    constructor(props){
        super(props)
        this.state={
            username:"",
            password:""
        }
        this.loginHandler=this.loginHandler.bind(this)
    }


   async loginHandler(){
        var username=document.querySelector(".input1").value
        var password=document.querySelector(".input2").value
        var currentStorage=await JSON.parse(localStorage.getItem("userProfile"))
        var confirm = false
        if(currentStorage){
            for(let verify of currentStorage){
                if(username===verify.username && password===verify.password){
                    confirm = true
                }
            }
        }
        if(confirm === true){
            await localStorage.setItem("username",username)
            this.props.history.push({
                pathname:"/Todos"
            })
        }
        else{
            if(username==="" && password===""){
                alert("input your username and password to login to your account")
            }
            else{
            alert("incorrect username or password")
            }
        }
       await localStorage.setItem("userprofile",JSON.stringify(currentStorage))
    }

    usernameHandler = (e) =>{
        this.setState(
            ()=>({
                username:e.target.value
            })
        )
    }

    passwordHandler = (e) =>{
        this.setState(
            ()=>({
                password:e.target.value
            })
        )
    }
    
    render(){
        return(
            <div>
                <div className="loginPage">
                    <div className="loginMainPage">
                        <div className="welcome"><p>Welcome</p></div>
                        <div className="signIn"><p>Please sign in to access your various todos</p></div>
                        <input type="text" value={this.state.username} onChange={this.usernameHandler} className="input1 inputL" placeholder="Username" autoFocus/>
                        <input type="password" value={this.state.password} onChange={this.passwordHandler} className="input2 inputL" placeholder="Password" />
                        <input type="button" onClick={this.loginHandler} className="inputLogin inputL" placeholder="Login" value="Login" />
                        <div className="lastPart">Don't have an account yet? <span><Link to="/Register" className="sign">Sign Up</Link></span></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default LoginPage