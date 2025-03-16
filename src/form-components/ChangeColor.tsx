import React, { useState } from "react";

export function ChangeColor(): React.JSX.Element {
    const colors = [
        "red",
        "orange",
        "yellow",
        "green",
        "blue",
        "indigo",
        "violet",
        "black",
    ];

    const [selectedColor, setSelectedColor] = useState("");

    return (
        <div>
            <h3>Change Color</h3>

            <div>
                {colors.map((color) => (
                    <div key={color}>
                        <input
                            type="radio"
                            id={`color-${color}`}
                            name="color"
                            value={color}
                            checked={selectedColor === color}
                            onChange={() => {
                                setSelectedColor(color);
                            }}
                        />
                        <label htmlFor={`color-${color}`}>{color}</label>
                    </div>
                ))}
            </div>

            <div
                data-testid="colored-box"
                style={{
                    backgroundColor: selectedColor,
                    width: "200px",
                    height: "100px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    color: selectedColor === "black" ? "white" : "black",
                    marginTop: "20px",
                    border: "1px solid black",
                }}
            >
                {selectedColor}
            </div>
        </div>
    );
}
