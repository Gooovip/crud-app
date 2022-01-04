import {Form, Button} from 'react-bootstrap';
import {EmployeeContext} from '../contexts/EmployeeContext';
import {useContext, useState} from 'react';

const AddForm = () => {

    const {addEmployee} = useContext(EmployeeContext);

    const [newEmployee, setNewEmployee] = useState({
        id:"", fname:"", lname:"", email:"", phone:""
    });

    const onInputChange = (e) => {
        setNewEmployee({...newEmployee,[e.target.name]: e.target.value})
    }

    const {id, fname, lname, email, phone} = newEmployee;

    const handleSubmit = (e) => {
        e.preventDefault();
        addEmployee(id, fname, lname, email, phone);
    }

    return (

        <Form onSubmit={handleSubmit}>
            
            <Form.Group className="mb-3">
                <Form.Control 
                type="number" 
                placeholder="Employee Number *" 
                required
                name="id"
                value={id}
                onChange = { (e) => onInputChange(e)}  
                />
            </Form.Group >
            <Form.Group className="mb-3">
                <Form.Control 
                type="text" 
                placeholder="First Name *" 
                required
                name="fname"
                value={fname}
                onChange = { (e) => onInputChange(e)}  
                />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Control 
                type="text" 
                placeholder="Last Name *" 
                required
                name="lname"
                value={lname}
                onChange = { (e) => onInputChange(e)} 
                 />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Control 
                type="email" 
                placeholder="Email *" 
                required
                name="email"
                value={email}
                onChange = { (e) => onInputChange(e)} 
                 />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Control 
                type="text" 
                placeholder="Phone Number " 
                required
                name="phone"
                value={phone}
                onChange = { (e) => onInputChange(e)}  
                />
            </Form.Group>
            <Button className="mb-3" variant="success" type="submit" block="true">
                Add New Employee
            </Button>
        </Form>

    )
}

export default AddForm;