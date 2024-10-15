import React, { useState } from 'react';
import FormCreator from './FormCreator';

const FormViews = ({ formTemplate, formStyle, handleFormSubmit }) => {
    const [view, setView] = useState('form'); // 'form' or 'json'

    const copyToClipboard = (data, dataType) => {
        navigator.clipboard.writeText(JSON.stringify(data, null, 2))
            .then(() => alert(`${dataType} copied to clipboard!`))
            .catch(() => alert(`Failed to copy ${dataType}.`));
    };

    const buttonStyle = {
        padding: '10px 20px',
        backgroundColor: '#007BFF',
        color: '#fff',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        fontSize: '14px',
    };

    const buttonContainerStyle = {
        display: 'flex',
        gap: '10px',
        marginBottom: '20px',
    };

    const copyButtonStyle = {
        ...buttonStyle,
        backgroundColor: '#28A745', // Green for copy buttons
    };

    return (
        <div>
            <div style={buttonContainerStyle}>
                <button
                    style={buttonStyle}
                    onClick={() => setView(view === 'form' ? 'json' : 'form')}
                >
                    {view === 'form' ? 'Show JSON View' : 'Show Form View'}
                </button>
                <button
                    style={copyButtonStyle}
                    onClick={() => copyToClipboard(formTemplate, 'Form Template')}
                >
                    Copy Form Template
                </button>
                <button
                    style={copyButtonStyle}
                    onClick={() => copyToClipboard(formStyle, 'Form Style')}
                >
                    Copy Form Style
                </button>
            </div>

            {view === 'form' ? (
                <FormCreator
                    formTemplate={formTemplate}
                    formStyle={formStyle}
                    onSubmit={handleFormSubmit}
                />
            ) : (
                <>
                    <div>
                        <h2>Form Template:</h2>
                        <pre>{JSON.stringify(formTemplate, null, 2)}</pre>
                    </div>

                    <div>
                        <h2>Form Style:</h2>
                        <pre>{JSON.stringify(formStyle, null, 2)}</pre>
                    </div>
                </>
            )}
        </div>
    );
};

export default FormViews;
