import './Employee.css'
import {EmployeeContext} from '../contexts/EmployeeContext';
import {useContext} from 'react';

const Employee = ({ employee }) => {

    const {deleteEmployee} = useContext(EmployeeContext)

    return (
        <div className="card">
            <div className="badge"><span className='firstInit'>{employee.fname[0].toUpperCase()}</span><span className='lastInit'>{employee.lname[0].toUpperCase()}</span></div>
            <div className="card__title">{employee.fname} {employee.lname}</div>
            <div className="card__body">
                <p>E-Nr: {employee.id}</p>
                <p>Email: {employee.email}</p>
                <p>Phone: {employee.phone}</p>
            </div>
            <div className='card__footer'>
                <button className="btn text-warning btn-act " data-toggle="modal"><i className="material-icons" data-toggle="tooltip" title="Edit">&#xE254;</i></button>
                <button onClick={() => deleteEmployee(employee.id)}  className="btn text-danger btn-act" data-toggle="modal"><i className="material-icons" data-toggle="tooltip" title="Delete">&#xE872;</i></button>
            </div>
        </div>

        
    )
}


export default Employee;