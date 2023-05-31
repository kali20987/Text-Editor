const path = require('path');

module.exports = (app) =>
  app.get('/', (req, res) =>
    //res.sendFile(path.join(__dirname, '/index.html'))
    res.sendFile("/Users/jadeali/bootcamp/Text-Editor/client/index.html")
  );
