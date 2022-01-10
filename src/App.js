import './App.css';
import EmployeeList from './components/EmployeeList'
import EmployeeContextProvider from './contexts/EmployeeContext';

function App() {
  return (
    <div className="container">
      <header className="Header"><a target="_blank" rel="noreferrer" href='https://plat4mation.com' ><img src={require('./Images/logo.png')} className="LogoImg" alt="logo"></img></a></header>

      <div>
        <EmployeeContextProvider>
          <EmployeeList />
        </EmployeeContextProvider>
      </div>

      <footer className="Footer">Copyright 2022 - Developed by <a target="_blank" rel="noreferrer" href='https://ghadeer.nl' ><b>Ghadeer Jarullah</b></a></footer>
    </div>

  );
}

export default App;
