import React, { Component } from 'react'
import { withRouter } from 'react-router'
import axios from 'axios'

class UserFormComponent extends Component {
  state = {
    username: '',
    password: ''
  }
  
  handleChange = (e) => this.setState({ [e.target.name]: e.target.value })
  handleSubmit = (e) => {
    e.preventDefault()
    axios.post(`http://localhost:5000/api/${this.props.endpoint}`, this.state)
    .then(({ data }) => {
      console.log('data', data)
      localStorage.setItem('token', data.token)
      this.props.history.push(this.props.redirect)
    })
    .catch(err => console.log('err', err))
  }
  
  render = () => (
    <form onSubmit={this.handleSubmit}>
      <input name='username' onChange={this.handleChange} value={this.state.username} />
      <input name='password' onChange={this.handleChange} value={this.state.password} type='password' />
      <button type='submit'>{this.props.submitText}</button>
    </form>
  )
}

const UserForm = withRouter(UserFormComponent)
export const Register = () => <UserForm endpoint='users' submitText='Create user' redirect='/' />
export const Login = () => <UserForm endpoint='login' submitText='Log in' redirect='/jokes'/>