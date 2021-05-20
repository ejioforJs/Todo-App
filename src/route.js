import React from 'react'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import LoginPage from './TodoProjects/LoginPage'
import RegisterPage from './TodoProjects/RegisterPage'
import TodoPage from './TodoProjects/TodoPage'
import addTodo from './TodoProjects/addTodo'
import editTodo from './TodoProjects/editTodo'
import previewTodo from './TodoProjects/previewTodo'

const Navigator = () =>{
    return(
        <Router>
            <Switch>
                <Route exact path='/' component={LoginPage} />
                <Route path='/Register' component={RegisterPage} />
                <Route path='/Todos' component={TodoPage} />
                <Route path='/addTodos' component={addTodo} />
                <Route path='/editTodo' component={editTodo} />
                <Route path='/previewTodo' component={previewTodo} />
            </Switch>
        </Router>
    )
}

export default Navigator