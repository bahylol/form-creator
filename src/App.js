import './App.css';
import FormCreator from './components/FormCreator';

function App() {

  const formTemplate1 = [
    { label: 'First Name', name: 'firstName', type: 'text', placeholder: 'John' },
    { label: 'Last Name', name: 'lastName', type: 'text', placeholder: 'Doe' },
    { label: 'Email', name: 'email', type: 'email', placeholder: 'john.doe@example.com' },
    { label: 'Phone', name: 'phone', type: 'tel', placeholder: '+1234567890' },
  ];

  const formTemplate2 = [
    { label: 'First Name', name: 'firstName', type: 'text', placeholder: 'John' },
    { label: 'Last Name', name: 'lastName', type: 'text', placeholder: 'Doe' },
    { label: 'Email', name: 'email', type: 'email', placeholder: 'john.doe@example.com' },
    { label: 'Phone', name: 'phone', type: 'tel', placeholder: '+1234567890' },
    { label: 'Comments', name: 'comments', type: 'text', placeholder: 'Your message here...' },
  ];

  const formTemplate3 = [
    { label: 'First Name', name: 'firstName', type: 'text', placeholder: 'John' },
    { label: 'Last Name', name: 'lastName', type: 'text', placeholder: 'Doe' },
    { label: 'Email', name: 'email', type: 'email', placeholder: 'john.doe@example.com' },
    { label: 'Phone', name: 'phone', type: 'tel', placeholder: '+1234567890' },
    {
      label: 'Country',
      name: 'country',
      type: 'select',
      options: ['USA', 'Canada', 'UK', 'Australia'],
    },
    {
      label: 'Gender',
      name: 'gender',
      type: 'radio',
      options: [
        { label: 'Male', value: 'male' },
        { label: 'Female', value: 'female' },
        { label: 'Other', value: 'other' },
      ],
    },
  ];

  const handleFormSubmit = (formData) => {
    console.log(formData);
    alert(`Form submitted successfully!`);
  };

  return (
    <>
      <h1>Dynamic Form Test</h1>

      <div className="Page">
        <FormCreator
          formTemplate={formTemplate3}
          formName="User Registration Form"
          submitButtonLabel="Register"
          onSubmit={handleFormSubmit}
        />
      </div>

      <br />
      <br />

      <div className="Page">
        <FormCreator
          formTemplate={formTemplate2}
          formName="Feedback"
          submitButtonLabel="Send Feedback"
          onSubmit={handleFormSubmit}
        />
      </div>

    </>
  );
}

export default App;
