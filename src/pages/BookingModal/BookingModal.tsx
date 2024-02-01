import React from "react";
import ReactModal from "react-modal";

import styles from "../Session/Session.module.css";

interface BookingModalProps {
  isModalOpen: boolean;
  handleModalClose: () => void;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

const BookingModal: React.FC<BookingModalProps> = ({
  isModalOpen,
  handleModalClose,
  onSubmit,
}) => (
  <ReactModal
    isOpen={isModalOpen}
    onRequestClose={handleModalClose}
    className={styles.Modal}
    overlayClassName={styles.Overlay}
  >
    <div className={styles.ModalContent}>
      <h2 className={styles.ModalHeader}>Book Session</h2>
      <form className={styles.ModalForm} onSubmit={onSubmit}>
        <div className={styles.FormGroup}>
          <label className={styles.FormLabel} htmlFor="name">
            Your Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className={styles.FormInput}
            required
          />
        </div>
        <div className={styles.FormGroup}>
          <label className={styles.FormLabel} htmlFor="email">
            Your Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className={styles.FormInput}
            required
          />
        </div>
        <div className={styles.FormActions}>
          <button
            type="button"
            onClick={handleModalClose}
            className={styles.CancelButton}
          >
            Cancel
          </button>
          <button type="submit" className={styles.SaveButton}>
            Confirm Booking
          </button>
        </div>
      </form>
    </div>
  </ReactModal>
);

export default BookingModal;
