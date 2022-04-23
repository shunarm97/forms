const Form = () => {

    const myfunc =  () => {
            
    }
   

    const objInput = {
        value : 5,
        onChange: myfunc(),
        placeholder: "contraseña"
    }

    return (
        <form>

            <input {...objInput} />
        </form>
    )
}
export default Form