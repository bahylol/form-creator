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
    { label: 'First Name', name: 'firstName', type: 'text', placeholder: 'Enter your first name', required: true },
    { label: 'Last Name', name: 'lastName', type: 'text', placeholder: 'Enter your last name', required: true },
    { label: 'Email', name: 'email', type: 'email', placeholder: 'Enter your email', required: true },
    { label: 'Phone', name: 'phone', type: 'tel', placeholder: 'Enter your phone number', required: false },
    {
      label: 'Favorite Color',
      name: 'color',
      type: 'dropdown',
      required: true,
      options: [
        { value: 'red', label: 'Red' },
        { value: 'blue', label: 'Blue' },
        { value: 'green', label: 'Green' },
      ],
    },
    {
      label: 'Gender',
      name: 'gender',
      type: 'radio',
      required: true,
      options: [
        { value: 'male', label: 'Male' },
        { value: 'female', label: 'Female' },
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
