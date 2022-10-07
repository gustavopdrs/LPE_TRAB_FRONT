import { useContext } from "react";


function InputForm({ htmlFor, label, id, name, value, type, onChange, required, validFeedback, invalidFeedback }) {

    return (
        <div>
            <label htmlFor={htmlFor} className="form-label">
                {label}
            </label>
            <input
                type={type}
                className="form-control"
                id={id}
                name={name}
                value={value}
                onChange={onChange}
                required={required}
            />
            <div className="valid-feedback">{validFeedback}</div>
            <div className="invalid-feedback">{invalidFeedback}</div>
        </div>
    )
}

export default InputForm;