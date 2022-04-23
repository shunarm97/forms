import { useState } from "react";
import { useForm } from "react-hook-form";
import Users from "./components/Users";
import data from "./info.json";
function App() {

const [users, setUsers] = useState([])


const [spanish, setSpanish] = useState(false)
const [id, setId] = useState(1)


  const { register, handleSubmit, reset} = useForm();
  
  const defaultValues= {name: "", email: "", about: "", options: "1" }
  
  const deleteUser = (id) => {
    const filterUsers = users.filter((user) => user.id !== id)
    console.log(filterUsers)
    setUsers(filterUsers)
  }
  const onSubmit = data => {
    const userObj = {...data, id} 
   
    console.log( userObj)
    setId(id + 1)
    setUsers([...users, userObj ])
    reset(defaultValues)
      
    };

    const condi = () => {
      if(spanish) {
        return data.español
      }
      else{
        return data.english
      }
    }
const list = users.map(user => <Users data={user} handlerOnDelete={deleteUser} key={user.id}/>)
  return (
    <>
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1>{condi().title}</h1>
      <button onClick={() => setSpanish(!spanish)}>cambiar idioma</button>
      <h2>{condi().input1}</h2>
      <input {...register("name", {value : ""})} />
      <h2>{condi().input2}</h2>
      <input {...register("email", {required: false})} />   
      <h2>{condi().input3}</h2>
      <input {...register("about")}/>
      <select {...register("options")}>
        {condi().options.map((item) => <option value={item.value} key={item.value}>{item.name}</option>)}
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
