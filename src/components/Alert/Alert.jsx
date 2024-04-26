import React from "react";
import styles from "./Alert.module.css";

const CustomAlert = ({ message, onClose }) => {
    return (
        <div className={styles.overlay}>
            <div className={styles.alert}>
                <p>{message}</p>
                <button onClick={onClose}>Close</button>
            </div>
        </div>
    );
};

export default CustomAlert;
