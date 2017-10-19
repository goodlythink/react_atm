import React, { Component } from 'react';
import Monitor from './Monitor'
import ButtonWithdraw from './ButtonWithdraw'

class App extends Component {
  state = {
    money: 10
  }

  render() {
    return (
      <div className="container">
        <Monitor data={this.state.money} />
        <ButtonWithdraw handleClick={this._handleClick}/>
      </div>
    );
  }

  _handleClick = () => {
    const isMoney = true
    this.setState((prevState, props) => {
      return {
        money: prevState.money - 1
      }
    })
    
  }
}

export default App;
