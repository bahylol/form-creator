import './App.css';
import FormCreator from './components/FormCreator';

function App() {

  const formTemplate = [
    { label: 'First Name', name: 'firstName', type: 'text', placeholder: 'Enter your first name' },
    { label: 'Last Name', name: 'lastName', type: 'text', placeholder: 'Enter your last name' },
    { label: 'Email', name: 'email', type: 'email', placeholder: 'Enter your email' },
    { label: 'Phone', name: 'phone', type: 'tel', placeholder: 'Enter your phone number' },
  ];

  const handleFormSubmit = () => {
    alert(`Form submitted successfully!`);
  };

  return (
    <>
      <h1>Dynamic Form Test</h1>
      <div className="Page">
        <FormCreator
          formTemplate={formTemplate}
          formName="User Registration Form"
          submitButtonLabel="Register"
          onSubmit={handleFormSubmit}
        />
      </div>
    </>
  );
}

export default App;
