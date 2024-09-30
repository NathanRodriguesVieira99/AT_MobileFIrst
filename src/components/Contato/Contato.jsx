import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";

import "./Contato.scss";

function Contato() {
  return (
    <>
      <h1 style={{ color: "red" }}>Redes do candidato</h1>
      <div id="contato" className="contatos">
        <ul>
          <a href="" target="_blank">
            <li className="wpp">
              <FaWhatsapp />
            </li>
          </a>
          <a href="" target="_blank">
            <li className="email">
              <MdOutlineEmail />
            </li>
          </a>
          <a href="" target="_blank">
            <li className="ig">
              <FaInstagram />
            </li>
          </a>
          <a href="" target="_blank">
            <li className="ttk">
              <FaTiktok />
            </li>
          </a>
        </ul>

        <p style={{ textAlign: "center", marginTop: "1.2rem" }}>
          AT تم إنشاؤها بواسطة Nathan Rodrigues باستخدام ReactJS
        </p>
      </div>
    </>
  );
}

export default Contato;
