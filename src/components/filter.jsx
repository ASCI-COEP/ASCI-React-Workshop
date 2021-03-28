import React from 'react';
import {Container, ListGroup, Form} from 'react-bootstrap';
import {allTodos} from '../data/todos';
import TitleBar from './titlebar';

class SearchFilter extends React.Component {
  state = {
    todos: allTodos,
  };

  changehandler = (e) => {
    let keyword = e.target.value;
    let filteredTodos = allTodos.filter((todo) => {
      if (keyword === '' || keyword == null) return allTodos;

      return todo.title.includes(keyword.toLowerCase());
    });

    this.setState({
      todos: filteredTodos,
    });
  };

  render() {
    return (
      <>
        <TitleBar title='Search Filter App' />
        <Container className='mt-5'>
          <Form.Control
            type='text'
            placeholder='Keyword...'
            onChange={this.changehandler}
          />
          <ListGroup className='mt-4'>
            {this.state.todos.map((todo) => (
              <ListGroup.Item>{`${todo.id}. ${todo.title}`}</ListGroup.Item>
            ))}
          </ListGroup>
        </Container>
      </>
    );
  }
}

export default SearchFilter;
