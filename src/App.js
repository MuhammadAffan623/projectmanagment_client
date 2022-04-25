import './App.css';
import Login from './pages/login/Login';
import Signup from "./pages/Signup/Signup";
import AddProject from './pages/addProject/addProject';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
// import Uploadimage from './pages/Uploadimage';
import Currentproject from './pages/currentProject/Currentproject';
import Navbar from "./pages/Navbar/Navbar"
import ArchievedProject from './pages/ArchievedProject/ArchievedProject';
import CompletedProject from './pages/completedProject/CompletedProject';
import Success from './pages/Success';

function App() {
  return (
    <div className="App">
      <BrowserRouter> 
        <Navbar/>
        <Routes>

          <Route path='/' element={<Login />} /> 
          <Route path='/signup' element={<Signup/>} /> 
          <Route path='/addProject' element={<AddProject/> } /> 
          <Route path='/myproject' element={<Currentproject/> } /> 
          <Route path='/archieveproject' element={<ArchievedProject/>} /> 
          <Route path='/completedproject' element={<CompletedProject/>} /> 
          <Route path='/success' element={<Success/>} /> 

         </Routes>
        


        </BrowserRouter>
    </div>
  );
}

export default App;
