import React, { Component } from 'react';
import api from './apiclient';
import swal from 'sweetalert'

class show extends Component{
    state = {
        id:null,
    }
    handleChange =(e) =>{
        this.setState({
            [e.target.id]:e.target.value,
        })
    }
    handleSubmit =(e) =>{
        e.preventDefault();
        // console.log(this.props);
        // this.props.createProject(this.state);
        
        api.delete(``,{params: { id: this.state.id }
        }).then(res => {
            console.log(res);
            console.log(res.data);
            swal(res.data);
        })
        this.props.history.push('/');

    }
    render(){
        return (
            <div className="container">
                  <form onSubmit={this.handleSubmit} className="white">
                      <h5 className="grey-text text-darken-3">
                          Delete
                      </h5>
                      <div className="input-field">
                          <label htmlFor="title">ID</label>
                          <input type="text" id="id" onChange={this.handleChange}/>
                      </div>
                      <button className="btn pink lighen-1 z-depth-0">delete</button>
                  </form>
            </div>
          )
    }
    
}

export default show;