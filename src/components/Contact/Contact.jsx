import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.svg")} alt="Email icon" />
          <a href="mailto:info.techkyt@gmail.com">info.techkyt@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.svg")}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/kyt-infotech">linkedin.com/in/kyt-infotech</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/phone.svg")} alt="Github icon" />
          <a href="tel:+919518748208">+919518748208</a>
        </li>
      </ul>
    </footer>
  );
};
