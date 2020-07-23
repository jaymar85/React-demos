import React, { Component } from 'react';

class Count extends Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0
        }
    }

    render() {

        setTimeout(() => {
            this.setState({
                count: this.state.count + 1
            })
        }, 3000) 

        return (
            <div className="Count">
                <h1>Seconds since component rendered: {this.state.count}</h1>
            </div>
        );
    }
}

export default Count;