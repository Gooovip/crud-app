import Employee from './Employee'
import { EmployeeContext } from '../contexts/EmployeeContext';
import { useContext, useState, useEffect } from 'react';
import AddForm from './AddForm';
import { Modal, Button, } from 'react-bootstrap';
import './EmployeeList.css';


const EmployeeList = () => {


    const { employees } = useContext(EmployeeContext)
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        handleClose()
    }, [employees])

    return (
        <>

            <div className="Nav">
                <div className="row">
                    <div className="col-sm-9">
                        <h2><b>Employees</b> List</h2>
                    </div>
                    <div className="col-sm-3">
                        <Button onClick={handleShow} className="btn btn-success" data-toggle="modal"><i className="material-icons">&#xE147;</i><span className='Add'> Add New Employee</span> </Button>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-12 justify-content-center EmployeeList">
                    {employees.map(employee => (
                        <div className="Employee" key={employee.id}>
                            <Employee employee={employee} />
                        </div>
                    ))}
                </div>
            </div>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Employee</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <AddForm />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );


}


export default EmployeeList;