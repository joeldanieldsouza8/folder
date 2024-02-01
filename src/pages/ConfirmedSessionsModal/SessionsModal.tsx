import React, { useContext } from "react";
import ReactModal from "react-modal";
import {
  BookingContext,
  Booking,
} from "../../context/Booking/bookingContext.tsx";

import styles from "./SessionsModal.module.css";

interface SessionsModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

const SessionsModal: React.FC<SessionsModalProps> = ({
  isOpen,
  onRequestClose,
}) => {
  const { bookings, deleteBooking, addBooking } = useContext(BookingContext)!;

  return (
    <ReactModal
      className={styles.SessionsModal}
      isOpen={isOpen}
      onRequestClose={onRequestClose}
    >
      <div className={styles.ModalContent}>
        <h2 className={styles.ModalHeader}>Upcoming Sessions</h2>
        {bookings.map((booking: Booking, index: number) => (
          <div className={styles.ModalData} key={index}>
            <div>
              <h3 id={styles.Heading}>{booking.title}</h3>
              <p>{booking.description}</p>
              <p id={styles.Time}>{booking.time}</p>
              <p id={styles.BookingCount}>Number of bookings: {booking.count}</p>
            </div>
            <div>
              <button
                type="button"
                onClick={() => deleteBooking(booking)}
                className={styles.DeleteButton}
              >
                -
              </button>
              <button
                type="button"
                onClick={() => addBooking(booking)}
                className={styles.AddButton}
              >
                +
              </button>
            </div>
          </div>
        ))}
        <button
          type="button"
          onClick={onRequestClose}
          className={styles.CloseButton}
        >
          Close
        </button>
      </div>
    </ReactModal>
  );
};

export default SessionsModal;
