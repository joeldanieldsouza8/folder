import { SESSIONS } from "../../dummy-sessions.ts"; // normally, we would probably load that from a server
import SessionItem from "../SessionItem/SessionItem.tsx";
import styles from "./SessionList.module.css";

const SessionsList: React.FC = () => {
  return (
    <>
      <header>
        <div className={styles.Header}>
          <h2>Available mentoring sessions</h2>

          <p>
            From an one-on-one introduction to React's basics all the way up to
            a deep dive into state mechanics - we got just the right session for
            you!
          </p>
        </div>
      </header>

      <section className={styles.CardList}>
        {/* Todo: Output list of sessions */}
        {SESSIONS.map((session) => (
          <SessionItem key={session.id} session={session} />
        ))}
      </section>
    </>
  );
};

export default SessionsList;
