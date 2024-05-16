const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000; //Or any port you prefer

app.use(express.json());

app.listen(PORT, () => {
    console.log(`Server is runnning on port ${PORT}`);

});