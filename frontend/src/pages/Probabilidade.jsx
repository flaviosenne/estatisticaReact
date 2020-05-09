import React, {useState} from 'react';

import '../css/probabilidade.css'

import Normal from './probabiliti/Normal'
import Uniform from './probabiliti/Uniform'
import Binominal from './probabiliti/Binominal'

export default function Probabilidade() {
    const [distribuicao, setDistribuicao] = useState(<Binominal />)
    function selecao(){
        let select = document.querySelector('select').value
        
        if(select == 'normal'){
            setDistribuicao(<Normal />)
            
        }
        else if(select == 'binominal'){
            setDistribuicao(<Binominal />)
        }
        else if(select == 'uniforme'){
            setDistribuicao(<Uniform />)
           
        }
    }
    return (
        <div className = "container">
            <div className = "probabilidade" onChange = {selecao}>
                <select name="distribuicao" id="">
                    <option value="binominal">Binominal</option>
                    <option value="normal">Normal</option>
                    <option value="uniforme">Uniforme</option>
                </select>
            </div>
            <div className = "probability">
            {distribuicao}
            </div>
            <div className = "result-probality">
                <h2>Resultado:</h2>
            </div>
        </div>

    )
} 