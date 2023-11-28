import { Link } from "react-router-dom";
import Style from "./Hub.module.css";

const Hub = () => {
  return (
    <div className={Style.headercontainer}>
      <div className="title">
        <span style={{ color: "lightgreen" }}>Go</span>Explore
      </div>
      <Link to="home" className={Style.buttoncont}>
        <button className={Style.button}>Start app</button>
      </Link>
      <footer className={Style.footer}>
        Create by: Daniel Diaz & David Tache
      </footer>
    </div>
  );
};

export default Hub;
