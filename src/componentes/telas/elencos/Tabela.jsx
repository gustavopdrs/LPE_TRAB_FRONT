import { useContext } from "react";
import ElencosContext from "./ElencosContext";
import Alerta from "../../Alerta";
import { right } from "@popperjs/core";

function Tabela(){
    const { setObjeto, alerta, setAlerta, listaObjetos, remover, setEditar, recuperar } = useContext(ElencosContext);

    return(
        <div className="modalDiv" style={{padding: '20px'}}>
            <h2>Elencos</h2>
            <div className="buttonNovo" style={{display:'inline-flex'}}><h3>Novo</h3>
            <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modalEdicao" onClick={() => {
                                setObjeto({codigo: 0, temporada: "", treinador: "", folha: ""});
                                setEditar(false);
                                setAlerta({status:"", message: ""});
                            }}>
                                <i className="bi bi-file-earmark-plus"></i>
                            </button></div>
            <Alerta alerta={alerta}></Alerta>
            {listaObjetos.length == 0 && 
            <h4>Nenhum elenco encontrado</h4>
            }
            {listaObjetos.length > 0 &&
            ( <table className="table">
            <thead>
                <tr>
                    <th scope="col" style={{ textAlign : 'center' }}>Ações</th>
                    <th scope="col">Código</th>
                    <th scope="col">Temporada</th>
                    <th scope="col">Treinador</th>
                    <th scope="col">Folha</th>
                </tr>
            </thead>
            <tbody>
                {listaObjetos.map(objeto => (
                    <tr key={objeto.codigo}>
                        <td align="center">
                            <button className="btn btn-info" data-bs-toggle="modal" data-bs-target="#modalEdicao" onClick={() => {
                                recuperar(objeto.codigo);
                                setEditar(true);
                                setAlerta({status:"", message: ""});
                            }}>
                                <i className="bi bi-pencil-square"></i>
                            </button>
                            <button className="btn btn-danger" title="Remover"
                                onClick={() => { remover(objeto); }}>
                                <i className="bi bi-trash"></i>
                            </button>
                        </td>
                        <td>{objeto.codigo}</td>
                        <td>{objeto.temporada}</td>
                        <td>{objeto.treinador}</td>
                        <td>R${objeto.folha} p/Mês</td>
                    </tr>
                ))}
            </tbody>
        </table>)
            }
        </div>
    )
}

export default Tabela;