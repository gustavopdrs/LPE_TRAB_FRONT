import { useContext } from "react";
import Alerta from "../../Alerta";
import ElencosContext from "./ElencosContext";
import InputForm from "./commons/InputForm";
function Form(){

    const {objeto, handleChange, acaoCadastrar, alerta} = useContext(ElencosContext);
    (() => {
        'use strict'
      
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        const forms = document.querySelectorAll('.needs-validation')
      
        // Loop over them and prevent submission
        Array.from(forms).forEach(form => {
          form.addEventListener('submit', event => {
            if (!form.checkValidity()) {
              event.preventDefault()
              event.stopPropagation()
            }
      
            form.classList.add('was-validated')
          }, false)
        })
      })()

    return(
        <div className="modal fade" id="modalEdicao" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Elenco</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <form id="formulario" onSubmit={acaoCadastrar} className="needs-validation" noValidate>
                        <div className="modal-body">
                            <Alerta alerta={alerta} />
                            <div className="form-group">
                                <label htmlFor="txtCodido" className="form-label">
                                    Código
                                </label>
                                <input
                                    type="text"
                                    readOnly
                                    className="form-control"
                                    id="txtCodido"
                                    name="codigo"
                                    value={objeto.codigo}
                                    onChange={handleChange}
                                />
                               
                            </div>
                            <div className="form-group">
                            <InputForm htmlFor="txtTemporada" type="text" label="Temporada" id="txtTemporada" name="temporada" value={objeto.temporada} onChange={handleChange} required={true} validFeedback="OK!" invalidFeedback="Preencha este campo!"></InputForm>
                            </div>
                            <div className="form-group">
                            <InputForm htmlFor="txtTreinador" type="text" label="Treinador" id="txtTreinador" name="treinador" value={objeto.treinador} onChange={handleChange} required={true} validFeedback="OK!" invalidFeedback="Preencha este campo!"></InputForm>
                            </div>
                            <div className="form-group">
                                 <InputForm htmlFor="txtFolha" type="number" label="Folha" id="txtFolha" name="folha" value={objeto.folha} onChange={handleChange} required={true} validFeedback="OK!" invalidFeedback="Preencha este campo!"></InputForm>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
                            <button type="submit" className="btn btn-success" >
                                Salvar  <i className="bi bi-save"></i>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Form;