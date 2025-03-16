import React, { useState } from "react";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer,
}: {
    options: string[];
    expectedAnswer: string;
}): React.JSX.Element {
    const [selectedAnswer, setSelectedAnswer] = useState("");

    const isCorrect = selectedAnswer === expectedAnswer;

    return (
        <div>
            <h3>Multiple Choice Question</h3>

            <select
                value={selectedAnswer}
                onChange={(e) => {
                    setSelectedAnswer(e.target.value);
                }}
            >
                <option value="">Select an answer</option>
                {options.map((option) => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </select>

            <div>{isCorrect ? "✔️" : "❌"}</div>
        </div>
    );
}
