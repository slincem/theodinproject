import "./EducationalInfo.css";

export default function EducationalInfo({ formData, handleChange }) {
  return (
    <section className="educational-info">
      <h2>Education</h2>
      <label htmlFor="schoolName">School Name</label>
      <input
        type="text"
        id="schoolName"
        name="schoolName"
        value={formData.schoolName}
        onChange={handleChange}
      />
      <label htmlFor="title">Title</label>
      <input
        type="text"
        id="title"
        name="title"
        value={formData.title}
        onChange={handleChange}
      />
      <label htmlFor="startDate">Start Date</label>
      <input
        type="date"
        id="startDate"
        name="startDate"
        value={formData.startDate}
        onChange={handleChange}
      />
      <label htmlFor="endDate">End Date</label>
      <input
        type="date"
        id="endDate"
        name="endDate"
        value={formData.endDate}
        onChange={handleChange}
      />
    </section>
  );
}
