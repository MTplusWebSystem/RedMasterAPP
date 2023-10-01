const express = require('express');
const app = express();

app.listen(3010, () => {
    console.log('Servidor rodando na porta 3010 \n Navegue para http://localhost:3010');
});

app.get('/section/:token', (req, res) => {
    const token = req.params.token;
    res.send(`TOKEN recebido: ${token} sucesso!`);
});
