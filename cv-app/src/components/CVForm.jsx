//import "./CVForm.css";
import PersonalInfo from "./PersonalInfo";
import EducationalInfo from "./EducationalInfo";
import PracticalInfo from "./PracticalInfo";

export default function CVForm({ formData, handleChange, errors }) {
  return (
    <div className="cv-form">
      CVForm
      <PersonalInfo formData={formData} handleChange={handleChange} />
      <EducationalInfo formData={formData} handleChange={handleChange} />
      <PracticalInfo formData={formData} handleChange={handleChange} />
      {errors.name && <p className="error">{errors.name}</p>}
      {errors.email && <p className="error">{errors.email}</p>}
      {errors.phone && <p className="error">{errors.phone}</p>}
      {errors.address && <p className="error">{errors.address}</p>}
      {errors.city && <p className="error">{errors.city}</p>}
      <button type="submit">Generate CV</button>
    </div>
  );
}
