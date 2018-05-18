import React, { Component } from 'react'
import axios from 'axios'

export default class JokesContainer extends Component {
  state = { jokes: [] }

  componentDidMount() {
    const options = {
      headers: {
        Authorization: localStorage.getItem('token')
      }
    }
    axios.get('http://localhost:5000/api/jokes', options)
      .then(({ data }) => {
        console.log('jokes', data)
        this.setState({ jokes: data })
      })
      .catch(err => console.log('err', err))
  }

  render = () => <Jokes jokes={this.state.jokes} />
}

const Jokes = ({ jokes }) => jokes.map((joke, key) => <Joke key={key} {...joke} />)
const Joke = ({ type, setup, punchline }) => (
  <div>
    <h5>{type}</h5>
    <p>{setup}</p>
    <p>{punchline}</p>
  </div>
)