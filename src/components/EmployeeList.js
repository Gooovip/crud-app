import Employee from './Employee'
import { EmployeeContext } from '../contexts/EmployeeContext';
import { useContext, useState, useEffect } from 'react';
import AddForm from './AddForm';
import { Modal, Button, Alert} from 'react-bootstrap';


const EmployeeList = () => {

    const { employees } = useContext(EmployeeContext)
    const [show, setShow] = useState(false);
    const [showAlert, setShowAlert] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleShowAlert = () => {
        setShowAlert(true);
        setTimeout(() => {
            setShowAlert(false);
        }, 2000)
    }

    useEffect(() => {
        handleClose();
        return () => {
            handleShowAlert();
        }
    }, [employees])

    return (
        <>
            <div className="NavBar">
                <div className="row">
                    <div className="col-xl-4 col-sm-12">
                        <h2><b>Employees List</b></h2>
                    </div>
                    <div className="col-xl-4 col-sm-12"></div>
                    <div className="col-xl-4 col-sm-12">
                        <Button onClick={handleShow} className="btn btn-success" data-toggle="modal"><i className="material-icons AddIcon">&#xE147;</i><span className='AddText'> Add New Employee</span> </Button>
                    </div>
                </div>
            </div>
            <Alert show={showAlert} variant="success">
                Emlployee List Updated Succefully!
            </Alert>
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