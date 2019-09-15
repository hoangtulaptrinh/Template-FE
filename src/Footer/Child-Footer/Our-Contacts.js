import React from 'react'
import './Our-Contacts.css'
import { Input, Button,Form} from 'reactstrap'

const Contacts = (props) => (
    <div >
        <h2>Our Contacts</h2>
        <p>35, Lorem Lis Street, Park AveCalifornia, US</p>
        <p>Phone: 300 323 3456</p>
        <p>Fax: 300 323 1456</p>
        <p>Email:<span> info@metronic.com </span></p>
        <p>Skype:<span> metronic </span></p>
        <br />
        <br />
        <br />
        <br />
        <h2>Newsletter</h2>
        <p>Subscribe to our newsletter and stay up to date with the latest news and deals!</p>
        <Form className ='Form'><Input className='Mail' type="email" name="email" id="exampleEmail" placeholder="youremail@email.com" /><Button color ='success'>Subscribe</Button></Form>
    </div>
);

export default Contacts ;