const express = require('express');
const bodyParser = require('body-parser');
const bfhlRoutes = require('./routes/bfhlRoutes');  
const app = express();

app.use(bodyParser.json());  
app.use('/bfhl', bfhlRoutes);  


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
