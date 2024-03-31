const express = require('express');

const app = express();
app.use(express.json());

// This is a sample user stored in memory for simplicity.
// In a real application, you'd fetch the user from a database.
const user = {
  id: 1,
  username: 'test',
  // Password is 'password', stored as plain text
  password: 'password'
};

app.post('/login', (req, res) => {
  const { username, password } = req.body;

  if (user.username !== username || user.password !== password) {
    return res.status(400).send('Invalid username or password');
  }

  res.send('Logged in successfully');
});

app.listen(3000, () => console.log('Server running on port 3000'));
