import { useState } from "react";
import "./App.css";
import CVForm from "./components/CVForm";
import CVList from "./components/CVList";

const initialFormData = {
  id: "",
  name: "",
  email: "",
  phone: "",
  address: "",
  city: "",
  state: "",
  schoolName: "",
  title: "",
  startDate: "",
  endDate: "",
  experience: "",
  skills: "",
};

function App() {
  const [cvList, setCvList] = useState([]);
  const [formData, setFormData] = useState(initialFormData);
  const [selectedCV, setSelectedCV] = useState(null);

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("CV Data:", formData);
    if (!validateForm()) {
      return;
    }
    if (selectedCV) {
      setCvList((prevData) => {
        return prevData.map((cv) => {
          if (cv.id === selectedCV.id) {
            formData.id = cv.id;
            return formData;
          }
          return cv;
        });
      });
    } else {
      formData.id = Math.random().toString(36).substring(2, 15);
      setCvList((prevData) => [...prevData, formData]);
    }
    handleCleanCVForm();
  };

  const validateForm = () => {
    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.address ||
      !formData.city ||
      !formData.state
    ) {
      setErrors({
        name: !formData.name ? "Name is required" : "",
        email: !formData.email ? "Email is required" : "",
        phone: !formData.phone ? "Phone is required" : "",
        address: !formData.address ? "Address is required" : "",
        city: !formData.city ? "City is required" : "",
      });
      return false;
    }
    setErrors({});
    return true;
  };

  const handleCleanCVForm = () => {
    setSelectedCV(null);
    setFormData(initialFormData);
  };

  const handleEditCV = (cv) => {
    setSelectedCV(cv);
    setFormData(cv);
  };

  const handleDeleteCV = (cv) => {
    setCvList((prevData) => prevData.filter((c) => c.id !== cv.id));
  };

  return (
    <>
      <></>
      <h1>CV Builder</h1>
      <CVList
        cvList={cvList}
        handleEditCV={handleEditCV}
        handleDeleteCV={handleDeleteCV}
      />
      <button onClick={handleCleanCVForm}>Clean CV Form</button>
      <form className="cv-form" onSubmit={handleSubmit}>
        <CVForm
          formData={formData}
          handleChange={handleChange}
          errors={errors}
        />
      </form>
    </>
  );
}

export default App;
