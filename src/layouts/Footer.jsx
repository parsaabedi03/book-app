import styles from "./Footer.module.css";

import { HandHeart } from "lucide-react";

function Footer() {
  return (
    <footer className={styles.footer}>
      <p>
        Developed by Parsa with <HandHeart color="red" size={25} />
      </p>
    </footer>
  );
}

export default Footer;
