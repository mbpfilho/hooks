import React,{useReducer} from 'react'
import PageTitle from '../../components/layout/PageTitle'

import { initialState, reducer } from '../../store'
import {numberAdd2, login} from "../../store/actions"

const UseReducer = (props) => {

    const [state,dispatch]=useReducer(reducer,initialState)
    
    return (
        <div className="UseReducer">
            <PageTitle
                title="Hook UseReducer"
                subtitle="Uma outra forma de ter estado em componentes funcionais!"
            />
            <div className="center">
                {state.user?
                    <span className="text">{state.user.name}</span>
                    :<span className="text">Sem usuário</span>
                } 
                <span className="text">{state.number}</span>
                <div>
                    <button className="btn" onClick={_=>login(dispatch,"Joao")}>Login</button>
                    <button className="btn" onClick={_=>numberAdd2(dispatch)}>+2</button>
                    <button className="btn" onClick={_=>dispatch({type:"numberMulti7"})}>*7</button>
                    <button className="btn" onClick={_=>dispatch({type:"numberDiv25"})}>/25</button>
                    <button className="btn" onClick={_=>dispatch({type:"numberParseInt"})}>Int</button>
                    <button className="btn" id='addN1' onClick={_=>dispatch({type:"numberAddN",payload:parseInt(document.getElementById("addN1").innerText)})}>-11</button>
                    <button className="btn" id='addN2' onClick={_=>dispatch({type:"numberAddN",payload:parseInt(document.getElementById("addN2").innerText)})}>+35</button>
                    <div>
                        <input type="number" id="n" className="input" onChange={e=>e.target.value} />
                        <button className="btn" onClick={_=>dispatch({type:"numberAddN",payload:document.getElementById("n").value})}>Add</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UseReducer
