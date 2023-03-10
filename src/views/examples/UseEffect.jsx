import React, {useEffect, useState} from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

function calcFatorial(n){
    if(n<0)return -1
    if(n==0)return 1
    return calcFatorial(n-1)*n
}

const UseEffect = (props) => {

    //Ex #1
    const [getNumber,setNumber]=useState(1)
    const [getFatorial,setFatorial]=useState(1)

    useEffect(function(){
        setFatorial(calcFatorial(getNumber))
    },[getNumber])

    //Ex #2
    const [status,setStatus]=useState("Ímpar")

    useEffect(function(){
        setStatus(getNumber%2===0?"Par":"Ímpar")
    },[getNumber])

    return (
        <div className="UseEffect">
            <PageTitle
                title="Hook UseEffect"
                subtitle="Permite executar efeitos colaterais em componentes funcionais!"
            />
            <SectionTitle title="Exercício #1"></SectionTitle>
            <div className="center">
                <div>
                    <span className="text">Fatorial: </span>
                    <span className="text red">{getFatorial==-1?"Não existe!":getFatorial}</span>
                </div>
                <input type="number" className="input" value={getNumber} onChange={e=>setNumber(e.target.value)} />
            </div>
            <SectionTitle title="Exercício #2"></SectionTitle>
            <div className="center">
                <div>
                    <span className="text">Status: </span>
                    <span className="text red">{status}</span>
                </div>
            </div>
        </div>
    )
}

export default UseEffect
