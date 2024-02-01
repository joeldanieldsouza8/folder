import studentsImg from "../../assets/students.jpg";
import listImg from "../../assets/list.jpg";
import certificateImg from "../../assets/certificate.jpg";

import HomeSection from "../HomeSection/HomeSection";

import styles from "./Home.module.css";

const homeSections = [
  {
    img: studentsImg,
    title: "What we do",
    text: "ReactMentoring is a platform for React developers to find mentors who can help them with their React-related questions and problems. We are a community of React developers who want to help each other succeed.",
  },
  {
    img: listImg,
    title: "What we offer",
    text: "We offer a variety of mentoring sessions, from one-on-one mentoring to group mentoring sessions. Browse our available sessions to find the one that best fits your needs.",
  },
  {
    img: certificateImg,
    title: "What you get",
    text: "No matter if you are a beginner or an experienced React developer, we are here to help you level up your React skills.",
  },
];

const Home = () => {
  return (
    <main className={styles.HomePage}>
      <h2>Our Mission: Your Success</h2>

      {homeSections.map((section) => (
        <HomeSection
          key={section.title}
          title={section.title}
          content={section.text}
          image={section.img}
        />
      ))}
    </main>
  );
};

export default Home;
