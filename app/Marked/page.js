"use client"
import styles from "../page.module.css";
import { FaInbox, FaStar, FaRegCalendarCheck,FaTrashCan } from "react-icons/fa6";
import { FaRegCalendarAlt } from "react-icons/fa";
import Items from "../../components/Items";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import React, { useState, useEffect } from 'react';

const Marked = () => {

  const [add_task, setadd_task] = useState(0)
  const [add_string, setadd_string] = useState([])
  const [marked_string, setmarked_string] = useState([])
  const [add_checkbox, setadd_checkbox] = useState([])
  const [inputValue, setInputValue] = useState('');

  // 0 = reset 
  // 1 = writing 
  // 2 = save

  const btn_clicked = () => {
    if (add_task == 0) {
      document.getElementById("task").value = "";
      setadd_task(1);
    } else {

      setadd_task(0);
      setadd_string([...add_string, inputValue]);
      setInputValue('');
      localStorage.setItem("nexttodo", [...add_string, inputValue]);
    }
  }

  const deleteTodo = () => {
    add_checkbox.reverse().forEach(element => {
      add_string.splice(element,1)
      
    });
    localStorage.setItem("nexttodo", add_string)
    setadd_string([...add_string]);
    setadd_checkbox([])
    
  }

  // const submitForm = (e) =>{
    
  //   if(e.keyCode == 13){
  //     btn_clicked();
  //   }
  // }

  useEffect(() => {
    setTimeout(() => {
      setadd_string(localStorage.getItem("nexttodo").split(","))
      console.log(add_string)
    }, 1000);

    
  }, [])

  return (
    <>
    <Navbar nav="Marked"/> 
    <div className={styles.main}>
      <div className={styles.topics}>
        <h1>Topics</h1>
        <ul>
          <li><i><FaInbox /></i> All</li>
          <li className={styles.invert_active} ><i><FaStar /></i>Marked</li>
          <li><i><FaRegCalendarCheck /></i>Today</li>
          <li><i><FaRegCalendarAlt /></i>Week</li>
        </ul>
      </div>
      <div className={styles.todos}>
          <div className={styles.tasks}>
            <div className={styles.taskHead}>
            <h1>Tasks</h1>
            <i onClick={()=>{deleteTodo()}}><FaTrashCan /></i>
            </div>

            <ul>  

              <Items add_string = {add_string} setbox = {setadd_checkbox} addBox = {add_checkbox}/>
          
            </ul>
          </div>
          <div className={styles.add_task_btn}>
            <form action="#" method="post" onSubmit={(e) => { e.preventDefault(); }} >
              <input type="checkbox" name="add_task" id="add_task" unchecked="true" />
              <input type="text" name="task" id="task" onChange={(e)=> setInputValue(e.target.value)}/>
              <button type="submit"  ><label htmlFor="add_task" onClick={() => btn_clicked()}>{(add_task == 0) ? "Add Task" : "Add"}</label></button>
            </form>
          </div>
        </div>
    </div>
    <Footer/>
  </>
  )
}

export default Marked