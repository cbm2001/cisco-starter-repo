import React, { Component } from 'react';
import { w3cwebsocket as W3CWebSocket } from "websocket";
const client = new W3CWebSocket('ws://localhost:55455');

class Pylon extends Component {
    constructor(props) {
        super(props);
        this.state = {
            packet_latency : null
        };
    }

    componentDidMount() {
        client.onmessage = (message) => {
            this.setState({
                packet_latency: new Date().getTime() - message.data
            })
        }
    }

    render() {
        return (
            <span className="Pylon">
                {this.state.packet_latency}
            </span>
        );
    }
}

export default Pylon;