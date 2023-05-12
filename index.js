const express = require('express');
const rateLimit = require('express-rate-limit');
const morgan = require('morgan');
const helmet = require('helmet');
const { log } = require('./utils/logger');
const { generateApiKey, verifyApiKey } = require('./utils/functions');
const fs = require('fs');
const path = require('path');
require('dotenv/config');

const app = express();
const filePath = path.join(__dirname, 'apiKeys.json');

rateLimit({ windowMs: 60 * 1000, max: 100 });
app.use(morgan('dev'));
app.use(helmet());
app.use(express.json());

app.get('/admin/apikey/:type/:ownerkey', async (req, res) => {
     const ownkey = req.params.ownerkey, type = req.params.type;
     if (ownkey !== process.env.ADMINPASS) {
          res.status(401).json({ error: 'Unauthorized' });
          return;
     }
     const generatedKey = await generateApiKey();
     if (type === "create") {
          fs.readFile(filePath, async (err, data) => {
               if (err) {
                    if (err.code === 'ENOENT') {
                         const jsonData = { apikeys: [] };
                         fs.writeFile(filePath, JSON.stringify(jsonData), (err) => {
                              if (err) throw err;
                              console.log('apiKeys.json file created.');
                         });
                    } else {
                         throw err;
                    }
               } else {
                    const data = await fs.promises.readFile(filePath);
                    const jsonData = JSON.parse(data);
                    jsonData.apikeys.push({ key: generatedKey });
                    await fs.promises.writeFile(filePath, JSON.stringify(jsonData));
                    console.log("New API Key Generated: " + generatedKey);
               }
          });
     }
     return res.json({ "result": generatedKey });
})

// Addition - Toplama
app.get('/add/:num1/:num2', (req, res) => {
     const num1 = parseInt(req.params.num1), num2 = parseInt(req.params.num2);
     console.log(apiKeys.has(req.headers['x-api-key']), req.headers['x-api-key'])
     if (!req.headers['x-api-key'] ) {
          res.status(401).json({ error: 'Unauthorized' });
          return;
     }
     return res.json({result: (num1 + num2).toString()})
});

// Substraction - Çıkarma
app.get('/subtract/:num1/:num2', (req, res) => {
     const num1 = parseInt(req.params.num1), num2 = parseInt(req.params.num2);
     if (!apiKeys.has(req.headers['x-api-key'])) {
          res.status(401).json({ error: 'Unauthorized' });
          return;
     }
     return res.json({result: (num1 - num2).toString()})
});

// Multiplication - Çarpma
app.get('/multiply/:num1/:num2', (req, res) => {
     const num1 = parseInt(req.params.num1), num2 = parseInt(req.params.num2);
     if (!apiKeys.has(req.headers['x-api-key'])) {
          res.status(401).json({ error: 'Unauthorized' });
          return;
     }
     return res.json({result: (num1 * num2).toString()})
});

// Division - Bölme
app.get('/divide/:num1/:num2', (req, res) => {
     const num1 = parseInt(req.params.num1), num2 = parseInt(req.params.num2);
     if (!apiKeys.has(req.headers['x-api-key'])) {
          res.status(401).json({ error: 'Unauthorized' });
          return;
     }    
     return res.json({result: (num1 / num2).toString()})
});


app.listen(process.env.PORT, () => { log(`Listening on ${process.env.PORT}`, "ready"); });
