const express = require('express');
const router = express.Router();

const sub = require('../models/subjects');

router.get('/', async (req, res)=>{
    const subs = await sub.find();
    console.log(subs);
    res.render('index' , {
        subs
    });
});

router.post('/add', async (req, res) =>{
    const subject = new sub(req.body);
    await subject.save();

    res.redirect('/');
});

router.get('/update/:id', async (req, res) =>{
    const { id } = req.params;
    const ed = await sub.findById(id);
    res.render('update', {
        ed
    });
});

router.post('/edit/:id', async (req, res) => {
    const { id } = req.params;
    await sub.update({_id: id}, req.body);
    res.redirect('/');
});

router.get('/delete/:id', async (req, res) => {
    const { id } = req.params;
    await sub.remove({_id: id})

    res.redirect('/');
});

module.exports = router;