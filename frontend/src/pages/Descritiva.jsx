import React, { useState } from 'react';
import '../css/descritiva.css'

export default function Descritiva() {
    return (
        <div className = "container">

            <div className="descritiva">
                <label htmlFor="">Variável</label>
                <input type="text" />

                <label htmlFor="">Valores</label>
                <input type="text" />

                <div className="select">
                    <select name="medida-separatriz" id="medida-separatriz">
                        <option value="vazio">......</option>
                        <option value="quantil">Quantil</option>
                        <option value="quintil">Quintil</option>
                        <option value="descil">Decil</option>
                        <option value="porcentil">Porcentil</option>
                    </select>
                    <select name="tipo" id="tipo">
                        <option value="qualitativa">Qualitativa</option>
                        <option value="quantitativa">Quantitativa</option>
                    </select>

                </div>
                <div className="range">
                    <input type="range" /><span>50</span>
                </div>
                <button>Calcular</button>
            </div>
            <div className ="result">
                <div className="tabela-descritiva"></div>
                <div className = "calc-descritiva"></div>
            </div>
        </div>
    )
};