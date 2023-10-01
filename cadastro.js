const express = require('express');

const app = express();

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000 \n navegue para http://localhost:3000');
});