import React, { Component } from 'react';
import api from './apiclient';
import swal from 'sweetalert'

class show extends Component {
    state = {
        id: null,
        name: null,
        data: [],
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value,
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        // console.log(this.props);
        // this.props.createProject(this.state);
        // this.props.history.push('/');
        api.get(`/`, { params: { id: this.state.id, name: this.state.name } }).then(res => {
            const data = res.data;
            this.setState({
                data,
            })
        }).catch(error => {
            // console.log(error.message)
            swal("data not found");
        })

    }
    render() {
        const list = this.state.data.map(d => {
            return (
                <div>
                    <ul className="collection">
                        <li className="collection-items">
                            <p>id: {d.id}</p>
                            <p>name: {d.name}</p>
                            <p>language: {d.language}</p>
                            <p>framework: {d.framework}</p>
                        </li>
                    </ul>
                </div>
            )
        })
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} className="white">
                    <h5 className="grey-text text-darken-3">
                        Show
                      </h5>
                    <div className="input-field">
                        <label htmlFor="title">ID</label>
                        <input type="text" id="id" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="content">Name</label>
                        <input type="text" id="name" onChange={this.handleChange} />
                    </div>

                    <button className="btn pink lighen-1 z-depth-0">show</button>
                </form>
                    {list}
                
            </div>
        )
    }

}

export default show;