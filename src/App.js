import './App.css';
import FormCreator from './components/FormCreator';

function App() {

  const formTemplate1 = [
    {
      label: 'First Name',
      name: 'firstName',
      type: 'text',
      placeholder: 'Enter your first name',
      validation: [
        { type: 'string' },
        { required: true, message: 'First Name is required' },
        { min: 2, message: 'First Name must be at least 2 characters' }
      ]
    },
    {
      label: 'Last Name',
      name: 'lastName',
      type: 'text',
      placeholder: 'Enter your last name',
      validation: [
        { type: 'string' },
        { required: true, message: 'Last Name is required' },
        { min: 2, message: 'Last Name must be at least 2 characters' }
      ]
    },
    {
      label: 'Email',
      name: 'email',
      type: 'email',
      placeholder: 'Enter your email',
      validation: [
        { type: 'email', message: 'Must be a valid email' },
        { required: true, message: 'Email is required' }
      ]
    },
    {
      label: 'Phone',
      name: 'phone',
      type: 'tel',
      placeholder: 'Enter your phone number',
      validation: [
        { type: 'string' },
        { required: true, message: 'Phone is required' },
        { matches: /^[0-9]+$/, message: 'Phone number must contain only digits' },
        { min: 10, message: 'Phone number must be at least 10 digits' }
      ]
    },
    {
      label: 'Gender',
      name: 'gender',
      type: 'radio',
      options: [
        { label: 'Male', value: 'male' },
        { label: 'Female', value: 'female' }
      ],
      validation: [
        { type: 'radio' },
        { required: true, message: 'Gender is required' }
      ]
    },
    {
      label: 'Country',
      name: 'country',
      type: 'select',
      options: ['Please Select', 'USA', 'Canada', 'Germany'],
      validation: [
        { type: 'select' },
        { required: true, message: 'Please select a country' }
      ]
    },
    {
      label: 'Hobbies',
      name: 'hobbies',
      type: 'checkbox',
      options: [
        { label: 'Reading', value: 'reading' },
        { label: 'Gaming', value: 'gaming' },
        { label: 'Traveling', value: 'traveling' },
        { label: 'Cooking', value: 'cooking' }
      ],
      validation: [
        { type: 'checkbox' },
        { required: true, message: 'Please select at least on hobby' }
      ]
    },
  ];

  const formStyle1 = {
    container: { background: "blue" },
    formName: "User Registration Form",
    formNameStyle: { color: "orange", background: "green" },
    submitButtonLabel: "Register",
    inputBox: { width: "30%" },
    inputBoxLabel: { color: "red", fontSize: "1.1rem" },
    defaultInput: { background: "yellow" },
    errorMessage: { color: "yellow" },
    dropDownMenu: { color: "purple", background: "green" },
    radioButton: { color: "yellow" },
    checkbox: { color: "pink" },
    submitButton: { color: "purple", background: "green" }
  }

  const formTemplate2 = [
    {
      label: 'First Name',
      name: 'firstName',
      type: 'text',
      placeholder: 'Enter your first name',
      validation: [
        { type: 'string' },
        { required: true, message: 'First Name is required' },
        { min: 2, message: 'First Name must be at least 2 characters' }
      ]
    },
    {
      label: 'Last Name',
      name: 'lastName',
      type: 'text',
      placeholder: 'Enter your last name',
      validation: [
        { type: 'string' },
        { required: true, message: 'Last Name is required' },
        { min: 2, message: 'Last Name must be at least 2 characters' }
      ]
    },
    {
      label: 'Email',
      name: 'email',
      type: 'email',
      placeholder: 'Enter your email',
      validation: [
        { type: 'email', message: 'Must be a valid email' },
        { required: true, message: 'Email is required' }
      ]
    },
    {
      label: 'Comments',
      name: 'comments',
      type: 'textarea',
      placeholder: 'Enter your feedback here',
      validation: [
        { type: 'string' },
        { required: true, message: 'Feedback is required' }
      ]
    },
    {
      label: 'Rating',
      name: 'rating',
      type: 'radio',
      options: [
        { label: 'Terrible', value: '1' },
        { label: 'Bad', value: '2' },
        { label: 'Average', value: '3' },
        { label: 'Good', value: '4' },
        { label: 'Excellent', value: '5' }
      ],
      validation: [
        { type: 'radio' },
        { required: true, message: 'Rating is required' }
      ]
    }
  ];

  const handleFormSubmit = (formData) => {
    const formDataString = Object.entries(formData)
      .map(([key, value]) => `${key}: ${value}`)
      .join('\n');

    alert(`Form submitted successfully! \n\n${formDataString}`);
  };

  return (
    <>
      <h1>Dynamic Form Test</h1>

      <div className="Page">
        <FormCreator
          formTemplate={formTemplate1}
          formStyle={formStyle1}
          onSubmit={handleFormSubmit}
        />
      </div>

      <br />
      <br />

      <div className="Page">
        <FormCreator
          formTemplate={formTemplate2}
          onSubmit={handleFormSubmit}
        />
      </div>

    </>
  );
}

export default App;
