import styles from "./Display.module.css";

const Display = ({ displayValue }) => {
  return (
    // This input actually takes input from the user '
    // when the user enters  something it is calculated and displayed on this input type text area
    <input
      className={styles.display}
      type="text"
      value={displayValue}
      readOnly
    />
  );
};

export default Display;