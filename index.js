const express = require('express');
const app = express();
app.use(express.json());

// POST endpoint to process data
app.post('/bfhl', (req, res) => {
  const data = req.body.data;

  // Validate input
  if (!Array.isArray(data)) {
    return res.status(400).json({
      is_success: false,
      message: 'Invalid data format'
    });
  }

  // Separate numbers and alphabets
  const numbers = data.filter(item => !isNaN(item) && item.trim() !== '');
  const alphabets = data.filter(item => isNaN(item) && item.trim() !== '');

  // Find highest lowercase alphabet
  const highestLowercaseAlphabet = alphabets
    .filter(item => item === item.toLowerCase())
    .sort()
    .reverse()
    .slice(0, 1);

  // Send response
  res.json({
    is_success: true,
    user_id: 'john_doe_17091999',
    email: 'john@xyz.com',
    roll_number: 'ABCD123',
    numbers,
    alphabets,
    highest_lowercase_alphabet: highestLowercaseAlphabet
  });
});

// GET endpoint to return a fixed operation code
app.get('/bfhl', (req, res) => {
  res.json({
    operation_code: 1
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
