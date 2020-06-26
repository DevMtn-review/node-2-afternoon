const express = require('express');
const msgController = require('./Controllers/Messages_controller');

const app = express();

app.use(express.json());
app.use(express.static(__dirname + '/..public/build'));

app.get('/api/messages', msgController.read);
app.post('/api/messages', msgController.create);
app.put('/api/messages/:id', msgController.update);
app.delete('/api/messages/:id', msgController.delete);

const port = 3001;
app.listen(port, () => {console.log(`listening on port ${port}`)});