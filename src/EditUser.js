import {useState,useEffect } from 'react'
import {useParams } from 'react-router-dom'
import InputTextile from './InputTextile'
import axios from 'axios'

const api = axios.create({baseURL:"http://localhost:4000" })
function UserForm(props){

const [state,setState]=useState({
name:'',
email:'',
password:'',
id:'',
})

function handleChange(event){

setState({...state,[event.target.name]:event.target.value})
}

const { id } = useParams();

useEffect(()=>{
    async function fetchUser(){
        try{

            const response = await api.get(`http://localhost:5000/userDetailed/${id}`)
            setState({...response.data})

        }catch(err){console.log(err)}
    }
    fetchUser()
},[id])

async function handleSubmit(event){
    event.preventDefault()

   try{
const response = await api.put(`http://localhost:5000/user/${id}`,state)
console.log(response);

    

       

   }catch(err){
   console.log(err.response);
}
}


return(
<div>
<h1>Editar Ususario</h1>
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