

import {  BrowserRouter,Routes,Route } from "react-router-dom";
import UserForm from './UserForm'
import Login from './login'
import Edituser from './EditUser'

function App() {
  return (
    <BrowserRouter>
<Routes>
    <Route path="/" element={<UserForm/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/edituser/:id" element={<Edituser/>}/>

    </Routes>
    </BrowserRouter>
  );
}

export default App;