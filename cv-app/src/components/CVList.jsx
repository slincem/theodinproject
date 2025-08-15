import "./CVList.css";

export default function CVList({ cvList, handleEditCV, handleDeleteCV }) {
  return (
    <div className="cv-list">
      <h2 className="cv-list-title">CV List</h2>
      {cvList.map((cv) => {
        return (
          <div className="cv-card" key={cv.name}>
            <div className="cv-card-info">
              <div className="cv-card-name">{cv.name}</div>
              <div className="cv-card-email">{cv.email}</div>
              <div className="cv-card-phone">{cv.phone}</div>
            </div>
            <div className="cv-card-actions">
              <button className="cv-card-edit" onClick={() => handleEditCV(cv)}>
                Edit
              </button>
              <button
                className="cv-card-delete"
                onClick={() => handleDeleteCV(cv)}
              >
                Delete
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
