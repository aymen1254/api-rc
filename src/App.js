import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Spinner } from 'react-bootstrap';
import axios from 'axios';

function App() {
const [users, setUsers] = useState([])
const [loading, setLoading] = useState(true)
// useEffect(() => {
//   const getUsers = () => {
//   fetch('https://jsonplaceholder.typicode.com/users')
//   .then(response => response.json())
//   // .then(response=>console.log("the response is",response))
//   .then(data => setUsers(data))
//   .catch(error=>console.log(error))
//   }
// getUsers()
// setLoading(false)
// console.log(users)
// }, [])

useEffect(() => {
 const fetchVideos = async() => {
   try {
      const people = await axios.get('https://jsonplaceholder.typicode.com/photos')
      setUsers(people.data)
      setLoading(false)
      console.log(people)
   } catch (error) {
     console.log(error)
   }
 }
 fetchVideos()
 console.log(users)
}, [])

  return (
    <div className="App">
      {
        loading ? <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
     : <div>

   {users.map(el=>
    <div>
      <h1> {el.title} </h1>
    </div>
    )}
    </div> }
    
    </div>
  );
}

export default App;
