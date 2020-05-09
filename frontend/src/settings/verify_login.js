import React, {useState} from 'react'


export default class Verify {
    // const [login, setLogin] = useState('login-desactived')
    // let login = document.querySelector('aside').value
    // if(login == 'login-desactived'){
        // setLogin('login-actived')
    // }else{
        // setLogin('login-desactived')
    // }

    // return login

    constructor(props){
        this.props = props
    }

    login(){
        const [login, setLogin] = useState('login-desactived')
        if(login == 'login-desactived'){
            setLogin('login-actived')
        }else{
            setLogin('login-desactived')
        }
        return this.props = login
    }


}
