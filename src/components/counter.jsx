import React from 'react';
import {Container, Button} from 'react-bootstrap';
import Header from './header';

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  incrementCounter = () => {
    this.setState((prevState) => {
      return {
        count: prevState.count + 1,
      };
    });
  };

  decrementCounter = () => {
    if (this.state.count < 1) return;
    this.setState((prevState) => {
      return {
        count: prevState.count - 1,
      };
    });
  };

  componentDidMount() {
    console.log('componentDidMount');
  }

  componentWillMount() {
    console.log('componentWillMount');
  }

  render() {
    return (
      <Container className='mt-4'>
        <Header title='Counter App' />
        <div className='d-flex justify-content-around mt-4'>
          <Button variant='warning' onClick={this.decrementCounter}>
            -
          </Button>
          <p>{this.state.count}</p>
          <Button variant='success' onClick={this.incrementCounter}>
            +
          </Button>
        </div>
      </Container>
    );
  }
}

export default Counter;
