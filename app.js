const express = require('express');
const os = require('os');
const path = require('path');

const app = express();
const port = 3000;

const hostname = os.hostname();

// Servir arquivos estáticos (CSS)
app.use(express.static(__dirname));

app.get('/', (req, res) => {
  res.send(`
    <html>
      <head>
        <title>App Teste</title>
        <link rel="stylesheet" href="/style.css">
      </head>
      <body>
        <div class="container">
          <h1>Test Page.</h1>
          <p><strong>Server:</strong> ${hostname}</p>
        </div>
      </body>
    </html>
  `);
});

app.listen(port, () => {
  console.log(`App rodando na porta ${port}`);
});