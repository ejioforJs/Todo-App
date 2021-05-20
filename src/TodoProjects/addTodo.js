import React from 'react'
import './addTodo.css'

class addTodo extends React.Component{

    constructor(props){
        super(props)
        this.state={
            todoTopic:"",
            todoInfo:"",
            todoTime:""
        }

        this.newTodos=this.newTodos.bind(this)
    }

    async newTodos(){
        var todoTopic=document.querySelector(".todoTopic").value
        var todoInfo=document.querySelector(".todoInfo").value
        var todoTime=document.querySelector(".timeOfTodo").value

        var userTodo={
            todoTopic,
            todoInfo,
            todoTime,
            id:0,
            check:0
        }

        /*JSON.parse(localStorage.getItem("Todos"))
        if(!localStorage.getItem("Todos")){
            var todoCreation = JSON.stringify([userTodo])
            await localStorage.setItem("Todos",todoCreation)
        }
        else{
            var todoDatabase=JSON.parse(localStorage.getItem("Todos"))
            userTodo.id=todoDatabase.length
            todoDatabase.push(userTodo)
            await localStorage.setItem("Todos",JSON.stringify(todoDatabase))
        }

        alert(localStorage.getItem("Todos"))
        
        this.props.history.push({
            pathname:'/Todos'
        })
    }*/
    let todoUser=localStorage.getItem("username")
    let currentStorage=JSON.parse(localStorage.getItem("Todos"))
    let haveTodo=false
    if(currentStorage){
        for(let verify of currentStorage){
            if(verify.username===todoUser){
                haveTodo=true
            }
        }
    }

    if(!haveTodo){
        let storageCreation = ""
        if(!currentStorage){
            storageCreation=JSON.stringify([
                {
                    username:todoUser,
                    userTodos:[
                        userTodo
                    ]
                }
            ])
        }
        else{
            storageCreation=JSON.stringify([...currentStorage, {
                username:todoUser,
                userTodos:[
                    userTodo
                ]
            }])
        }
        await localStorage.setItem("Todos",storageCreation)
    }
    else{
     let userTodoObject = {}
     let index = -1
     for(let check of currentStorage){
         index++
         if(check.username===todoUser){
             userTodoObject = check
        }
     }
     userTodo.id = userTodoObject.userTodos.length
     let todoUpdate = [...userTodoObject.userTodos, userTodo] 
     userTodoObject = {...userTodoObject, userTodos: todoUpdate}
     currentStorage[index] = userTodoObject
     console.log(currentStorage)

     localStorage.setItem("Todos",JSON.stringify(currentStorage))
    }
    this.props.history.push({
        pathname:'/Todos'
    })
}

    todoTopic = (e) =>{
        this.setState(
            ()=>({
                todoTopic:e.target.value
            })
        )
    }

    todoInfo = (e) =>{
        this.setState(
            ()=>({
                todoInfo:e.target.value
            })
        )
    }

    todoTime = (e) =>{
        this.setState(
            ()=>({
                todoTime:e.target.value
            })
        )
    }

    render(){
        document.title = "Add todo"
        return(
            <div>
                <div className="addTodoPage">
                    <div className="addTodoMain">
                        <h1 className="addTodoHead">ADD NEW TODO</h1>
                        <input className="todoTopic" value={this.state.todoTopic} type="text" placeholder="Todo topic" onChange={this.todoTopic} autoFocus/><br />
                        <input className="todoInfo" value={this.state.todoInfo} type="text" onChange={this.todoInfo} placeholder="Additional info about todo" /><br />
                        <div className="labelTime"><label for=".timeOfTodo">Expiry time for todo completion:</label></div>
                        <input className="timeOfTodo" onChange={this.todoTime} value={this.state.todoTime} type="time" />
                        <input className="newTodos" type="button" onClick={this.newTodos} value="Add new todo" />
                    </div>
                </div>

            </div>
        )
    }
}

export default addTodo