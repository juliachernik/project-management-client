import "./App.css";
import { Routes, Route } from "react-router-dom"; // <== IMPORT
 
import Navbar from "./components/Navbar";     // <== IMPORT
import HomePage from "./pages/HomePage";     // <== IMPORT
import ProjectListPage from "./pages/ProjectListPage"; 
import ProjectDetailsPage from "./pages/ProjectDetailsPage"; 
import EditProjectPage from "./pages/EditProjectPage"; 
 
function App() {
  return (
    <div className="App">
      
     {/* Below: ADD <Navbar>, <Routes> & <Route> */}
      <Navbar />
 
      <Routes>      
        <Route path="/" element={ <HomePage /> } />
        <Route path="/projects" element={<ProjectListPage />} />
        <Route path="/projects/:projectId" element={<ProjectDetailsPage />} />   
        <Route path="/projects/edit/:projectId" element={ <EditProjectPage /> } />    
      </Routes>
      
    </div>
  );
}
 
export default App;




// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
