const Users = ({data, handlerOnDelete}) => {


    return (
        <div>
            <h1>{data.name}</h1>
            <button onClick={() => handlerOnDelete(data.id)}>Eliminar</button>
        </div>
    )

}

export default Users