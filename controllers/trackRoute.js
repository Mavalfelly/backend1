const express = require('express');
const router = express.Router();
const Track = require('../models/tracks')


router.post('/', async (req,res) =>{
    try{
        const {title, artist} = req.body;
        const newTrack = await Track.create({title, artist});
        res.status(201).json(newTrack)
    }catch (err){
        res.status(500).json(err)
    }
})



module.exports = router;