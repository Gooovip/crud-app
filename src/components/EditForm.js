import {Form, Button} from 'react-bootstrap';
import {EmployeeContext} from '../contexts/EmployeeContext';
import {useContext, useState} from 'react';

 
const EditForm = ({theEmployee}) =>{

    const id = theEmployee.id;
    const [fname, setFname] = useState(theEmployee.fname);
    const [lname, setLname] = useState(theEmployee.lname);
    const [email, setEmail] = useState(theEmployee.email);
    const [phone, setPhone] = useState(theEmployee.phone);
    const {updateEmployee} = useContext(EmployeeContext);
    const updatedEmployee = {id, fname, lname, email, phone}

    const handleSubmit = (e) => {
        e.preventDefault();
        updateEmployee(id, updatedEmployee)
    }

    return (

        <Form onSubmit={handleSubmit}>
            <Form.Group className="m-2">
                <Form.Control 
                type="number"  
                name="id"
                value={id}
                disabled
                />
            </Form.Group >
            <Form.Group className="m-2">
                <Form.Control 
                type="text" 
                placeholder="First Name *" 
                required
                name="fname"
                value={fname}
                onChange={(e)=> setFname(e.target.value)}  
                />
            </Form.Group>
            <Form.Group className="m-2">
                <Form.Control 
                type="text" 
                placeholder="Last Name *" 
                required
                name="lname"
                value={lname}
                onChange={(e)=> setLname(e.target.value)}
                 />
            </Form.Group>
            <Form.Group className="m-2">
                <Form.Control 
                type="email" 
                placeholder="Email *" 
                required
                name="email"
                value={email}
                onChange={(e)=> setEmail(e.target.value)} 
                 />
            </Form.Group>
            <Form.Group className="m-2">
                <Form.Control 
                type="text" 
                placeholder="Phone Number " 
                required
                name="phone"
                value={phone}
                onChange={(e)=> setPhone(e.target.value)} 
                />
            </Form.Group>
            <Button className="m-2 btn btn-secondary" variant="success" type="submit">
                Edit Employee
            </Button>
        </Form>

    )
}

export default EditForm;