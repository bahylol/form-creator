import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import './FormCreator.css';
import { mapValidationRule } from '../utils/yupMapper';

const FormCreator = ({ formTemplate, formStyle, onSubmit }) => {

    if (!formStyle) {
        formStyle = {};
    }
    
    // Build the Yup validation schema based on formTemplate
    const validationSchema = yup.object().shape(
        formTemplate.reduce((acc, field) => {
            if (field.validation) {
                acc[field.name] = mapValidationRule(field);
            }
            return acc;
        }, {})
    );

    // useForm hook from react-hook-form
    const { handleSubmit, control, formState: { errors } } = useForm({
        resolver: yupResolver(validationSchema),
    });

    const onSubmitForm = (data) => {
        onSubmit(data);
    };

    return (
        <div className="container">
            {/* Form Name */}
            <header style={formStyle.formNameStyle}>{formStyle.formName || "Form"}</header>

            <form className="form" onSubmit={handleSubmit(onSubmitForm)}>
                {formTemplate.map((field, index) => (
                    <div className="input-box" key={index}>

                        {/* Label with with error display */}
                        <label htmlFor={field.name} style={formStyle.inputBoxLabel}>
                            {field.label}
                            {errors[field.name] && <span className="error-message" style={formStyle.errorMessage}>* {errors[field.name]?.message}</span>}
                        </label>

                        {/* Dynamic Form Inputs */}
                        <Controller
                            control={control}
                            name={field.name}
                            render={({ field: controllerField }) => (

                                // Drop down menu
                                field.type === 'select' ? (
                                    <select style={formStyle.dropDownMenu} {...controllerField}>
                                        {field.options.map((option, idx) => (
                                            <option key={idx} value={option}>
                                                {option}
                                            </option>
                                        ))}
                                    </select>
                                ) :

                                    //Radio Buttons
                                    field.type === 'radio' ? (
                                        <div className="radio-group">
                                            {field.options.map((option, i) => (
                                                <div className="radio-option" key={i}>
                                                    <input
                                                        type="radio"
                                                        value={option.value}
                                                        id={`${field.name}-${option.value}`}
                                                        checked={controllerField.value === option.value}
                                                        onChange={() => controllerField.onChange(option.value)}
                                                    />
                                                    <label htmlFor={`${field.name}-${option.value}`} style={formStyle.radioButton}>{option.label}</label>
                                                </div>
                                            ))}
                                        </div>
                                    ) : (

                                        //Default
                                        <input
                                            type={field.type}
                                            placeholder={field.placeholder}
                                            {...controllerField}
                                            style={formStyle.inputBox}
                                        />
                                    )
                            )}
                        />
                    </div>
                ))}

                {/* Submit button */}
                <button type="submit" style={formStyle.submitButton}>{formStyle.submitButtonLabel || "submit"}</button>
            </form>
        </div>
    );
};

export default FormCreator;
