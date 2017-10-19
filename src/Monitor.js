import React from 'react'

class Monitor extends React.Component {
    render() {
        return (
            <div style={{color: 'red', fontSize: 30}}>
                ยอดเงิน {this.props.data}
            </div>
        )
    }
}

export default Monitor