import {useState} from 'react'
import InputTextile from './InputTextile'
import axios from 'axios'
import { useNavigate } from "react-router-dom";

const api = axios.create({baseURL:"http://localhost:4000" })
function UserForm(){
const navigate = useNavigate()
const [state,setState]=useState({
name:'',
email:'',
password:'',
id:'',
})

function handleChange(event){

setState({...state,[event.target.name]:event.target.value})
}

async function handleSubmit(event){
    event.preventDefault()

   try{
const response = await api.post("http://localhost:5000/signUp",state)
console.log(response);

    
navigate('/login')
       

   }catch(err){
   console.log(err.response);
}
}


return(
<div>
<h1>Sign Up</h1>
<form onSubmit={handleSubmit}>
<InputTextile
name='name'
    type="text"
    value={state.name}
    onChange={handleChange}
    label="name"
/>

<InputTextile
name='email'

    type="text"
    value={state.email}
    onChange={handleChange}
    label="email"
/>

<InputTextile
name='password'

    type="password"
    value={state.password}
    onChange={handleChange} 
    label="password"
/>

    <button type='submit'>cadastrar</button>
</form>


</div>

)


}

export default UserForm