import React from 'react'
import { Container } from 'react-bootstrap'

const TitleBar = ({title}) => {
    return (
        <Container className="mt-4 text-center">
            <h2>{title}</h2>
        </Container>
    )
}

export default TitleBar
