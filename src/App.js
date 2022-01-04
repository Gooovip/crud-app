import './App.css';
import EmployeeList from './components/EmployeeList'
import EmployeeContextProvider from './contexts/EmployeeContext';


function App() {
  return (
    <div className="container">
      <header className="Header"><a target="_blank" rel="noreferrer" href='https://plat4mation.com' >plat4mation</a></header>
      
      <div>
        <EmployeeContextProvider>
          <EmployeeList />
        </EmployeeContextProvider>
      </div>
      <footer className="Footer">Copyright 2022 - Diveloped by <a target="_blank" rel="noreferrer" href='https://ghadeer.nl' >Ghadeer Jarullah</a></footer>
    </div>

  );
}

export default App;
