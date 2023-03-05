import React, { Component } from 'react';
import './App.css'
import Inproge from './companents/inproge/inproge';
import Open from './companents/open/open';
import Pending from './companents/pending/pending';
import Progress from './companents/progress/progress';
export default class App extends Component {
  state = {
    users: []
  }
  addUser = (inputValue) => {
    let a = this.state.users
    a.push({ id: a.length - 1, inputValue: inputValue })
    this.setState({
      users: a
    })
  }
  render() {
    const { users } = this.state
    return (
      <div className='container mx-auto mt-5 '>
        <div className=' flex gap-2 relative'>
          <Inproge addUser={this.addUser} users={users} />
          <Open />
          <Pending />
          <Progress />
        </div>
      </div>
    )
  }
}
