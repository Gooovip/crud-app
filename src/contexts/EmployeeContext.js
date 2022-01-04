import { createContext, useState } from "react";

export const EmployeeContext = createContext();

const EmployeeContextProvider = (props) => {

    const [employees, setEmployees] = useState(
        [{id:1, fname: 'Ghadeer', lname: 'Jarullah', email: 'ghadeer@gmail.com', phone: '555-4444-333'},
        {id:2, fname: 'Ali', lname: 'Jar', email: 'ali@gmail.com', phone: '574-4644-683'},
        {id:3, fname: 'Ahmed', lname: 'Ali', email: 'Ahmed@gmail.com', phone: '542-6825-325'},
        {id:4, fname: 'Jan', lname: 'Deep', email: 'jan@gmail.com', phone: '534-4321-603'}
    ])


    const addEmployee = (id, fname, lname, email, phone) => {
        setEmployees([...employees , {id, fname, lname, email, phone}])
    }
    
    const deleteEmployee = (id) => {
        setEmployees(employees.filter(employee => employee.id !== id))
    }
    
    const updateEmployee = (id, updatedEmployee) => {
        setEmployees(employees.map((employee) => employee.id === id ? updatedEmployee : employee))
    }


    return (
        <EmployeeContext.Provider value={{employees,addEmployee, deleteEmployee, updateEmployee}}>
            {props.children}
        </EmployeeContext.Provider>

    )
};

export default EmployeeContextProvider;