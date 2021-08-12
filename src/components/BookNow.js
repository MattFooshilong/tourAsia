import React, { Component } from 'react';
import { Form, Row, Col, Button} from 'react-bootstrap';
import './myStyles.css';

const greyBox = {
    display:'inline-block',
    height:'20px',
    width:'100px',
    backgroundColor:'#c9c9c9'
}
const greyBox2 = {display:'none'};
let myClass = greyBox;

class BookNow extends Component {

    constructor(props) {
        super(props);
        this.state = {
            validated: false,
            lastName: '',
            firstName:'',
            fromDate:'________',
            toDate:'________',
            country:'Japan',
            email:'',
            address:'',
            city:'',
            stateOfCtry:'',
            zipcode:'',
            cardType:'________',
            display:'none',
            showBtn:true ,
            cardNo:'',
            expDate:'',
            cvv:'',
        };
    }

    submitHandler = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            //cant submit if all fields not valid
            event.preventDefault();
            //below prevents any parent event handlers from being executed.
            event.stopPropagation();
        }else{
            //remove to refresh after submit
            event.preventDefault();
        }
        
        this.setState({ validated: true })
    };

    
    onChangeHandler = (event) =>{
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({[nam]: val});
    };
    
     cardTypeHandler = (type) =>{
         this.setState({cardType:type});
     };
     
     showHide = () =>{
         if(this.state.showBtn){
            this.setState({display:'inline-block'});
            myClass = greyBox2;
         }else{
            this.setState({display:'none'});
            myClass = greyBox;
         }
         this.setState({showBtn:!this.state.showBtn});
     }

     checkNumber = (event) => {
        const zip = new RegExp('^[0-9]{1,6}$');//6 digits only
        //const zip = new RegExp('^[\\d]+$');
        //const zip = new RegExp('^([a-z]+)@([a-z]+)\.([a-z]){2,8}$');
        const cardNo = new RegExp('^[0-9 ]{1,19}$');//16 digits and 3 spaces
        const expDate = new RegExp('^[0-9\/]{1,5}$');//4 digits and a slash
        const cvv = new RegExp('^[0-9]{1,3}$');//3 digits only
        let nam = event.target.name;
        let val = event.target.value;
         if(nam==="zipcode"){
            if(zip.test(val)||val===''){
                this.setState({[nam]: val});   
            }
         }else if(nam==="cardNo"){
            if(cardNo.test(val)||val===''){
                this.setState({[nam]: val});   
            }
         }else if(nam==="expDate"){
            if(expDate.test(val)||val===''){
                this.setState({[nam]: val});   
            }
         }else if(nam==="cvv"){
            if(cvv.test(val)||val===''){
                this.setState({[nam]: val});   
            }
         }
     }

     alphabetsOnly=(event)=>{
        const abc = new RegExp('^[a-zA-Z ]{1,}$');//abcs only, at least 1
        let nam = event.target.name;
        let val = event.target.value;
        if(abc.test(val)||val===''){
            this.setState({[nam]: val});   
        }
     }
    render() {
        let textColor = this.props.darkMode? 'white':'black';
        return (
            <div style={{color:`${textColor}`}}>
                <Row className="my-3">
                    <Col lg={8}>
                        <Form noValidate validated={this.state.validated} onSubmit={this.submitHandler}>
                            {/* Travel Details */}
                            <h3 >Travel Details</h3>
                            <Form.Row>
                                <Form.Group as={Col} lg="6" controlId="fromDate">
                                    <Form.Label>From</Form.Label>
                                    <Form.Control
                                        required
                                        type="date"
                                        name='fromDate'
                                        value={this.state.fromDate}
                                        onChange={this.onChangeHandler}
                                    />
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group as={Col} lg="6" controlId="toDate">
                                    <Form.Label>To</Form.Label>
                                    <Form.Control
                                        required
                                        type="date"
                                        name='toDate'
                                        value={this.state.toDate}
                                        onChange={this.onChangeHandler}
                                    />
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                </Form.Group>
                            </Form.Row>

                            <Form.Row>
                                <Form.Group as={Col} lg="6" controlId="countries">
                                    <Form.Label>Country</Form.Label>
                                    <Form.Control as="select" name="country" value={this.state.country} required onChange={this.onChangeHandler} >
                                        <option value="Japan">Japan</option>
                                        <option value="Korea">Korea</option>
                                        <option value="China">China</option>
                                    </Form.Control>
                                </Form.Group>
                            </Form.Row>

                            <h3>Billing Details</h3>
                            {/* Name */}
                            <Form.Row>
                                <Form.Group as={Col} lg="6" controlId="fName">
                                    <Form.Label>First Name</Form.Label>
                                    <Form.Control
                                        required
                                        type="text"
                                        placeholder="Jackie"
                                        value={this.state.firstName} name="firstName" onChange={this.alphabetsOnly}
                                    />
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group as={Col} lg="6" controlId="lName">
                                    <Form.Label>Last Name</Form.Label>
                                    <Form.Control
                                        required
                                        type="text"
                                        placeholder="Chan"
                                        value={this.state.lastName} name="lastName" onChange={this.alphabetsOnly}
                                    />
                                    <Form.Control.Feedback >Looks good!</Form.Control.Feedback>
                                </Form.Group>
                            </Form.Row>
                            {/* Email */}
                            <Form.Row>
                                <Form.Group as={Col} lg="6" controlId="Email">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" required name='email' value={this.state.email} onChange={this.onChangeHandler}/>
                                </Form.Group>
                            </Form.Row>
                            {/* Address */}
                            <Form.Group controlId="Address">
                                <Form.Label>Address</Form.Label>
                                <Form.Control type="text" placeholder="Blk 123 Tampines Road" required name='address' value={this.state.address} onChange={this.onChangeHandler}/>
                            </Form.Group>
                            <Form.Row>
                                <Form.Group as={Col} lg="6" controlId="city">
                                    <Form.Label>City</Form.Label>
                                    <Form.Control type="text" placeholder="City" required value={this.state.city} name="city" onChange={this.alphabetsOnly}/>
                                    <Form.Control.Feedback type="invalid">
                                        Please provide a valid city.
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group as={Col} lg="3" controlId="State">
                                    <Form.Label>State</Form.Label>
                                    <Form.Control type="text" placeholder="State" required value={this.state.stateOfCtry} name="stateOfCtry" onChange={this.alphabetsOnly}/>
                                    <Form.Control.Feedback type="invalid">
                                        Please provide a valid state.
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group as={Col} lg="3" controlId="zipcode">
                                    <Form.Label>Zipcode</Form.Label>
                                    <Form.Control type="text" placeholder="Zipcode" name="zipcode" value={this.state.zipcode} required onChange={this.checkNumber}/>
                                    <Form.Text style={{color:`${textColor}`}}>
                                        6 digits only
                                    </Form.Text>
                                    <Form.Control.Feedback type="invalid">
                                        Please provide a valid zip.
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </Form.Row>
                            {/* Payment Details */}
                            <h3>Payment Details</h3>

                            <Form.Group>
                                <Form.Label >Card Type</Form.Label>
                                <Form.Check
                                    type="radio"
                                    label="Credit Card"
                                    name="payment"
                                    id="Radios1"
                                    onClick={() => this.cardTypeHandler('Credit Card')}
                                    
                                />
                                <Form.Check
                                    type="radio"
                                    label="Debit Card"
                                    name="payment"
                                    id="Radios2"
                                    onClick={() => this.cardTypeHandler('Debit Card')}
                                    
                                />
                                
                            </Form.Group>
                            {/* Name */}
                            <Form.Row>
                                <Form.Group as={Col} lg="6" controlId="firstNameCard">
                                    <Form.Label>First Name</Form.Label>
                                    <Form.Control
                                        required
                                        type="text"
                                        placeholder="Jackie"
                                        value={this.state.firstName} name="firstName" onChange={this.alphabetsOnly}
                                    />
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group as={Col} lg="6" controlId="lastNameCard">
                                    <Form.Label>Last Name</Form.Label>
                                    <Form.Control
                                        required
                                        type="text"
                                        placeholder="Chan"
                                        value={this.state.lastName} name="lastName" onChange={this.alphabetsOnly}
                                    />
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                </Form.Group>
                            </Form.Row>
                            {/* Card No */}
                            <Form.Row>
                                <Form.Group as={Col} lg="6" controlId="cardNo">
                                    <Form.Label>Card Number</Form.Label>
                                    <Form.Control type="text" required name="cardNo" value={this.state.cardNo} onChange={this.checkNumber}/>
                                    <Form.Text style={{color:`${textColor}`}}>
                                        16 digits
                                    </Form.Text>
                                </Form.Group>
                            </Form.Row>
                            {/* Card Details */}
                            <Form.Row>
                                <Form.Group as={Col} lg="6" controlId="expireDate">
                                    <Form.Label>Expiration Date</Form.Label>
                                    <Form.Control
                                        required
                                        type="text"
                                        placeholder="Month/Year"
                                        name="expDate" value={this.state.expDate} onChange={this.checkNumber}
                                    />
                                    <Form.Text style={{color:`${textColor}`}}>
                                        Example: 06/13
                                    </Form.Text>
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group as={Col} lg="3" xs="3" controlId="cvv">
                                    <Form.Label xs="12">CVV</Form.Label>
                                    <Form.Control
                                        required
                                        type="text"
                                        placeholder=""
                                        name="cvv" value={this.state.cvv} onChange={this.checkNumber}
                                    />
                                    <Form.Text style={{color:`${textColor}`}}>
                                        3 numbers back of the card
                                    </Form.Text>
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                </Form.Group>
                            </Form.Row>
                            
                            {/* Submit */}
                            <Form.Group>
                                <Form.Check
                                    required
                                    label="I Agree to terms and conditions"
                                    feedback="You must agree before submitting."
                                />
                            </Form.Group>
                            <Button type="submit">Submit</Button>
                        </Form>
                    </Col>

                    {/* Confirmation */}
                    <Col lg={4} >
                        <div className="bookDetails">
                    <h3>Hi {this.state.firstName} {this.state.lastName}</h3>
                    <p>Your trip is from {this.state.fromDate} to {this.state.toDate}, to {this.state.country}.</p>
                    <p className='mb-0'>Your billing details are:</p> 
                    <p className='my-0'> Email: {this.state.email}</p>
                    <p className='mt-0'> Address: {this.state.address}, {this.state.city}, {this.state.stateOfCtry}, {this.state.zipcode}</p>
                    <p> You have chosen to pay by {this.state.cardType}.</p>

                    <p className='my-0'>Check your details by clicking below</p>
                    <Button variant="outline-primary" size="sm" onClick={this.showHide} className="my-1">Show/Hide</Button>
                    {/*Hiding and showing like below is not secure but don't want effort to go to waste */}
                    <p className='my-0'>Card No: <div style={{display:`${this.state.display}`}} > {this.state.cardNo}</div><span style={myClass}></span>
                    </p>
                    <p className='my-0'>Expiration Date: <div style={{display:`${this.state.display}`}} > {this.state.expDate}</div><span style={myClass}></span>
                    </p>
                    <p className='mt-0'>CVV: <div style={{display:`${this.state.display}`}} > {this.state.cvv}</div><span style={myClass}></span>
                    </p>
                    
                    <p> Enjoy your trip!</p>
                    </div>
                    </Col>
                </Row>

            </div>
        )
    }
}
export default BookNow