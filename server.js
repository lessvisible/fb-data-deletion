const express = require('express');
const app = express();

app.use(express.json());

// Data Deletion Endpoint
app.post('/data-deletion', (req, res) => {
  console.log('Deletion request received:', req.body);

  res.status(200).json({
    success: true,
    message: 'Our app does not store any user data, so there is nothing to delete.'
  });
});

// Default route (optional)
app.get('/', (req, res) => {
  res.send('✅ Data Deletion Callback is working!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
