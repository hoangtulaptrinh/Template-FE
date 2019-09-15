import React from 'react';
import Contacts from './Child-Footer/Our-Contacts'
import About from './Child-Footer/About-Us'
import Twitter from './Child-Footer/Twitter'
import { Row, Col } from 'reactstrap';
import './Footer.css'

const Footer = (props) => <div className='Footer'>
    <div className='Child-Footer'>
    <Row className='Inside-Child-Footer'>
    <Col className='Col' sm="4"><About /></Col>
    <Col className='Col' sm="4"><Contacts /></Col>
    <Col className='Col' sm="4"><Twitter /></Col>
    </Row>
    </div>
</div>

export default Footer;