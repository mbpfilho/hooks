import React,{useReducer} from 'react'
import PageTitle from '../../components/layout/PageTitle'

const initialState={
    cart: [],
    user: null,
    products: [],
    number: 0
}

function reducer(state,action){
    switch(action.type){
        case "numberAdd2":
            return{...state,number:state.number+2}
        case "login":
            return {...state,user:{name:"leonardo"}}
        default:
            return state
    }
}


const UseReducer = (props) => {

    const [state,exec]=useReducer(reducer,initialState)
    
    return (
        <div className="UseReducer">
            <PageTitle
                title="Hook UseReducer"
                subtitle="Uma outra forma de ter estado em componentes funcionais!"
            />
            <div className="center">
                <span className="text">{state.number}</span>
                <div>
                    <button className="btn" onClick={_=>exec({type:"numberAdd2"})}>+2</button>
                </div>
            </div>
        </div>
    )
}

export default UseReducer
