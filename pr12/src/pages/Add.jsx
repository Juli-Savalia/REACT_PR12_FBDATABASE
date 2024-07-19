import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Addtodo } from '../redux/action/userAction';
const Add = () => {

    const [todo,setTodo] = useState("");
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        let obj = {
            id: Math.floor(Math.random() * 100000),
            todo: todo
        }
        console.log(obj);
        alert("Record Added Successfully...")
        dispatch(Addtodo(obj));
        setTodo("");
    }

  return (
    <>
        <div align="center">
            <div className="container my-5">
                <div className="d-flex align-items-center justify-content-center">
                    <div className="w-50">
                        <h3 className='bg-dark text-white py-2 rounded mb-3'>Todo List</h3>
                        <form action="" className='d-flex' onSubmit={handleSubmit}>
                            <input type="text" className='py-2 px-2 w-100 border border-2 rounded-start border-dark' placeholder='Add a Todo...' onChange={ (e) => setTodo(e.target.value)} value={todo}/>
                            <input type="submit" value="submit" className='px-4 bg-primary text-white border border-primary rounded-end'/>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Add