import logo from "../../img/start/logo.svg";
import "./Contact.css";

function Contact() {
  return (
    <div className="contact">
      <div className="contact-logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="contact-send">
        <h1>Contáctanos</h1>
        <input
          className="user-email"
          type="email"
          placeholder="Escriba su email"
        />
        <textarea
          className="user-text"
          type="text"
          placeholder="Coméntenos sobre el problema que desea resolver..."
        />
        <button className="user-button">Enviar</button>
      </div>
    </div>
  );
}

export default Contact;
