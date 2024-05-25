import React from 'react'
import styles from "../page.module.css";
import { FaInbox, FaStar, FaRegCalendarCheck } from "react-icons/fa6";
import { FaRegCalendarAlt } from "react-icons/fa";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Marked = () => {

  

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

              <Items add_string = {marked_string} setbox = {setadd_checkbox} addBox = {add_checkbox}/>
          
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