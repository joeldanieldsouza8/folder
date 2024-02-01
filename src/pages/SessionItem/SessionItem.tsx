import React from "react";
import { Link } from "react-router-dom";

import { Sessions } from "../../types/sessions";

import styles from "./SessionItem.module.css";

interface SessionItemProps {
  session: Sessions;
}

const SessionItem: React.FC<SessionItemProps> = ({ session }) => {
  return (
    <article className={styles.Card}>
      <header className={styles.Header}>
        <img className={styles.Thumbnail} src={session.image} alt={session.title} />
        <div>
          <h3>{session.title}</h3>
          <p>{session.summary}</p>
          <Link id={styles.LearnMore} to={`/sessions/${session.id}`}>
            <p>Learn More</p>
          </Link>
        </div>
      </header>
    </article>
  );
};

export default SessionItem;
