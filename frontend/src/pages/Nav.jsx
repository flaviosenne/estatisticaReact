import React from 'react';
import '../index.css'
import api from '../services/api'
import imagem1 from '../img/descritiva.jpg'
import imagem2 from '../img/probability.jpeg'
import imagem3 from '../img/project.jpg'
import Login from '../pages/Login'


export default function Nav() {

    return (
        <>
            <Login /> 
            <div className='Home'>

                <div className = "Descritiva">
                    <img src={imagem1} alt=""/>
                    <h1>Estatistica Descritiva</h1>
                    <p>Essa aplicação permite-nos compreender os dados de uma distribuição
                     usando medidas de tendência central, medidas de dispersão, percentis,
                      quartis e decis, e medidas de distribuição.</p>
                    <button>Acessar</button>
                </div>
                <div className="probabilidade">
                    <img src={imagem2} alt="" />
                    <h1>Probabilidade</h1>
                    <p>Probabilidade é o cálculo das chances de uma ocorrência.
                    É por meio de uma probabilidade, por exemplo, que podemos 
                    saber desde a chance de obter cara ou coroa no 
                    lançamento de uma moeda até a chance de erro em pesquisas.</p>
                    <button>Acessar</button>
                </div>

                <div className="projecao">
                    <img src={imagem3} alt="" />
                    <h1>Correlação e Regressão</h1>
                    <p>São duas técnicas estreitamente relacionadas, que visa estimar uma relação
                    que possa existir entre duas variáveis na população</p>
                    <button>Acessar</button>
                </div>
                
            </div>
        </>
    )
}

