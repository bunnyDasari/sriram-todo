import ReactPopup from "./pop"
const Todo = ({details,onDel})=>{
    const{todo,id} = details
    const onclickbtn = ()=>{
        onDel(id)
    }
    return(
        <div>
            <h1>{todo}</h1>
            <button onClick={onclickbtn}>Delete</button>
            <ReactPopup />
        </div>
    )
}
export default Todo