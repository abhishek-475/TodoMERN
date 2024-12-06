import React from 'react'
import { Row,Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <>
    <div className="container-fluid  bg-dark text-white p-3 ">
        <Row className='d-flex'>
            <Col sm={6} lg={7}>
                <h5>TODO APP</h5>
                <p style={{textAlign:"justify"}}> Welcome to TODO App,a simple and intuitive application designed to
                help you stay organized and manage your tasks effectively.</p>
            </Col>
            <Col sm={6} lg={2}>
            <h5>Links</h5>
            <div className='d-flex flex-column'>
              <Link style={{textDecoration:'none'}} to={'/'}>Home</Link>
              <Link style={{textDecoration:'none'}} to={'/dash'}>DashBoard</Link>
            </div>
            </Col>
            <Col sm={6} lg={3}>
            <h5>Contact Us</h5>
            <p style={{textAlign:"justify"}}>abhishekpavi6@gmail.com</p>
            </Col>
        </Row>
        <div className="text-center">
        <p>&copy; 2024 TODOApp. All Rights Reserved.</p>
        </div>
    </div>
    </>
  )
}

export default Footer