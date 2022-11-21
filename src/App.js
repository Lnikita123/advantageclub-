import './App.css';
import React from 'react'
import {BrowserRouter as Router,Routes, Link , Route} from "react-router-dom"
import Subject from "./Subject"


function App() {
  const users = [
    {
      id: 1 , name: 'nikita',subject: ["hindi ","english ", "marathi "], marks: [
        { hindi: '101', english: '102', marathi: '103' },
      ]
    },
    {
      id: 2, name: 'Burce',subject: ["hindi ","english ", "marathi "] , marks: [
        { hindi: '101', english: '102', marathi: '103' }
      ]
    },
    {
      id: 3, name: 'Peter',subject: ["hindi ","english ", "marathi "],  marks: [
        { hindi: '101', english: '102', marathi: '103' }
      ]
    },
    {
      id: 4, name: 'Sam',subject: ["History","Bio", "marathi "] ,marks: [
        { History: '101', Bio: '102', marathi: '103' }
      ]
    },
  ]


  return (
    <div className="App">
      <Router>
        
     <h1>Student list</h1>
     {
      users.map((data)=>
        <div><Link to= {'/subject/'+data.id + "/"+ data.subject }><h3>{data.name}</h3></Link></div>
      )
     }

     <Routes>
     
     <Route  path="/subject/:id/:subject" component={Subject} />
     </Routes>
        </Router> 
              

    </div>
  );
}

export default App;
/*
<div><Link to ={"/user/"+data.id+"/"+data.name}><h3>{data.subject}</h3></Link></div>
<div><Routes path="/subject/:id"><Subject/></Routes></div>
*/