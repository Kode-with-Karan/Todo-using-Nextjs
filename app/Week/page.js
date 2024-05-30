"use client"
import React, { useState, useEffect } from 'react';
import styles from "../page.module.css";
import { FaInbox, FaStar, FaRegCalendarCheck, FaTrashCan } from "react-icons/fa6";
import { FaRegCalendarAlt } from "react-icons/fa";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Items from "../../components/Items";

const Week = () => {

  const [add_task, setadd_task] = useState(0)
  const [counter, setcounter] = useState(0)
  const [add_string, setadd_string] = useState([])
  const [add_string_date, setadd_string_date] = useState([])
  const [add_mark, setadd_mark] = useState([])
  const [add_checkbox, setadd_checkbox] = useState([])
  const [inputValue, setInputValue] = useState('');

  // 0 = reset 
  // 1 = writing 
  // 2 = save

  const date = new Date();
  let fullDate = date.getDate() + "" + date.getMonth() + "" + date.getFullYear();

  const btn_clicked = () => {
    if (add_task == 0) {
      document.getElementById("task").value = "";
      setadd_task(1);
    } else {
      setadd_task(0);
      setcounter(counter + 1);
      setadd_string([...add_string, counter + "$->" + inputValue + "$->" + fullDate]);
      setInputValue('');
      localStorage.setItem("nexttodo", [...add_string, counter + "$->" + inputValue + "$->" + fullDate]);
    }
  }

  const deleteTodo = () => {

    add_checkbox.reverse().forEach(forDel => {
      add_string_date.forEach(fromDel => {
        if (fromDel.split("$->")[0] == forDel.split("$->")[0]) {
          add_string_date.splice(add_string_date.indexOf(fromDel), 1)
        }
      });

    });
    localStorage.setItem("nexttodo", add_string_date)
    setadd_string_date([...add_string_date]);
    setadd_checkbox([])

  }


  useEffect(() => {
    if (localStorage.getItem("nexttodo").split(",") == "") {
      setcounter(0);
    } else {
      setadd_string(localStorage.getItem("nexttodo").split(","))
    }

    setadd_mark(localStorage.getItem("nexttodoMark").split(","));


    if (localStorage.getItem("nexttodo").split(",") == "") {
      setcounter(0);
    } else {
      localStorage.getItem("nexttodo").split(",").forEach(element => {
        setcounter(parseInt(element.split("$->")[0]) + 1);
      });
    }


    if (localStorage.getItem("nexttodo").split(",") != "") {
      setadd_string(localStorage.getItem("nexttodo").split(","))
    }


    setadd_mark(localStorage.getItem("nexttodoMark").split(","));


    if (localStorage.getItem("nexttodo").split(",") == "") {
      setcounter(0);
    } else {
      localStorage.getItem("nexttodo").split(",").forEach(element => {
        setcounter(parseInt(element.split("$->")[0]) + 1);
      });
    }

    let count = 0;
    var first = date.getDate() - date.getDay();
    for (let j = 0; j < localStorage.getItem("nexttodo").split(",").length; j++) {
      if (first <= localStorage.getItem("nexttodo").split(",")[j].split("$->")[2].slice(0,2)) {
        setadd_string_date(add_string_date => [...add_string_date, localStorage.getItem("nexttodo").split(",")[j]])
        console.log(count);
      }
    }

  }, [])
  return (
    <>
    <Navbar nav="Week"/> 
    <div className={styles.main}>
      <div className={styles.topics}>
        <h1>Topics</h1>
        <ul>
          <li ><i><FaInbox /></i> All</li>
          <li><i><FaStar /></i>Marked</li>
          <li><i><FaRegCalendarCheck /></i>Today</li>
          <li className={styles.invert_active} ><i><FaRegCalendarAlt /></i>This Week</li>
        </ul>
      </div>
      <div className={styles.todos}>
          <div className={styles.tasks}>
            <div className={styles.taskHead}>
              <h1>Tasks</h1>
              <i onClick={() => { deleteTodo() }}><FaTrashCan /></i>
            </div>
            <ul>

              <Items add_string={add_string_date} setbox={setadd_checkbox} addBox={add_checkbox} setMark={setadd_mark} addMark={add_mark} />

            </ul>
          </div>
          <div className={styles.add_task_btn}>
            <form action="#" method="post" onSubmit={(e) => { e.preventDefault(); }} >
              <input type="checkbox" name="add_task" id="add_task" unchecked="true" />
              <input type="text" name="task" id="task" onChange={(e) => setInputValue(e.target.value)} />
              <button type="submit"  ><label htmlFor="add_task" onClick={() => btn_clicked()}>{(add_task == 0) ? "Add Task" : "Add"}</label></button>
            </form>
          </div>
        </div>
    </div>
    <Footer/>
  </>
  )
}

export default Week