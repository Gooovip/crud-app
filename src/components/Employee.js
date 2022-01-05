import { EmployeeContext } from '../contexts/EmployeeContext';
import { useContext, useEffect, useState } from 'react';
import { Modal, Button,OverlayTrigger, Tooltip } from 'react-bootstrap';
import EditForm from './EditForm'

const Employee = ({ employee }) => {

    const { deleteEmployee } = useContext(EmployeeContext)
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    useEffect(() => {
        handleClose()
    }, [employee])

    return (
        <>
            <div className="card">
                <div className="badge"><span className='firstInit'>{employee.fname[0].toUpperCase()}</span><span className='lastInit'>{employee.lname[0].toUpperCase()}</span></div>
                <div className="cardTitle">{employee.fname} {employee.lname}</div>
                <div className="cardBody">
                    <p>E-Number: {employee.id}</p>
                    <p>Email: {employee.email}</p>
                    <p>Phone: {employee.phone}</p>
                </div>
                <div className='cardFooter'>
                    <OverlayTrigger
                        overlay={
                            <Tooltip id={`tooltip-top`}>
                                Edit
                            </Tooltip>
                        }>
                        <button onClick={handleShow} className="btn text-warning btn-act " data-toggle="modal"><i className="material-icons editIcon" >&#xE254;</i></button>
                    </OverlayTrigger>
                    <OverlayTrigger
                        overlay={
                            <Tooltip id={`tooltip-top`}>
                                Delete
                            </Tooltip>
                        }>
                        <button onClick={() => deleteEmployee(employee.id)} className="btn text-danger btn-act" data-toggle="modal"><i className="material-icons deleteIcon">&#xE872;</i></button>
                    </OverlayTrigger>
                </div>

                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>
                            Edit Employee
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <EditForm theEmployee={employee} />
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>

        </>
    )
}


export default Employee;