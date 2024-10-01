import React, { useState } from 'react';
import './FormCreator.css';

const FormCreator = ({ formTemplate, formName, submitButtonLabel, onSubmit }) => {
    const [formData, setFormData] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
    }

    return (
        <div className="container">
            {/* form Name */}
            <header>{formName}</header>

            <form className="form" onSubmit={handleSubmit}>
                {formTemplate.map((field, index) => (
                    <div className="input-box" key={index}>

                        {/* label */}
                        <label htmlFor={field.name}>{field.label}</label>

                        {/* Drop Down Menu */}
                        {field.type === 'select' ? (
                            <select name={field.name} value={formData[field.name] || ''} onChange={handleChange}>
                                {field.options.map((option, idx) => (
                                    <option key={idx} value={option}>{option}</option>
                                ))}
                            </select>
                        ) :

                            // Radio Buttons 
                            field.type === 'radio' ? (
                                <div className="radio-group">
                                    {field.options.map((option, i) => (
                                        <div className="radio-option" key={i}>
                                            <input
                                                type="radio"
                                                name={field.name}
                                                value={option.value}
                                                id={`${field.name}-${option.value}`}
                                                checked={formData[field.name] === option.value}
                                                onChange={handleChange}
                                            />
                                            <label htmlFor={`${field.name}-${option.value}`}>{option.label}</label>
                                        </div>
                                    ))}
                                </div>
                            ) :

                                //default
                                (
                                    <input
                                        type={field.type}
                                        name={field.name}
                                        placeholder={field.placeholder}
                                        value={formData[field.name] || ''}
                                        onChange={handleChange}
                                    />
                                )}
                    </div>
                ))}

                {/* Submit button */}
                <button type="submit">{submitButtonLabel}</button>
            </form>
        </div>
    );
};

export default FormCreator;
