import { ReactDOM } from "react";
import styles from "./Loader.module.css";
import loading from "../../images/loading.gif";

function Loader() {
  return ReactDOM.createPortal(
    <div>
      <div>
        <img src={loading} alt="Loading..." />
      </div>
    </div>,
    document.getElementById("loader")
  );
}

export default Loader;
