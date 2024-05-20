import styles from "../app/page.module.css";
import { FaInbox, FaStar, FaRegCalendarCheck } from "react-icons/fa6";
import { FaRegCalendarAlt } from "react-icons/fa";

import React from 'react';

const Items = ({ add_string, setbox, addBox }) => {

  const setcheckbox = (i) =>{
    if(addBox.indexOf(i) !== -1){
      setbox(addBox.filter(item => item !== i))

    }
    else{
      setbox([...addBox, i])
    }
  }


  return (
    <>
    
      {
        add_string.map((element, index) => (
            
            <li key={index}>

            <div className={styles.task_text}>
              <input type="checkbox" name="task" id={"task"+index} onClick={()=>{setcheckbox(index)}}/>
              <label htmlFor={"task"+index}>{
                element

              }</label>
            </div>
            <div className={styles.marks}>

              <input type="checkbox" name="task" id={"mark"+index} />
              <label htmlFor={"mark"+index}><i><FaStar /></i></label>
            </div>
          </li>
        ))
      }
    </>
  );
};

export default Items;
