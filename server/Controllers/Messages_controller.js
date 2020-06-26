let messages = [];
let messageId = 0;

module.exports = {
    create: (req, res) => {
        const newMessage = {id: messageId, text: req.body.text, time: req.body.time};
        messages.push(newMessage);
        messageId++;
        res.status(200).send(messages);
    },

    read: (req, res) => {
        res.status(200).send(messages);
    },

    update: (req, res) => {
        const found = messages.find(e => e.id === +req.params.id);

        if(!found) {
            res.status(500).send(`no messages with id ${+req.params.id}`);
        } else {
            messages.map(e => {
                if(e.id === +req.params.id) {
                    e.text = req.body.text;
                    res.status(200).send(messages);
                }
            })
        }
        
    },
    
    delete: (req, res) => {
        const found = messages.find(e => e.id === +req.params.id);

        if(!found) {
            res.status(500).send(`no messages with id ${+req.params.id}`);
        } else {
            messages.map((e, i) => {
                if(e.id === +req.params.id) {
                    messages.splice(i, 1);
                    res.status(200).send(messages);
                };
            })
        }
    }
}