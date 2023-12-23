import React, { useEffect, useRef, useState } from 'react'
import "./To_do_list.css"

function To_do_list() {
    const [log,setlog]=useState();

    const[todo,settodo]=useState([]);

    const inputref=useRef();

    const handltodo = () =>{
        if(todo.length<10){
        const text = inputref.current.value;
        const select = {select : false,text}
        settodo([...todo,select]);
        inputref.current.value="";
    }else{
        console.log('limte done')
        setlog('You have reached the maximum number of tasks')
    }
    }
    const handlitemdone = (index)=>{
        const newtodos = [...todo];
        newtodos[index].select = !newtodos[index].select;
        settodo(newtodos);

    }
    const handliremove=(index)=>{
        const newtodos =[...todo];
        newtodos.splice(index,1);
        settodo(newtodos);
        setlog('')


    }
   
  return (
    <div className='contanerto'>
        <div className='contanet'> 
            <div className='header'>
                <h1>What do you want to do tody ... 📋</h1>
            </div>
            <div className='list'>
                <ul>
                    {todo.map(({text,select},index)=>{
                        return ( <div className='item'>
                                    <li
                                        className={select ? "done" : "" }
                                        key={index}
                                        onClick={()=>handlitemdone(index)}>{text}
                                    </li>
                                    <span onClick={()=>handlitemdone(index)}>{select?'✔️':'Make isDone'}</span>
                                    <span onClick={()=>handliremove(index)}>❌</span>
                                </div>
                               )
                    })}
                </ul>
                
            </div>
            <div className='actions'>
            <p>{log}</p>
                <input id='input1' ref={inputref} placeholder='What is your next task ?'/>
                <button onClick={handltodo}>Add To List </button>
            </div>
        </div>
    </div>
  )
}

export default To_do_list;