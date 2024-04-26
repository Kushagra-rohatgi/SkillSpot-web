import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>We are SkillSpot</h1>
        <p className={styles.description}>
        A platform where freelancing needs<br></br> meet convenience!<br></br></p>

        <span className={styles.description1}>
        We make sure everyone finds what they are looking for from<br></br> startups to individual projects we cater the needs of all.</span>

        <a href="#contact" className={styles.contactBtn}>
          Contact Us
        </a>
      </div>
      <img
        src={getImageUrl("hero/ss3.svg")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
