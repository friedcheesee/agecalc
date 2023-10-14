// AgeCalculator.js
import React, { useState } from 'react';

const AgeCalculator = () => {
  const [birthDate, setBirthDate] = useState('');
  const [age, setAge] = useState(null);

  const calculateAge = () => {
    const today = new Date();
    const birthDateObj = new Date(birthDate);
    
    // Calculate age
    let age = today.getFullYear() - birthDateObj.getFullYear();
    const monthDiff = today.getMonth() - birthDateObj.getMonth();

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDateObj.getDate())) {
      age--;
    }

    setAge(age);
  };

  return (
    
    <div style={{ textAlign: 'center', fontFamily: 'Arial, sans-serif', padding: '20px' }}>
        <h1>Age Calculator</h1>
      <label style={{ display: 'block', margin: '10px 0', fontSize: '18px' }}>
        Enter your birthdate:
        <div>
        <input
          type="date"
          value={birthDate}
          onChange={(e) => setBirthDate(e.target.value)}
          style={{ margin: '10px 0', padding: '8px', borderRadius: '5px',width:"300px", fontSize: '16px' }}
        />
        </div>
      </label>
      <button onClick={calculateAge} style={{ backgroundColor: '#3498db', color: 'white', padding: '12px', borderRadius: '8px', fontSize: '18px', cursor: 'pointer' }}>
        Calculate Age
      </button>
      {age !== null && (
        <p style={{ marginTop: '20px', fontSize: '18px' }}>
          Your age is: {age} years old.
        </p>
      )}
    </div>
  );
};

export default AgeCalculator;
