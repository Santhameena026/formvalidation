import React from 'react'
import  { useState } from "react";
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import { TbPassword } from "react-icons/tb";
import { FaUserAlt } from "react-icons/fa";
import './App.css'

const Login = () => {

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
    
    
        if (formData.password.trim() === ""){
          newErrors.password = "Password is required"
        } else if (formData.password.length < 6) {
          newErrors.password = "Password must be at least 6 characters long";
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
          window.alert('Login successfully')
          navigate('/')
        }
      };
  return (
    <section className='bgcolor'>
    <Container>
       <Row className=' d-flex justify-content-center align-items-center'>
        <Col sm={8} lg={6} xl={4} className='mt-5'>
         <Form onSubmit={handleSubmit} className=' p-5 rounded-4 bg-light shadow mt-5  '>  
           <h3 className='text-center' style={{textShadow:"1px 1px blue"}}>Login</h3>
           <InputGroup className="mt-4">
           <InputGroup.Text id="basic-addon1" style={{backgroundColor:'pink'}}><FaUserAlt/></InputGroup.Text>
           <Form.Control
           type="text"
           id="username"
           name="username"
           value={formData.username}
           onChange={handleChange}
           placeholder="Enter Username"
           style={{backgroundColor:'rgba(128,128,128,0.1)'}}
           />
           
           </InputGroup>
           < div className="error text-danger">{errors.username}</div>

          <InputGroup className="mt-4">
          <InputGroup.Text id="basic-addon1" style={{backgroundColor:'pink',fontSize:'20px'}}><TbPassword/></InputGroup.Text>
          <Form.Control 
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Enter Password"
          style={{backgroundColor:'rgba(128,128,128,0.1)'}}  />
         </InputGroup>
         <div className="error text-danger">{errors.password}</div>
         <Form.Group className="mt-3">
        <Form.Check
          required
          label="Remember me"
          feedback="You must agree before submitting."
          feedbackType="invalid"
          
        />
        </Form.Group>

          <Button variant='primary' className='mt-4 w-100' type="submit" >Login</Button>
          <p className='mt-3'>Not a member?<Link to="/signup" className='text-decoration-none'> Register Now</Link></p>
        </Form>
        </Col>
      </Row>
    </Container>
    </section>
  )
}

export default Login