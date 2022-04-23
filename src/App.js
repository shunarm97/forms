import { useState } from "react";
import { useForm } from "react-hook-form";
import Users from "./components/Users";

function App() {

const [users, setUsers] = useState([])



  const { register, handleSubmit, reset} = useForm();
  
  const defaultValues= {name: "", email: "", about: "", options: "1" }
  
  const onSubmit = data => {
    console.log(data)
    setUsers([...users, data ])
    reset(defaultValues)

    };

const list = users.map(user => <Users data={user} key={user.name}/>)
  return (
    <>
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>NOMBRE</h2>
      <input {...register("name", {value : ""})} />
      <h2>EMAIL</h2>
      <input {...register("email", {required: false})} />   
      <h2>about</h2>
      <input {...register("about")}/>
      <select {...register("options")}>
        <option value="1">opcion 1</option>
        <option value="2">opcion 2</option>
        <option value="3">opcion 3</option>
      </select>
      <input type="submit" />
    </form>
      <div>
      {list}
      </div>
      </>
      
  );
}

export default App;
