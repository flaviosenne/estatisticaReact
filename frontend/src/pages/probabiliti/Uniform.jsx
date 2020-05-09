import React from 'react'

export default function Uniform(){
    return (
        <>
        <label htmlFor="">Ponto Mínimo</label>
        <input type="number"/>

        <label htmlFor="">Ponto Máximo</label>
        <input type="number"/>

        <select name="" id="">
            <option value="maior_uniforme">Maior que</option>
            <option value="menor_uniforme">Menor que</option>
            <option value="entre_uniforme">Entre</option>
        </select>

        <label htmlFor="">Elemento</label>
        <input type="text" name="" id=""/>

        <button>Calcular</button>
        </>
    )
} 