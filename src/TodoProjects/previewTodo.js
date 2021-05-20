import React from 'react'
import './previewTodo.css'

class previewTodo extends React.Component{

    goBack = () =>{
        this.props.history.push({
            pathname:"/Todos"
        })
    }
    render(){
        return(
            <div>
                <div className="previewMain">
                    <div className="previewMainPage">
                        <div className="head">
                            Todo information
                        </div>
                        <div className="body">
                            <div className="bodyAdd">
                                <ul>
                                    <li><p className="Topic">Todo topic: {localStorage.getItem("topic")} </p></li>
                                    <li><p className="Info">Additional info: {localStorage.getItem("info")} </p></li>
                                    <li><p className="Time">Expiry time for todo completion: {localStorage.getItem("time")} </p></li>
                                </ul>
                            </div>
                            <input type="button" className="previewBack" value="Go back" onClick={this.goBack} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default previewTodo