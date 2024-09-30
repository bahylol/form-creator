import React, { useState } from 'react';
import './FormCreator.css';

const FormCreator = ({ formTemplate, formName, submitButtonLabel, onSubmit }) => {
    const [formData, setFormData] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    return (
        <div className="container">
            <header>{formName}</header>

            <form className="form" onSubmit={onSubmit}>
                {formTemplate.map((field, index) => (
                    <div className="input-box" key={index}>
                        <label htmlFor={field.name}>{field.label}</label>
                        <input
                            type={field.type}
                            name={field.name}
                            placeholder={field.placeholder}
                            value={formData[field.name] || ''}
                            onChange={handleChange}
                        />
                    </div>
                ))}
                <button type="submit">{submitButtonLabel}</button>
            </form>
        </div>
    );
};

export default FormCreator;
