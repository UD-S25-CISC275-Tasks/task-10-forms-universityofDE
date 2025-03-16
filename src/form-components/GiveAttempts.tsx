import React, { useState } from "react";

export function GiveAttempts(): React.JSX.Element {
    const [attempts, setAttempts] = useState(3);
    const [amountToAdd, setAmountToAdd] = useState<number | "">(0);

    const handleUseAttempt = () => {
        setAttempts((prevAttempts) => Math.max(0, prevAttempts - 1));
    };

    const handleGainAttempts = () => {
        if (amountToAdd !== "") {
            setAttempts((prevAttempts) => prevAttempts + Number(amountToAdd));
        }
    };

    return (
        <div>
            <h3>Give Attempts</h3>
            <p>Attempts remaining: {attempts}</p>

            <div>
                <button onClick={handleUseAttempt} disabled={attempts === 0}>
                    Use Attempt
                </button>
            </div>

            <div>
                <input
                    type="number"
                    value={amountToAdd}
                    onChange={(e) => {
                        setAmountToAdd(
                            e.target.value === "" ? "" : Number(e.target.value),
                        );
                    }}
                />
                <button onClick={handleGainAttempts}>Gain Attempts</button>
            </div>
        </div>
    );
}
