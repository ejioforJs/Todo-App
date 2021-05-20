import React from 'react'
import './Todos.css'
import {FaEdit} from "react-icons/fa"
import {MdDelete, MdDeleteForever} from "react-icons/md"
import {VscPreview} from "react-icons/vsc"
import {IconContext} from "react-icons"
import {FiMenu} from "react-icons/fi"
import {BiArrowBack} from "react-icons/bi"

class TodoPage extends React.Component{
    constructor(props){
        super(props)
        this.state={
            haveTodo:JSON.parse(localStorage.getItem("Todos")),
            todoUse:localStorage.getItem("username")
        }
        this.addTodo=this.addTodo.bind(this)
        this.checkBox=this.checkBox.bind(this)
        this.deleteTodo=this.deleteTodo.bind(this)
        this.editTodo=this.editTodo.bind(this)
        this.previewTodo=this.previewTodo.bind(this)
        this.logOut=this.logOut.bind(this)
    }

    async previewTodo(key){
        const getTodos = await JSON.parse(localStorage.getItem("Todos"))
        const nameTodo = await localStorage.getItem("username")
        for(var x of getTodos){
            if(x.username===nameTodo){
                for(var y of x.userTodos){
                    if(y.id===key){
                var topic = y.todoTopic
                var info = y.todoInfo
                var time = y.todoTime
                    }
            }
        }
        }
        await localStorage.setItem("topic",topic)
        await localStorage.setItem("info",info)
        await localStorage.setItem("time",time)
        this.props.history.push({
            pathname:'/previewTodo'
        })

    }

    async editTodo(key){
        const getTodos = await JSON.parse(localStorage.getItem("Todos"))
        const nameTodo = await localStorage.getItem("username")
        for(var x of getTodos){
            if(x.username===nameTodo){
                for(var y of x.userTodos){
                    if(y.id===key){
                var topic=y.todoTopic
                var info=y.todoInfo
                var time=y.todoTime
                    }
                }
            }
        }
        await localStorage.setItem("topic",topic)
        await localStorage.setItem("info",info)
        await localStorage.setItem("time",time)
        await localStorage.setItem("key",JSON.stringify(key))
        this.props.history.push({
            pathname:"/editTodo"
        })
    }

    async deleteTodo(key){
        const getTodos= await JSON.parse(localStorage.getItem("Todos"))
        const nameTodo= await localStorage.getItem("username")
        let userTodosObj;
        let userTodos = []
        let index = -1
        for(let x of getTodos){
            index++
            if(x.username===nameTodo){
                let index2 = -1
                for(var y of x.userTodos){
                    index2++
                    if(y.id != key){
                        y.id = index2
                        userTodos.push(y)
                    }
                    else{
                        index2--
                    }
                }
               userTodosObj = {...x, userTodos}
               getTodos[index] = userTodosObj
            }
        }

        await localStorage.setItem("Todos",JSON.stringify(getTodos))
        this.props.history.push({
            pathname:"/Todos"
        })
    }

    async checkBox(key){
        const getTodos= await JSON.parse(localStorage.getItem("Todos"))
        const nameTodo = await localStorage.getItem("username")
        for(var x of getTodos){
            if(x.username===nameTodo){
                for(var y of x.userTodos){
                    if(y.id===key){
                        if(y.check===0){
                            y.check="checked"
                        }
                        else{
                            y.check=0
                        }
                    }
                }
            }
        }
        await localStorage.setItem("Todos",JSON.stringify(getTodos))
        this.props.history.push({
            pathname:"/Todos"
        })
    }

    addTodo(){
        this.props.history.push({
            pathname:'/addTodos'
        })
    }

    logHome(){
        this.props.history.push({
            pathname:"/"
        })
    }

    logOut(){
        document.querySelector(".logOut").id="display"
    }

    logOutBack(){
        document.querySelector(".logOut").id="notDisplay"
    }

   /*async componentDidMount(){
    const allTodos = await JSON.parse(localStorage.getItem("allTodos"))
    const username = await localStorage.getItem("username")
    const getTodos = await localStorage.getItem("Todos")
    if(!JSON.parse(localStorage.getItem("allTodos"))){
        var forTodos = JSON.stringify([
            {
                username:username,
                userTodo:[
                    getTodos
                ]
            }
        ])
    }
    else{
        var forTodos = JSON.stringify(...allTodos,{username:username,userTodo:[getTodos]})
    }
    await localStorage.setItem("allTodos",forTodos)
    }*/
     render(){
        document.title = "All Todos"
        var haveTodos=  JSON.parse(localStorage.getItem("Todos"))
        console.log({allTodos: haveTodos})
        var todoUser =   localStorage.getItem("username")
        if(JSON.parse(localStorage.getItem("Todos"))){
            for(let x of haveTodos){
                if(x.username===todoUser){
                    var addTodos= (x.userTodos).map((todo) => {
                       return( <div className="mainTodos">
                            <div className="checkBox" id={todo.check} onClick={()=>this.checkBox(todo.id)} key={todo.id} ></div>
                            <h1 className="todo1"> {todo.todoTopic}</h1>
                            <p className="todo3"> {todo.todoTime} </p>
                            <p className="todo2"> {todo.todoInfo} </p>
                            <div className="icons">
                                <div className="delete" onClick={()=>this.deleteTodo(todo.id)} key={todo.id}><MdDeleteForever className="deleteIcon"/></div>
                                <div className="edit" onClick={()=>this.editTodo(todo.id)} key={todo.id}><FaEdit className="editIcon"/></div>
                                <div className="preview" onClick={()=>this.previewTodo(todo.id)} key={todo.id}><VscPreview className="previewIcon"/></div>
                            </div>
                        </div>)
                    }
                    
                )  
                }
            }
           /* if(getTodos){
                var addTodos=getTodos.map((todo) => <div className="mainTodos">
                    <div className="checkBox" id={todo.check} onClick={()=>this.checkBox(todo.id)} key={todo.id} ></div>
                    <h1 className="todo1"> {todo.todoTopic}</h1>
                    <p className="todo3"> {todo.todoTime} </p>
                    <p className="todo2"> {todo.todoInfo} </p>
                    <input type="button" className="delete" onClick={()=>this.deleteTodo(todo.id)} value="delete" key={todo.id} />
                    <input type="button" className="edit" onClick={()=>this.editTodo(todo.id)} value="edit" key={todo.id} />
                    <input type="button" className="preview" onClick={()=>this.previewTodo(todo.id)} value="preview" key={todo.id} />
                </div> 
                )  
            }*/
            localStorage.setItem("Todos",JSON.stringify(haveTodos))
        }
        return(
            <div>
                <div className="todoMainPage">
                    <div className="todoScreen">
                        <div className="topScreen">
                            <div className="menu" onClick={this.logOut} ><FiMenu className="menuIcon" /></div>
                            <div className="logOut">
                                <button className="logOutButton" onClick={()=>this.logHome()}>Log out</button>
                                <button className="logOutBack" onClick={()=>this.logOutBack()}><BiArrowBack /></button>
                            </div>
                            <div className="yourTodos">Your Todos</div>
                            <div className="date">{new Date().toLocaleString('en-US',{month:'long',day:'numeric',year:'numeric',})}</div>
                            <div className="time">{new Date().toLocaleTimeString('en-US').replace(/(.*)\D\d+/, '$1')}</div>
                        </div>
                        <div className="bottomScreen">
                            <div className="inbox">INBOX</div>
                            <div>
                                {addTodos}
                            </div>
                            <input className="addTodos" onClick={this.addTodo} type="button" value="+" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default TodoPage