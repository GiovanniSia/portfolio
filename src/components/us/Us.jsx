import section1 from "../../img/us/section1.svg";
import section2 from "../../img/us/xd.svg";
import "./Us.css";

function Us() {
  return (
    <div className="us">
      <div className="title-first-us">
        <h1>Nosotros</h1>
        <p>
          Somos un grupo de estudiantes y graduados en informática <br />
          desarrollamos su idea o solucionamos sus problemas
        </p>
      </div>

      <div className="title-second-us">
        <h1>¿Qué hacemos?</h1>
        <div className="two-column">
          <div>
            <img src={section1} alt="" />
            <h2>Diseño y desarrollo web</h2>
            <p>Creación de páginas web</p>
            <p>Rediseño y actualización de sitios web</p>
            <p>Adaptar sitios web a diversos dispositivos</p>
          </div>
          <div>
            <img src={section2} alt="" />
            <h2>Desarrollo de software</h2>
            <p>Creación de software personalizado</p>
            <p>Soporte y mantenimiento de software</p>
            <p>Desarrollo Full Stack</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Us;
