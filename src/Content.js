import React, { useEffect, useState } from "react";
import { FaTrash } from "react-icons/fa";
import './App.css';

const Content = () => {
  const [Items, setItems] = useState([
    { id: 1, checked: true, about: 'truth never fails' },
    { id: 2, checked: true, about: 'Hard work wins' },
    { id: 3, checked: true, about: 'always think positive' }
  ]);

//   useEffect(()=>{

//   },[])

  const change = (x) => {
    const updatedItems = Items.map(item => (
      x === item.id ? { ...item, checked: !item.checked } : item
    ));
    setItems(updatedItems);
  };

  const deleteTask = (idToDelete) => {
    for(let i of Items){
        if(i.id===idToDelete){
            if(i.checked===true){
                const updatedItems = Items.filter(item => item.id !== idToDelete);
                setItems(updatedItems);
            }
          else{
            alert('task not completed')
            break
          }
        }
    }
  };

  return (
    <div>
      <ul>
        {Items.length?Items.map(item => (
          <li className="item" key={item.id}>
            <input type='checkbox' onChange={() => change(item.id)} checked={item.checked} />
            <label>{item.about}</label>
            <FaTrash role="button" tabIndex='0' onClick={() => deleteTask(item.id)} />
          </li>
        )):(<h3>The List Is Empty Now</h3>)}
      </ul>
    </div>
  );
}

export default Content;
