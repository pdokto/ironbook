import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import users from "./users";



function App() {
  const ironHackersData=users
  const [ironHackers, setIronHackers]=useState(ironHackersData)
  const [search, setSearch] = useState('')
  const [isTeacher, setTeacher]= useState(true)
  const [isStudent, setStudent]= useState(true)
  const [city, setCity] = useState('Berlin')

  
  let filteredIronHackers = ironHackers.filter((ironHacker)=>{
    if(!isTeacher && ironHacker.role==="teacher") return
    if(!isStudent && ironHacker.role==="student") return
    if(ironHacker.campus==city) return ironHacker.firstName.toLowerCase().includes(search.toLowerCase()) || ironHacker.lastName.toLowerCase().includes(search.toLowerCase()) 
  })

  
  const handleSearchInput = e => {
    setSearch(e.target.value)
  }

  const handleStudentChange = e => {
    setStudent(e.target.checked)
  }

  const handleTeacherChange = e => {
    setTeacher(e.target.checked)
  }

  const handleCityChange = e =>{
    setCity(e.target.value)
  }

    
  return (
    <div className="App">
      <header className="App-header">
       <h1>Ironbooks</h1>
       <div>
       
        <input type="text" value={search} onChange={handleSearchInput}/>
       </div>
       <div>
        
        <label>Student</label>
        <input type="checkbox" checked={isStudent} onChange={handleStudentChange}/>
        <label>Teacher</label>
        <input type="checkbox" checked={isTeacher} onChange={handleTeacherChange}/>
       
       <label htmlFor="city">Choose a city:</label>
        <select name="city" id="city" onChange={handleCityChange} default="Berlin">
          <option value="Berlin">Berlin</option>
          <option value="Paris">Paris</option>
          <option value="Lisbon">Lisbon</option>
        </select> 
       </div>
       <table>
       <thead>
        <tr>
           <th>First Name</th>
           <th>Last Name</th>
           <th>Campus</th>
           <th>Role</th>
           <th>Links</th>
        </tr>
        </thead> 
        <tbody> 
    
          {filteredIronHackers.map(ironHacker => {
            return (
            <tr key={ironHacker.lastName+ironHacker.firstName}>
              <td>{ironHacker.firstName}</td>
              <td>{ironHacker.lastName}</td>
              <td>{ironHacker.campus}</td>
              <td>{ironHacker.role}</td>
              <td>{"linkedin" in ironHacker && <a href={ironHacker.linkedin}><img height='25px' src="https://cdn-icons-png.flaticon.com/512/174/174857.png"/></a>}</td>
            </tr>
          )     
          })}
        </tbody> 
       </table>
      </header>
    </div>
  )
}

export default App
