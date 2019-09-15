import React, { Component } from "react";
import { Container, Row, Col ,CardImg } from 'reactstrap';

import img1 from '../img/people/img1-large.jpg'
import img2 from '../img/people/img2-large.jpg'
import img3 from '../img/people/img3-large.jpg'
import img4 from '../img/people/img4-large.jpg'
import img5 from '../img/people/img5-large.jpg'
import img6 from '../img/people/img6-large.jpg'
import img7 from '../img/people/img7-large.jpg'
import img8 from '../img/people/img8-large.jpg'
import img9 from '../img/people/HTB10r92SpXXXXc3XVXXq6xXFXXX2.jpg'

class About extends Component {
    constructor(props) {
      super(props);
    this.state = {
        img : [
            {imageUrl : img1},{imageUrl : img2},{imageUrl : img3},{imageUrl : img4},{imageUrl : img5},{imageUrl : img6},{imageUrl : img7},{imageUrl : img8},{imageUrl : img9}
        ]
    }
}
    render() {
        const { img } = this.state
        return (
            <div className ='AboutandContacts'>
        <h2>About us</h2>
    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam sit nonummy nibh euismod tincidunt ut laoreet dolore magna aliquarm erat sit volutpat.</p>
    <h2>Photos Stream</h2>
    <Container>
        <Row>
        {img.map(x => (
            <Col sm="4">
                <CardImg top width ='115%' height ='90%' src={x.imageUrl} />
            </Col>
          ))}
        </Row>
      </Container>
      </div>
      );
    }
}

export default About;