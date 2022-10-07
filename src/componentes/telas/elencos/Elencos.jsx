import { useState, UseEffect, useEffect } from 'react';
import ElencosContext from './ElencosContext';
import Tabela from './Tabela';
import Form from './Form';

function Elencos(){

    const [alerta, setAlerta] = useState({"status": "", "message": ""});
    const [listaObjetos, setListaObjetos] = useState([]);
    const [editar, setEditar] = useState(false);
    const [objeto, setObjeto] = useState({codigo: "", temporada: "", treinador: "", folha: ""});


    const recuperar = async codigo =>{
        await fetch(`${process.env.REACT_APP_ENDERECO_API}/elencos/${codigo}`).then(response => response.json()).then(data => setObjeto(data)).catch(err => setAlerta({"status" : "error", "message":err}))
    } 

    const acaoCadastrar = async e => {
        e.preventDefault();
        const metodo = editar ? "PUT" : "POST";
        try{
            await fetch(`${process.env.REACT_APP_ENDERECO_API}/elencos`, {
                method: metodo,
                headers: {"Content-Type":"application/json"},
                body: JSON.stringify(objeto)
            }).then(response => response.json()).then(json => {
                setAlerta({status:json.status, message: json.message});
                setObjeto(json.objeto);
                if(!editar){
                    setEditar(true);
                }
            })
        }catch(err){
            setAlerta({"status" : "error", "message":err});
        }
        recuperaElencos();
    }

    const handleChange = (e) =>{
        const name = e.target.name;
        const value = e.target.value;
        setObjeto({...objeto, [name] : value});
    }


    const recuperaElencos = async () =>{
        await fetch(`${process.env.REACT_APP_ENDERECO_API}/elencos`).then(response => response.json()).then(data => setListaObjetos(data)).catch(err => setAlerta({"status" : "error", "message":err}))
    }

    const remover = async objeto =>{
    if(window.confirm('Deseja remover este objeto?')){
        try{
            await fetch(`${process.env.REACT_APP_ENDERECO_API}/elencos/${objeto.codigo}`, {method : "DELETE"}).then(response => response.json()).then(json => setAlerta({"status": json.status, "message": json.message}))
            recuperaElencos();
        }catch(err){
            setAlerta({"status": "error", "message": err})
        }
    }
}

useEffect(() => {
    recuperaElencos();
}, []);

return(
    <ElencosContext.Provider value={
        {
            alerta, setAlerta, listaObjetos, setListaObjetos, recuperaElencos, remover, objeto, setObjeto, editar, setEditar, recuperar, acaoCadastrar, handleChange
        }
    }>
        <Tabela></Tabela>
        <Form></Form>
    </ElencosContext.Provider>
)
}
export default Elencos;