const express = require('express');
const tpb = require('thepiratebay');

const router = express.Router();

router.get('/search/:query', (req, res) => {
    const {query} = req.params;
    tpb.search(query, { category: 200 }).then(results => {
        const torrents = results.map(r => {
            return r.name.replace(/\./g, ' ');
        });

        res.send(torrents);
    }).catch(error => {
        res.status(500).send(error);
    });
});


module.exports = router;
