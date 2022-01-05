import { createContext, useState, useEffect } from "react";

export const EmployeeContext = createContext();

const EmployeeContextProvider = (props) => {

    const [employees, setEmployees] = useState([
        {id:1, fname: 'Piper', lname: 'Yates', email: 'cras@protonmail.edu', phone: '(844) 610-4272'},
        {id:2, fname: 'Tallulah', lname: 'Ryan', email: 'morbi@hotmail.com', phone: '1-832-351-7038'},
        {id:3, fname: 'Luke', lname: 'Mcmahon', email: 'urna@yahoo.edu', phone: '(871) 158-3658'},
        {id:4, fname: 'Porter', lname: 'Acosta', email: 'parturient@outlook.couk', phone: '1-264-684-4712'}
    ])

    useEffect(()=> {
        setEmployees(JSON.parse(localStorage.getItem('employees')))
    },[])
    
    useEffect(() => {
        localStorage.setItem('employees', JSON.stringify(employees));
    })

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