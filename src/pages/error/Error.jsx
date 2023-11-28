/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";
import Style from "./Error.module.css";

const Error = () => {
  return (
    <>
      <div className={Style.headercontainer}>
        <div className="title">
          <span style={{ color: "orange" }}>Go</span>Explore
        </div>
        <div className={Style.errorinfo}>
          Error 404
          <div>The page you are trying to go doesn't exist</div>
        </div>
        <Link to="/"><button>Go back</button></Link>
      </div>
    </>
  );
};

export default Error;
