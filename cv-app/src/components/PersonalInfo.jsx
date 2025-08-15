import "./PersonalInfo.css";

export default function PersonalInfo({ formData, handleChange }) {
  return (
    <section className="personal-info">
      <h2>Personal Information</h2>
      <label htmlFor="name">Name</label>
      <input
        type="text"
        id="name"
        name="name"
        value={formData.name}
        onChange={handleChange}
      />
      <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
      />
      <label htmlFor="phone">Phone</label>
      <input
        type="tel"
        id="phone"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
      />
      <label htmlFor="address">Address</label>
      <input
        type="text"
        id="address"
        name="address"
        value={formData.address}
        onChange={handleChange}
      />
      <label htmlFor="city">City</label>
      <input
        type="text"
        id="city"
        name="city"
        value={formData.city}
        onChange={handleChange}
      />
      <label htmlFor="state">State</label>
      <input
        type="text"
        id="state"
        name="state"
        value={formData.state}
        onChange={handleChange}
      />
    </section>
  );
}
