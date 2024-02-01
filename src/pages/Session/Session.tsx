// Session.tsx
import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";

import styles from "./Session.module.css";
import { SESSIONS } from "../../dummy-sessions.ts";
import BookingModal from "../BookingModal/BookingModal";
import {
  Booking,
  BookingContext,
  BookingContextType,
} from "../../context/Booking/bookingContext.tsx";

const Session: React.FC = () => {
  const params = useParams<{ id: string }>();
  const sessionId = params.id;
  const loadedSession = SESSIONS.find((session) => session.id === sessionId);

  // Note that I use typecasting on the useContext Hook to prevent TypeScript from throwing errors because the context will be null at the beginning.
  const { addBooking } = useContext(BookingContext) as BookingContextType;

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (loadedSession) {
      const newBooking: Booking = {
        ...loadedSession,
        title: loadedSession.title,
        description: loadedSession.description,
        time: loadedSession.date,
      };

      addBooking(newBooking);
    }

    setIsModalOpen(false);
  };

  if (!loadedSession) {
    return (
      <main id="session-page">
        <p>No session found!</p>
      </main>
    );
  }

  return (
    <main className={styles.SessionPage}>
      <article className={styles.Article}>
        <header className={styles.Header}>
          <img src={loadedSession.image} alt={loadedSession.title} />
          <div>
            <h2>{loadedSession.title}</h2>
            <time dateTime={new Date(loadedSession.date).toISOString()}>
              {new Date(loadedSession.date).toLocaleDateString("en-US", {
                day: "numeric",
                month: "short",
                year: "numeric",
              })}
            </time>
            <div className={styles.Actions}>
              <button onClick={handleModalOpen} className={styles.Button}>
                Book Session
              </button>
              <BookingModal
                isModalOpen={isModalOpen}
                handleModalClose={handleModalClose}
                onSubmit={handleFormSubmit}
              />
            </div>
          </div>
        </header>
        <p className={styles.Content}>{loadedSession.description}</p>
      </article>
    </main>
  );
};

export default Session;
