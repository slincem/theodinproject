import "./PracticalInfo.css";

export default function PracticalInfo({ formData, handleChange }) {
  return (
    <section className="practical-info">
      <h2>Professional Experience</h2>
      <div className="form-grid">
        <div className="full-width">
          <label htmlFor="experience">Work Experience</label>
          <textarea
            id="experience"
            name="experience"
            value={formData.experience}
            onChange={handleChange}
            placeholder="Describe your work experience, including job titles, companies, dates, and key responsibilities..."
          />
        </div>
        <div className="full-width">
          <label htmlFor="skills">Skills & Competencies</label>
          <textarea
            id="skills"
            name="skills"
            value={formData.skills}
            onChange={handleChange}
            placeholder="List your technical skills, soft skills, languages, and tools you're proficient with..."
          />
        </div>
      </div>
    </section>
  );
}
