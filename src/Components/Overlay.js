import React from "react";
import styles from "./Overlay.module.css";

const Overlay = (props) => {
  return <div className={styles["overlay__background"]}>{props.children}</div>;
};

export default Overlay;
