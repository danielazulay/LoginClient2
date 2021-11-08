import {useState} from 'react'
import InputTextile from './InputTextile'
import { useNavigate } from "react-router-dom";
import axios from 'axios'

const api = axios.create({baseURL:"http://localhost:4000" })
function Login(){
const navigate = useNavigate();
const [state,setState]=useState({

email:'',
password:'',

})

function handleChange(event){

setState({...state,[event.target.name]:event.target.value})
}

async function handleSubmit(event){
    event.preventDefault()

   try{
const response = await api.post("http://localhost:5000/login",state)
const resp = response.data.use._id
console.log(resp);
console.log(response.data.use._id);
navigate(`/edituser/${response.data.use._id}`)

       

   }catch(err){
   console.log(err.response);
}
}


return(
<div>
<form onSubmit={handleSubmit}>
<h1>Login</h1>

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

    <button type='submit'>entrar</button>
</form>


</div>

)


}

export default Login