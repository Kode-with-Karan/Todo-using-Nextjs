import React from 'react';
import Link from 'next/link';
import styles from "../css/nevbar.module.css";

const Navbar = (props) => {
  return (
    <>
    <nav className={styles.navbar}>
        <div className={styles.logo}>
            <h1>to<span>do.</span></h1>
        </div>
        <div className={styles.links}>
            <Link href={"/"} className={(props.nav == "All")?styles.active:""}>All</Link>
            <Link href={"/Marked"} className={(props.nav == "Marked")?styles.active:""}>Marked</Link>
            <Link href={"/Today"} className={(props.nav == "Today")?styles.active:""}>Today</Link>
            <Link href={"/Week"} className={(props.nav == "Week")?styles.active:""}>Week</Link>
        </div>

        <div className={styles.dark_mode}>
          <input type="checkbox" name="toggle" id="toggle" />
          <label className={styles.label1} htmlFor="toggle"></label>
          <label className={styles.label2} htmlFor="toggle"></label>
        </div>
    </nav>
    </>
  )
}

export default Navbar;