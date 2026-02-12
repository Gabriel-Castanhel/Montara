import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { BsArrowBarRight } from "react-icons/bs";
import { BsPersonBadge } from "react-icons/bs";

import "../Css/PainelDeControle.css";

function PainelDeControle() {
  return (
    <div className="container-painel">
      <div className="container-um">

        <div className="card-adm">
          <Link to="/criarProduto" className="card-link">
            <img src='/img/mais.png' className='img-iconMais' />
            <span className="card-text">Adicionar Produto</span>
          </Link>
        </div>

        <div className="card-adm">
          <Link to="/estoque" className="card-link">
            <BsPersonBadge />
            <span className="card-text">Gestão de Estoque</span>
          </Link>
        </div>

        <div className="card-adm">
          <Link to="/" className="card-link">
            <BsArrowBarRight />
            <span className="card-text">Sair do modo adm</span>
          </Link>
        </div>

      </div>
    </div>
  );
}

export default PainelDeControle;
