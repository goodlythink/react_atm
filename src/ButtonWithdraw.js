import React from 'react'

class ButtonWithdraw extends React.Component {
    render() {
        return (
            <div>
                <button onClick={this.props.handleClick}>Withdraw</button>
            </div>
        )
    }
}

export default ButtonWithdraw