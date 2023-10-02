const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
app.use(bodyParser.json());

app.listen(3010, () => {
    console.log('Servidor rodando na porta 3010 \n Navegue para http://localhost:3010');
});

app.get('/section/:token', (req, res) => {
    const token = req.params.token;
    let tokenEncontrado = false;
    
    fs.readFile('./section.json', 'utf8', (err, data) => {
        if (err) {
            console.error('Erro ao ler o arquivo:', err);
            res.status(500).send('Erro ao ler o arquivo');
            return;
        }
        
        try {
            const jsonData = JSON.parse(data);
            console.log(jsonData);
            
            for (const item of jsonData.tokens) {
                if (item.token === token) {
                    res.send(item.info);
                    tokenEncontrado = true;
                    break;
                }
            }
            
            if (!tokenEncontrado) {
                res.status(404).send('Não encontrado');
            }
        } catch (error) {
            console.error('Erro ao fazer parse do JSON:', error);
            res.status(500).send('Erro ao processar o JSON');
        }
    });
});


app.get('/salve/:token', (req, res) => {
    const token = req.params.token;
    const { date, hours } = req.body;

    if (!token || !date || !hours) {
        return res.status(400).send('Dados inválidos.');
    }

    fs.readFile('./section.json', 'utf8', (err, data) => {
        if (err) {
            console.error('Erro ao ler o arquivo:', err);
            return res.status(500).send('Erro ao ler o arquivo');
        }

        try {
            const section = JSON.parse(data);

            section.tokens.push({
                token,
                info: {
                    date,
                    hours
                }
            });

            fs.writeFile('./section.json', JSON.stringify(section), (err) => {
                if (err) {
                    console.error('Erro ao escrever o arquivo:', err);
                    return res.status(500).send('Erro ao escrever o arquivo');
                }
                res.send('Dados salvos com sucesso!');
            });
        } catch (error) {
            console.error('Erro ao fazer parse do JSON:', error);
            res.status(500).send('Erro ao processar o JSON');
        }
    });
});