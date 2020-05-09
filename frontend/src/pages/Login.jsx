import React  from 'react';

import '../css/login.css'
import Verify from '../settings/verify_login'


function Login(props) {
    function verificar(){
        const verify = new Verify
        verify.login()
    }
    return (
        <aside  className = {props}>
            <form >
                <label htmlFor="">User</label>
                <input />

                <label htmlFor="">Password</label>
                <input />

                <a> Criar conta </a>
                <a className="esqueci"> Esqueci minha senha</a>

                <button id= "entrar"onClick = {verificar}> Entrar</button>
            </form>
        </aside>
    )
}

export default Login;