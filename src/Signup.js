import React from 'react'
import  { useState } from "react";
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { FaUserAlt } from "react-icons/fa";
import { RiMailFill } from "react-icons/ri";
import { TbPassword } from "react-icons/tb";
import InputGroup from 'react-bootstrap/InputGroup';
import { GiConfirmed } from "react-icons/gi";
import './App.css';


const Signup = () => {

    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
      });

    const [errors, setErrors] = useState({});
    const [isFormValid, setIsFormValid] = useState(false);
    const navigate =useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };

      const validateForm = () => {
        const newErrors = {};
    
        // Validation rules
        if (formData.username.trim() === "") {
          newErrors.username = "Username is required";
        }
    
        if (formData.email.trim() === "") {
          newErrors.email = "Email is required";
        } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
          newErrors.email = "Invalid email address";
        }

        if (formData.password.trim() === ""){
          newErrors.password = "Password is required"
        } else if (formData.password.length < 6) {
          newErrors.password = "Password must be at least 6 characters long";
        }
    
        if (formData.confirmPassword !== formData.password) {
          newErrors.confirmPassword = "Passwords do not match";
        }
    
        setErrors(newErrors);
    
        // Determine overall form validity
        const isValid = Object.keys(newErrors).length === 0;
        setIsFormValid(isValid);
    
        return isValid;
      };

      const handleSubmit = (e) => {
        e.preventDefault();
        const isValid = validateForm();
    
        if (isValid) {
          window.alert('Signup successfully')
          navigate('/login')
        }
      };

  return (
    <section className='backimg'>
    <Container>
    <Row className='d-flex justify-content-center align-items-center'> 
    <Col sm={6} lg={6} md={4} xl={4} className='mt-2'>
     <Form onSubmit={handleSubmit} className='rounded-4 bg-light  p-3 mt-5 box'>
    <h3 className='text-center'>Create New Account</h3>
      <InputGroup className="mt-4">
        <InputGroup.Text id="basic-addon1"><FaUserAlt/></InputGroup.Text>
        <Form.Control
        type="text"
        id="username"
        name="username"
        value={formData.username}
        onChange={handleChange}
        placeholder="Enter Username "
        className='input'/> 
      </InputGroup>
      <p className="error text-danger">{errors.username}</p>
        
      <InputGroup className="mt-4">
        <InputGroup.Text id="basic-addon1"><RiMailFill/></InputGroup.Text>
        <Form.Control 
         type="email"
         id="email"
         name="email"
         value={formData.email}
         onChange={handleChange}
        placeholder="Enter Email"
         className='input'/>
      </InputGroup>  
      <div className="error text-danger">{errors.email}</div>

      <InputGroup className="mt-4">
        <InputGroup.Text id="basic-addon1"><TbPassword/></InputGroup.Text>
        <Form.Control 
        type="password"
        id="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        placeholder="Enter Password" 
        className='input' />
      </InputGroup>
      <div className="error text-danger">{errors.password}</div>

      <InputGroup className="mt-4">
        <InputGroup.Text id="basic-addon1"><GiConfirmed/></InputGroup.Text>
        <Form.Control 
        type="password"
        id="confirmPassword"
        name="confirmPassword"
        value={formData.confirmPassword}
        onChange={handleChange}
        placeholder="Enter Confirm password"
        className='input'/>
        </InputGroup>
        <div className="error text-danger">{errors.confirmPassword}</div>

        <Form.Group className="mt-3">
        <Form.Check
          required
          label="I agree with terms and conditions"
          feedback="You must agree before submitting."
          feedbackType="invalid"
        />
        </Form.Group>
       <div className='text-center'><Button className='mt-4 w-100' type="submit" style={{backgroundColor:'rgba(0,0,0,0.7)'}}>Sign Up</Button></div>

       <p className='mt-2'>Already a member? <Link to='/login' className='text-decoration-none'>Login Here </Link></p>
    </Form>
    </Col>
    </Row>
  </Container>
  </section>
);
};
  


export default Signup