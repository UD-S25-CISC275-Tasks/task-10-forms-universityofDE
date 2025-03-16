import React, { useState } from "react";

export function EditMode(): React.JSX.Element {
    const [isEditMode, setIsEditMode] = useState(false);
    const [name, setName] = useState("Your Name");
    const [isStudent, setIsStudent] = useState(true);

    return (
        <div>
            <h3>Edit Mode</h3>

            <div className="mb-3 form-check form-switch">
                <input
                    type="checkbox"
                    className="form-check-input"
                    id="editModeSwitch"
                    checked={isEditMode}
                    onChange={() => {
                        setIsEditMode(!isEditMode);
                    }}
                />
                <label className="form-check-label" htmlFor="editModeSwitch">
                    Edit Mode
                </label>
            </div>

            {isEditMode ?
                <div>
                    <div className="mb-3">
                        <label htmlFor="nameInput" className="form-label">
                            Name:
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="nameInput"
                            value={name}
                            onChange={(e) => {
                                setName(e.target.value);
                            }}
                        />
                    </div>

                    <div className="mb-3 form-check">
                        <input
                            type="checkbox"
                            className="form-check-input"
                            id="studentCheckbox"
                            checked={isStudent}
                            onChange={() => {
                                setIsStudent(!isStudent);
                            }}
                        />
                        <label
                            className="form-check-label"
                            htmlFor="studentCheckbox"
                        >
                            Is Student
                        </label>
                    </div>
                </div>
            :   <p>
                    {name} is {isStudent ? "a" : "not a"} student
                </p>
            }
        </div>
    );
}
