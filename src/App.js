import './App.css';
import FormViews from './components/FormViews';
import formStyle1 from './templates/formStyle1.json';
import formTemplate1 from './templates/formTemplate1.json';
import formTemplate2 from './templates/formTemplate2.json';

function App() {

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
        <FormViews
          formTemplate={formTemplate1}
          formStyle={formStyle1}
          handleFormSubmit={handleFormSubmit}
        />
      </div>

      <br />
      <br />

      <div className="Page">
        <FormViews
          formTemplate={formTemplate2}
          handleFormSubmit={handleFormSubmit}
        />
      </div>

    </>
  );
}

export default App;
