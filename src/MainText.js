import React, { useState, useEffect } from 'react';
import './App.css';

function MainText() {
    const [displayedText, setDisplayedText] = useState('');
    const text = "Heello, I am Madina and I am a front-end web developer."; // Fixed typo in "Iam"
    const speed = 100;

    useEffect(() => {
        let i = 0;

        const interval = setInterval(() => {
            console.log(`Adding character: ${text.charAt(i)}`); // Debugging log
            if (i < text.length) {
                setDisplayedText((prev) => prev + text.charAt(i));
                i++;
            } else {
                clearInterval(interval);
                console.log("Typing effect completed.");
            }
        }, speed);

        return () => {
            clearInterval(interval);
            console.log("Interval cleared on unmount.");
        };
    }, []); 

    return (
        <div>
            <p id="par">{displayedText}</p>
        </div>
    );
}

export default MainText;