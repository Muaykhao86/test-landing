import React, { Component } from 'react'

export default class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
        }

    }

    saveToState = (e) => {
        this.setState({[e.target.name]:[e.target.value]});
    }

    SendForm = () => {
        fetch('https://www.eurobrake.net/authors/login', {
            method: 'post',
            mode: 'no-cors',
            credentials: 'include',
            headers: {
            'Content-Type': 'text/plain'
            },
            body: {
                go: 'commit',
                username: this.state.email,
                password: this.state.password,
                
            }
        }).then(
            res => console.table(res)
        )
    }

    render() {
        return (
            <div>
                <label htmlFor="">
                    Email
     <input type="email" name="email" id="" onChange={this.saveToState}/>
                </label>
                <label htmlFor="">
                    Password
     <input type="password" name="password" id="" onChange={this.saveToState}/>
                </label>
                <label htmlFor="">Login
     <input type="submit" value="Login" onClick={this.SendForm}/>               
                </label>
                <label htmlFor="">Logout
     <input type="submit" value="Logout" onClick={this.LogOut}/>               
                </label>
            </div>
        )
    }
}

