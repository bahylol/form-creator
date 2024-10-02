import './App.css';
import * as yup from 'yup';
import FormCreator from './components/FormCreator';

function App() {

  const formTemplate1 = [
    {
      label: 'First Name',
      name: 'firstName',
      type: 'text',
      placeholder: 'Enter your first name',
      validation: yup.string().required('First Name is required')
    },
    {
      label: 'Last Name',
      name: 'lastName',
      type: 'text',
      placeholder: 'Enter your last name',
      validation: yup.string().required('Last Name is required')
    },
    {
      label: 'Email',
      name: 'email',
      type: 'email',
      placeholder: 'Enter your email',
      validation: yup.string().email('Must be a valid email').required('Email is required')
    },
    {
      label: 'Phone',
      name: 'phone',
      type: 'tel',
      placeholder: 'Enter your phone number',
      validation: yup.string().matches(/^[0-9]+$/, 'Phone number must contain only digits')
    },
    {
      label: 'Gender',
      name: 'gender',
      type: 'radio',
      options: [{ label: 'Male', value: 'male' }, { label: 'Female', value: 'female' }],
    },
    {
      label: 'Country',
      name: 'country',
      type: 'select',
      options: ['Please Select', 'USA', 'Canada', 'Germany'],
      validation: yup.string().required('Please select a country')
    }
  ];


  const formTemplate2 = [
    {
      label: 'First Name',
      name: 'firstName',
      type: 'text',
      placeholder: 'Enter your first name',
      validation: yup.string().required('First Name is required')
    },
    {
      label: 'Last Name',
      name: 'lastName',
      type: 'text',
      placeholder: 'Enter your last name',
      validation: yup.string().required('Last Name is required')
    },
    {
      label: 'Email',
      name: 'email',
      type: 'email',
      placeholder: 'Enter your email',
      validation: yup.string().email('Must be a valid email').required('Email is required')
    },
    {
      label: 'Comments',
      name: 'comments',
      type: 'textarea',
      placeholder: 'Enter your feedback here',
      validation: yup.string().required('Feedback is required')
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
      validation: yup.string().required('Rating is required')
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
