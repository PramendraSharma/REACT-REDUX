import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Greetings Everyone !</h1>
        <p className={styles.description}>
          {`My name is`} <b>Pramendra R. Sharma</b>.{` I am currently in B. Sc.(Cyber Security & Digital Science). I am driven by a relentless commitment  to continous learning and professional growth, actiely seeking out resources, attending workshops, and engaging in continous education to stay at the forefront of the rapidly evolving technology landscape...`}
        </p>
        <a href="mailto:myemail@email.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="HeroImage of mine"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
