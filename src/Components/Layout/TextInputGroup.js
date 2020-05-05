import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

function TextInputGroup({
    label, name, value, placeholder, type, onChange, error, onKeyUp
}) {
    return (
        <div className="form-group">
            <label htmlFor={name}>{label}</label>
            <input type={type} name={name} 
                className={classnames('form-control form-control-lg', {'is-invalid': error})}
                placeholder={placeholder} value={value} onChange={onChange} onKeyUp={onKeyUp}/>
            {error && <div className="invalid-feedback">{error}</div>}
        </div>
    )
}

TextInputGroup.propTypes = {
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    error: PropTypes.string,
    onKeyUp: PropTypes.func.isRequired
}

TextInputGroup.defaultProps ={
    type: 'text'
}

export default TextInputGroup

