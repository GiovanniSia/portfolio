import logo from "../../img/start/logo.svg";
import Button from "./button/Button.jsx";
import "./Start.css";

function Start() {
  return (
    <div className="start ">
      <div className="start-center">
        <img src={logo} alt="logo" />
        <div className="buttons-start">
          <Button text="Quienes somos" />
          <Button text="Portfolio" />
          <Button text="Contacto" />
        </div>
      </div>
    </div>
  );
}

export default Start;
