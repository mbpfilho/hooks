import React, { useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from "../../components/layout/SectionTitle"

const UseState = (props) => {
    const [count,setCount]=useState(0)
    const [name,setName]=useState("")

    return (
        <div className="UseState">
            <PageTitle
                title="Hook UseState"
                subtitle="Estado em componentes funcionais!"
            />
            <SectionTitle title="Exercício #1"></SectionTitle>
            <div className="center">
                <span className="text">{count}</span>
                <div>
                    <button className="btn" onClick={_=>setCount(count-1)}>-1</button>
                    <button className="btn" onClick={_=>setCount(count+1)}>+1</button>
                    <button className="btn" onClick={_=>setCount(current=>current+1000)}>+1000</button>
                </div>
            </div>
            <SectionTitle title="Exercício #2"></SectionTitle>
            <input type="text" className="input" onChange={e=>setName(e.target.value)} value={name} />
            <span className="text">{name}</span>
        </div>
    )
}

export default UseState
