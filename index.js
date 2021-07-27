function quote(){
    let quote = require('./quotes.json');
    let text = ''
    let finished = false

    quote.forEach(q => {
        if(finished === false){
            text = text + ' ' + q[Math.floor(Math.random() * (q.length - 1))]
            if(text.endsWith('.'))finished = true
        }
    })

    if(!text.endsWith('.')){
        text = text + '.'
    }

    return text;
}

const express = require('express');
const app = express();

app.get('/', (req, res) => res.sendFile(__dirname + '/home.html'))
app.get('/api/v1/quote', (req, res) => res.send(quote()));

app.listen(80);