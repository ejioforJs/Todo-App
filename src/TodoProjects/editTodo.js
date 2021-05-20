import React from 'react'
import './editTodo.css'

class editTodo extends React.Component{
    constructor(props){
        super(props)
        this.state={
            todoTopic: localStorage.getItem("topic"),
            todoInfo: localStorage.getItem("info"),
            todoTime: localStorage.getItem("time")
        }
        this.editedTodos=this.editedTodos.bind(this)
    }

    async editedTodos(){
        const topic=document.querySelector(".etodoTopic").value
        const info=document.querySelector(".etodoInfo").value
        const time=document.querySelector(".etimeOfTodo").value
        const key=await JSON.parse(localStorage.getItem("key"))
        const getTodos=await JSON.parse(localStorage.getItem("Todos"))
        const nameTodo=await localStorage.getItem("username")
        for(var x of getTodos){
            if(x.username===nameTodo){
                var editTodo=x.userTodos
                editTodo.forEach(function(value,index,array){
                    if(index===key){
                        value.todoTopic=topic
                        value.todoInfo=info
                        value.todoTime=time
                    }
                }
                )
                await localStorage.setItem("Todos",JSON.stringify(getTodos))
                this.props.history.push({
                    pathname:"/Todos"
                })
            }
        }
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
                todotime:e.target.value
            })
        )
    }


    render(){
        document.title = "Edit todo"
        return(
            <div>
                <div className="eaddTodoPage">
                    <div className="eaddTodoMain">
                        <h1 className="editHead">EDIT TODO</h1>
                        <input className="etodoTopic" value={this.state.todoTopic} type="text" placeholder="Todo topic" onChange={this.todoTopic} autoFocus/><br />
                        <input className="etodoInfo" value={this.state.todoInfo} type="text" onChange={this.todoInfo} placeholder="Additional information about todo" /><br />
                        <div className="elabelTime"><label for=".timeOfTodo">Time for todo completion:</label></div>
                        <input className="etimeOfTodo" onChange={this.todoTime} value={this.state.todoTime} type="time" />
                        <input className="enewTodos" type="button" onClick={this.editedTodos} value="Edit todo" />
                    </div>
                </div>
            </div>
        )
    }
}

export default editTodo