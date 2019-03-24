import React, { Component } from 'react';
import api from './apiclient'
import swal from 'sweetalert'
class create extends Component {
    state = {
        id: '',
        name: '',
        language: '',
        framework: '',
        msg: '',
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value,
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
        // this.props.createProject(this.state);
        // console.log(this.props);
        // const data ={
        //     id : this.state.id,
        //     name: this.state.name,
        //     language:this.state.language,
        //     framework:this.state.framework,
        // }
        let msg = "";
        api.put(``, { id: this.state.id, name: this.state.name, language: this.state.language, framework: this.state.framework }).then(res => {
            console.log(res);
            console.log(res.data.message);
            swal(res.data.message);
        })
        this.setState({
            msg
        });
        this.props.history.push('/');

    }

    render() {
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} className="white">
                    <h5 className="grey-text text-darken-3">
                        Create
                      </h5>
                    <div className="input-field">
                        <input type="text" id="id" onChange={this.handleChange} />
                        <label for="title">ID</label>

                    </div>
                    <div className="input-field">
                        <input type="text" id="name" onChange={this.handleChange} />
                        <label for="name">Name</label>
                    </div>
                    <div className="input-field">
                        <input type="text" id="language" onChange={this.handleChange} />
                        <label for="language">Language</label>
                    </div>
                    <div className="input-field">
                        <input type="text" id="framework" onChange={this.handleChange} />
                        <label for="framework">Framework</label>
                    </div>
                    <button className="btn pink lighen-1 z-depth-0">Create</button>
                </form>

            </div>
        )
    }

}

export default create;