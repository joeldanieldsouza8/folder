import { Link } from "react-router-dom";
import { useState } from "react";

import styles from "./NavBar.module.css";
import SessionsModal from "../../../pages/ConfirmedSessionsModal/SessionsModal";

function NavBar() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <header className={styles.Header}>
      <Link className={styles.Logo} to="/">
        ReactMentoring
      </Link>

      <nav className={styles.NavBar}>
        <Link className={styles.Selection} to="/">
          Our Mission
        </Link>
        <Link className={styles.Selection} to="/sessions">
          Browse Sessions
        </Link>
        <Link className={styles.Selection} onClick={handleOpenModal} to="/">
          Upcoming Sessions
        </Link>
      </nav>

      <SessionsModal isOpen={isModalOpen} onRequestClose={handleCloseModal} />
    </header>
  );
}

export default NavBar;
