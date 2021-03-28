import React, {Component} from 'react';
import {Container, Card, Accordion, Badge} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import jsDomImg from '../assets/js-dom.gif';
import reactDomImg from '../assets/react-dom.gif';
import TitleBar from './titlebar';

const Homepage = () => {
  return (
    <>
      <TitleBar title='Content' />
      <Container className='my-5'>
        <Accordion>
          <Card>
            <Accordion.Toggle
              as={Card.Header}
              eventKey='0'
              style={{
                cursor: 'pointer',
                fontWeight: 'bold',
              }}
            >
              What is React.js?
            </Accordion.Toggle>
            <Accordion.Collapse eventKey='0'>
              <Card.Body>
                <a href='https://reactjs.org/' target='_blank' rel='noreferrer'>
                  https://reactjs.org/
                </a>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle
              as={Card.Header}
              eventKey='1'
              style={{
                cursor: 'pointer',
                fontWeight: 'bold',
              }}
            >
              Folder Structure
            </Accordion.Toggle>
            <Accordion.Collapse eventKey='1'>
              <Card.Body>
                <p>
                  Folders - <Badge variant='light'>public</Badge>,{' '}
                  <Badge variant='light'>src</Badge>
                </p>
                <p>
                  Files - <Badge variant='light'>index.js</Badge>,{' '}
                  <Badge variant='light'>index.html</Badge>,{' '}
                  <Badge variant='light'>package.json</Badge>,{' '}
                  <Badge variant='light'>manifest.json</Badge>,{' '}
                  <Badge variant='light'>.gitignore</Badge>
                </p>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle
              as={Card.Header}
              eventKey='2'
              style={{
                cursor: 'pointer',
                fontWeight: 'bold',
              }}
            >
              React Components and Lifecycle Methods
            </Accordion.Toggle>
            <Accordion.Collapse eventKey='2'>
              <Card.Body>
                <p>1. Class Based and Functional Components</p>
                <p>
                  2. <strong>JSX</strong> (JavaScript XML) - allows us to write
                  HTML in React
                </p>
                <p>3. State and Props</p>
                <p>
                  4.{' '}
                  <a
                    href='https://reactjs.org/docs/react-component.html#the-component-lifecycle'
                    target='_blank'
                    rel='noreferrer'
                  >
                    Lifecycle methods in Class based components
                  </a>
                </p>
                <p>
                  5.{' '}
                  <a
                    href='https://reactjs.org/docs/hooks-overview.html'
                    target='_blank'
                    rel='noreferrer'
                  >
                    React Hooks
                  </a>{' '}
                  - <strong>useState</strong> and <strong>useEffect</strong>
                </p>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle
              as={Card.Header}
              eventKey='3'
              style={{
                cursor: 'pointer',
                fontWeight: 'bold',
              }}
            >
              Using CSS in React.js
            </Accordion.Toggle>
            <Accordion.Collapse eventKey='3'>
              <Card.Body>
                <p>1. External CSS files</p>
                <p>2. Inline CSS in JSX</p>
                <p>
                  3. CSS Modules (To limit the styles for particular component)
                </p>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle
              as={Card.Header}
              eventKey='4'
              style={{
                cursor: 'pointer',
                fontWeight: 'bold',
              }}
            >
              DOM Events
            </Accordion.Toggle>
            <Accordion.Collapse eventKey='4'>
              <Card.Body>
                <p>
                  1. <strong>Button onClick</strong> - Go to{' '}
                  <Link to='/counter-app'>Counter App</Link>
                </p>
                <p>
                  2. <strong>Input onChange</strong> - Go to{' '}
                  <Link to='/search-filter'>Search Filtering App</Link>
                </p>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle
              as={Card.Header}
              eventKey='5'
              style={{
                cursor: 'pointer',
                fontWeight: 'bold',
              }}
            >
              Routing in React.js
            </Accordion.Toggle>
            <Accordion.Collapse eventKey='5'>
              <Card.Body>
                <p>
                  1.{' '}
                  <strong>
                    <a
                      href='https://www.npmjs.com/package/react-router-dom'
                      target='_blank'
                      rel='noreferrer'
                    >
                      react-router-dom
                    </a>
                  </strong>{' '}
                  library.
                </p>
                <p>
                  2. Use <strong>Link</strong> tag from library instead of HTML{' '}
                  <strong>anchor</strong> tag for internal routing.
                </p>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle
              as={Card.Header}
              eventKey='6'
              style={{
                cursor: 'pointer',
                fontWeight: 'bold',
              }}
            >
              API Calls
            </Accordion.Toggle>
            <Accordion.Collapse eventKey='6'>
              <Card.Body>
                <p>
                  Making <strong>fetch</strong> or <strong>axios</strong>{' '}
                  Requests
                </p>
                <p>
                  Go to <Link to='/random-joke'>Random Joke App</Link>
                </p>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle
              as={Card.Header}
              eventKey='7'
              style={{
                cursor: 'pointer',
                fontWeight: 'bold',
              }}
            >
              Virtual DOM
            </Accordion.Toggle>
            <Accordion.Collapse eventKey='7'>
              <Card.Body>
                <div className='mb-4'>
                  <div className='mb-5'>
                    <p>
                      <strong>1. DOM Manipulation - Vanilla JS working</strong>
                    </p>
                    <img src={jsDomImg} alt='js dom example' width='700px' />
                  </div>
                  <hr />
                  <div className='mt-4'>
                    <p>
                      <strong>2. DOM Manipulation - The React.js way</strong>
                    </p>
                    <img
                      src={reactDomImg}
                      alt='React dom manipulation'
                      width='600px'
                    />
                  </div>
                </div>
                <hr />
                <br />
                <p>
                  Refer below article to understand more about Virtual DOM :{' '}
                </p>
                <a
                  href='https://bitsofco.de/understanding-the-virtual-dom/'
                  target='_blank'
                  rel='noreferrer'
                >
                  https://bitsofco.de/understanding-the-virtual-dom/
                </a>
              </Card.Body>
            </Accordion.Collapse>
          </Card>

          <Card>
            <Accordion.Toggle
              as={Card.Header}
              eventKey='8'
              style={{
                cursor: 'pointer',
                fontWeight: 'bold',
              }}
            >
              Building and Deploying the React project
            </Accordion.Toggle>
            <Accordion.Collapse eventKey='8'>
              <Card.Body>
                <p>
                  1. <strong>npm run build</strong> - to generate the final
                  build of the project.
                </p>
                <p>
                  2. Deploying it on <strong>Netlify</strong> -{' '}
                  <a
                    href='https://www.netlify.com/'
                    target='_blank'
                    rel='noreferrer'
                  >
                    https://www.netlify.com/
                  </a>
                </p>
              </Card.Body>
            </Accordion.Collapse>
          </Card>

          <Card>
            <Accordion.Toggle
              as={Card.Header}
              eventKey='9'
              style={{
                cursor: 'pointer',
                fontWeight: 'bold',
              }}
            >
              Client Side Rendering and Its issue
            </Accordion.Toggle>
            <Accordion.Collapse eventKey='9'>
              <Card.Body>
                <p>
                  1. Instead of getting all the content from HTML doc itself, a
                  bare-bones HTML document with a JavaScript file in initial
                  loading itself is received
                </p>
                <p>
                  2. So JavaScript is rendering the markup (HTML) to Browser.
                </p>
                <hr />
                <p>
                  <strong>Issue :</strong> It's not so good for SEO
                </p>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle
              as={Card.Header}
              eventKey='10'
              style={{
                cursor: 'pointer',
                fontWeight: 'bold',
              }}
            >
              Frameworks/Libraries based on React.js to solve some issues
            </Accordion.Toggle>
            <Accordion.Collapse eventKey='10'>
              <Card.Body>
                <p>
                  1.{' '}
                  <strong>
                    <a
                      href='https://www.gatsbyjs.com/'
                      target='_blank'
                      rel='noreferrer'
                    >
                      Gatsby.js
                    </a>
                  </strong>{' '}
                  - Static Site Generation
                </p>
                <p>
                  2.{' '}
                  <strong>
                    <a
                      href='https://nextjs.org/'
                      target='_blank'
                      rel='noreferrer'
                    >
                      Next.js
                    </a>
                  </strong>{' '}
                  - Server Side Rendering
                </p>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </Container>
    </>
  );
};

export default Homepage;
