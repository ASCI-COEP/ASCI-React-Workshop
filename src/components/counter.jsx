import React, { Component } from 'react'
import {Button, Badge, Container} from 'react-bootstrap'
import TitleBar from './titlebar';

export default class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }

    incrementCounter = () => {
        this.setState((prevState) => ({
            count: prevState.count + 1
        }))
    }

    decrementCounter = () => {
        this.setState((prevState) => {
            if (prevState.count < 1) return;
            return {count: prevState.count - 1}
        })
    }

    render() {
        return (
            <>
            <TitleBar title="Counter App" />
            <Container className="d-flex justify-content-around mt-5">
                <Button variant="warning" onClick={this.decrementCounter} style={{width: "4rem"}}>-</Button>
                <h1><Badge variant="secondary" >{this.state.count}</Badge></h1>
                <Button variant="success" onClick={this.incrementCounter} style={{width: "4rem"}}>+</Button>
            </Container>
            </>
        )
    }
}
