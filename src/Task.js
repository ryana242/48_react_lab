import React, { useState } from 'react';

function Task({ task, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedName, setEditedName] = useState(task.name);
  const [editedDescription, setEditedDescription] = useState(task.description);

  const handleNameChange = (e) => {
    setEditedName(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setEditedDescription(e.target.value);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleUpdate = () => {
    setIsEditing(false);
    task.name = editedName;
    task.description = editedDescription;
  };

  return (
    <div className="card mb-3 shadow">
      <div className="card-body d-flex justify-content-between align-items-center">
        <div>
          {isEditing ? (
            <div>
              <input
                type="text"
                className="form-control mb-2"
                value={editedName}
                onChange={handleNameChange}
              />
              <textarea
                className="form-control mb-2"
                value={editedDescription}
                onChange={handleDescriptionChange}
              />
            </div>
          ) : (
            <div>
              <h5 className="card-title">{task.name}</h5>
              <p className="card-text">{task.description}</p>
            </div>
          )}
        </div>
        <div>
          {isEditing ? (
            <button className="btn btn-success me-2" onClick={handleUpdate}>
              Update
            </button>
          ) : (
            <button className="btn btn-primary me-2" onClick={handleEdit}>
              Edit
            </button>
          )}
          <button className="btn btn-danger" onClick={onDelete}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default Task;
