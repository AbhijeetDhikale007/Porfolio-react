import { useState, useEffect } from 'react';

function TypingAnimation() {
    const [TextAnimation, setText] = useState('');
    const targetTexts = ['Tech Enthusiast.', 'Coder...', 'Web Developer.'];
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    useEffect(() => {
      const intervalId = setInterval(() => {
        const currentText = targetTexts[textIndex];
  
        if (!isDeleting && charIndex < currentText.length) {
          setText(currentText.slice(0, charIndex + 1));
          charIndex++;
        } else if (isDeleting && charIndex > 0) {
          setText(currentText.slice(0, charIndex - 1));
          charIndex--;
        } else {
          isDeleting = !isDeleting;
          if (isDeleting) {
            // Delay before starting to delete
            setTimeout(() => {
              // Start deleting after a delay
            }, 200); // Adjust delay as needed
          } else {
            setTimeout(() => {
              // Move to next text after deleting
              textIndex = (textIndex + 1) % targetTexts.length;
              charIndex = 0;
            }, 200); // Adjust delay as needed
          }
        }
        }, 200); // Adjust typing speed here (milliseconds)

        return () => clearInterval(intervalId); // Cleanup on component unmount
    }, []);

    return (
        <div>
            <h1 className='TypedWriter'>{TextAnimation}</h1>
        </div>
    );
}

export default TypingAnimation