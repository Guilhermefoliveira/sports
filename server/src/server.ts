    import express from 'express';

    const app = express();
    // HTTP METHODS - GET, POST, PUT, DELETE 
    // API RESTful // HTTP CODES - 200, 201, 400, 404, 500
    app.get('/games', (req, res) => {
        return res.json([]);
    });

    app.post('/ads', (req, res) => {
        return res.status(400).json([]);
    });

    app.get('/games/:id/ads', (req, res) => {

        //const gameId = req.params.id;
        

    return res.json([
    { id: 1, name: 'Ad 1' },
    { id: 2, name: 'Ad 2' },
    { id: 3, name: 'Ad 3' },
    { id: 4, name: 'Ad 4' },
    { id: 5, name: 'Ad 5' },
    ])
    });

    app.get('/ads/:id/discord', (req, res) => {
    //const gameId = req.params.id;

    return res.json([
    ])
    });

    app.listen(3333);
