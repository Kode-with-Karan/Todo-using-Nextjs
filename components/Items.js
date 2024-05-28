import styles from "../app/page.module.css";
import { FaInbox, FaStar, FaRegCalendarCheck } from "react-icons/fa6";
import { FaRegCalendarAlt } from "react-icons/fa";
import React, { useEffect } from 'react';

const Items = ({ add_string, setbox, addBox, addMark, setMark }) => {

  const setcheckbox = (i) => {
    if (addBox.indexOf(i) !== -1) {
      setbox(addBox.filter(item => item !== i))

    }
    else {
      setbox([...addBox, i])

    }
  }

  const setfavMark = (i) => {

    // console.log(addMark);

    if (addMark.indexOf(i) !== -1) {
      setMark(addMark.filter(item => item !== i))
      // console.log(addMark.filter(item => item !== i));
      localStorage.setItem("nexttodoMark", addMark.filter(item => item !== i));
    }
    else {
      setMark([...addMark, i]);
      // console.log([...addMark, i]);
      localStorage.setItem("nexttodoMark", [...addMark, i]);
    }

  }


  useEffect(() => {
    
    
    for (let index = 0; index < addMark.length; index++) {
      console.log(document.getElementById("mark" + addMark[index]).checked = true)

    }




  }, [])

  useEffect(() => {

    if (addBox.length == "undefined" || addBox.length == 0) {
      for (let index = 0; index < add_string.length; index++) {
        console.log(document.getElementById("task" + add_string[index].split("$->")[0]).checked = false)
        // console.log();

      }
    }

  }, [addBox])






  return (
    <>

      {
        add_string.map((element, index) => (

          <li key={index}>

            <div className={styles.task_text}>
              <input type="checkbox" name="task" id={"task" + element.split("$->")[0]} onClick={() => { setcheckbox(element.split("$->")[0]) }} />
              <label htmlFor={"task" + element.split("$->")[0]}>{
                // element
                element.split("$->")[1]

              }</label>
            </div>
            <div className={styles.marks}>

              <input type="checkbox" name="task" id={"mark" + element.split("$->")[0]} onClick={() => { setfavMark(element.split("$->")[0]) }} />
              <label htmlFor={"mark" + element.split("$->")[0]}><i><FaStar /></i></label>
            </div>
          </li>
        ))
      }
    </>
  );
};

export default Items;
