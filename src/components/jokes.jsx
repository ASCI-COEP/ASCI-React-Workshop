import React from 'react';
import {Card, Spinner, Button, Container} from 'react-bootstrap';
import TitleBar from './titlebar';

class Jokes extends React.Component {
  state = {
    joke: null,
    isLoading: true,
  };

  componentDidMount = () => {
    this.fetchQuotes();
  };

  fetchQuotes = () => {
    this.setState({
      isLoading: true,
    });
    fetch('https://api.chucknorris.io/jokes/random')
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          joke: data,
          isLoading: false,
        });
      });
  };

  clickHandler = () => {
    this.fetchQuotes();
  };
  render() {
    let {joke, isLoading} = this.state;
    return (
      <>
        <TitleBar title='Random Joke App' />
        <Container className='mt-5'>
          {isLoading ? (
            <Spinner
              animation='border'
              className='d-block mx-auto'
              variant='primary'
            />
          ) : (
            <Card>
              <Card.Body>
                <Card.Text>{joke.value}</Card.Text>
              </Card.Body>
            </Card>
          )}
          <div className='w-100'>
            <Button
              variant='primary'
              className='w-25 mt-3'
              onClick={this.clickHandler}
            >
              Next
            </Button>
          </div>
          <br />
          <div className='mt-5'>
            API used -{' '}
            <a
              href='https://api.chucknorris.io/'
              target='_blank'
              rel='noreferrer'
            >
              https://api.chucknorris.io/
            </a>
          </div>
        </Container>
      </>
    );
  }
}

export default Jokes;
