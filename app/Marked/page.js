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
        <div>

          <h1>Tasks</h1>
          <ul>
            <li>
              <div className={styles.task_text}>
                <input type="checkbox" name="task" id="task1" />
                <label htmlFor="task1">Lorem ipsum dolor sit amet consectetur.</label>
              </div>
              <div className={styles.marks}>

                <input type="checkbox" name="task" id="mark1" />
                <label htmlFor="mark1"><i><FaStar /></i></label>
              </div>
            </li>
            <li>
              <div className={styles.task_text}>
                <input type="checkbox" name="mark" id="task2" />
                <label htmlFor="task2">Lorem ipsum dolor sit amet consectetur.</label>
              </div>
              <div className={styles.marks}>
                <input type="checkbox" name="mark" id="mark2" />
                <label htmlFor="mark2"><i><FaStar /></i></label>
              </div>
            </li>
          </ul>
        </div>
        <div className={styles.add_task_btn}>
          <a href="">Add Task</a>
        </div>
      </div>
    </div>
    <Footer/>
  </>
  )
}

export default Marked