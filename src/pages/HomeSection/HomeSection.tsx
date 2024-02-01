import React from "react";

import styles from "./HomeSection.module.css";

interface HomeSectionProps {
  title: string;
  content: string;
  image: string;
}

const HomeSection: React.FC<HomeSectionProps> = ({ title, content, image }) => {
  return (
    <section className={styles.Section}>
      <img src={image} alt={title} />
      <div>
        <h3>{title}</h3>
        <p>{content}</p>
      </div>
    </section>
  );
};

export default HomeSection;
