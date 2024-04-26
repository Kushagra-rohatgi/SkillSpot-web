import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About Us</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/us1.svg")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/thumbs.svg")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <b><h3>Our Mission</h3></b><br></br>
              <p>
              SkillSpot empowers college students and individuals by connecting them with freelancing opportunities. Specializing in UI/UX design, app and web development, machine learning, marketing, SEO, VFX, editing etc. we bring diverse skills to those in need.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/logos_realm.svg")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <b><h3>Empowering Innovation</h3></b><br></br>
              <p>
                SkillSpot goes beyond traditional freelancing, connecting individuals with innovative ideas to skilled professionals. Aspiring entrepreneurs and seasoned visionaries alike find a catalyst at SkillSpot, building dynamic teams to bring ideas to life.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/collab.svg")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <b><h3>Exceptional Collaboration</h3></b><br></br>
              <p>SkillSpot cultivates exceptional collaboration, pairing great ideas with the right expertise. Beyond freelancing services, we're a hub for like-minded individuals to share skills and embark on transformative journeys. Join us in a future where talent knows no boundaries, and innovation thrives in every collaboration.

              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
