import React from 'react'

export default function Normal(){
    return (
        <>
        <label htmlFor="">Media</label>
        <input type="number"/>

        <label htmlFor="">Desvio padrão</label>
        <input type="number"/>

        <select name="" id="">
            <option value="maior_normal">Maior que</option>
            <option value="menor_normal">Menor que</option>
            <option value="entre_normal">Entre</option>
        </select>

        <label htmlFor="">Elemento</label>
        <input type="text"/>

        <button>Calcular</button>
        </>
    )
} 