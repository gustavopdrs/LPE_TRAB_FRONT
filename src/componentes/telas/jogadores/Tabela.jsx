import { useContext } from "react";
import JogadoresContext from "./JogadoresContext";
import Alerta from "../../Alerta";

function Tabela(){
    const { setObjeto, alerta, setAlerta, listaObjetos, remover, setEditar, recuperar } = useContext(JogadoresContext);

    return(
        <div className="modalDiv" style={{padding: '20px'}}>
            <h2>Jogadores</h2>
            <div className="buttonNovo" style={{display:'inline-flex'}}>
            <h3>Novo</h3>
            <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modalEdicao" onClick={() => {
                                setObjeto({codigo: 0, nome: "", numero: "", posicao: "", elenco: ""});
                                setEditar(false);
                                setAlerta({status:"", message: ""});
                            }}>
                                <i className="bi bi-file-earmark-plus"></i>
                            </button>
                            </div>
            <Alerta alerta={alerta}></Alerta>
            {listaObjetos.length == 0 && 
            <h1>Nenhum jogador encontrado</h1>
            }
            {listaObjetos.length > 0 &&
            ( <table className="table">
            <thead>
                <tr>
                    <th scope="col" style={{ textAlign : 'center' }}>Ações</th>
                    <th scope="col">Código</th>
                    <th scope="col">Nome</th>
                    <th scope="col">Numero</th>
                    <th scope="col">Posicao</th>
                    <th scope="col">Elenco</th>
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
                        <td>{objeto.nome}</td>
                        <td>{objeto.numero}</td>
                        <td>{objeto.posicao}</td>
                        <td>{objeto.nomeelenco}</td>
                    </tr>
                ))}
            </tbody>
        </table>)
            }
        </div>
    )
}

export default Tabela;