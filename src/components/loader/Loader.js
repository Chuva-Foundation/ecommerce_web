import ReactDOM from "react-dom";
import styles from "./Loader.module.css";
import loading from "../../images/loading.gif";

function Loader() {
  return ReactDOM.createPortal(
    <div className={styles.wrap}>
      <div className={styles.load}>
        <img src={loading} alt="Loading..." />
      </div>
    </div>,
    document.getElementById("loader")
  );
}

export default Loader;
