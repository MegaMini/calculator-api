const crypto = require('crypto');

async function generateApiKey() {
     return new Promise((resolve, reject) => {
          crypto.randomBytes(16, (err, buffer) => {
               if (err) {
                    reject(err);
               } else {
                    resolve(buffer.toString('hex'));
               }
          });
     });
}

function verifyApiKey(apiKeys, apiKey) {
     return apiKeys.has(apiKey);
}

module.exports = { generateApiKey, verifyApiKey };