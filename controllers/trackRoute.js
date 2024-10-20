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
});

router.get('/', async (req,res) => {
    try{
        const tracks = await Track.find({});
        res.status(200).json(tracks);
    }catch (err){
        res.status(500).json(err)
    }
});

router.get('/:trackId', async (req,res) => {
    try{
        const tracks = await Track.findById(req.params.trackId);
        res.status(200).json(tracks);
    }catch (err){
        res.status(500).json(err)
    }
});

router.put('/:trackId', async (req,res) => {
    try{
        const {title, artist} = req.body;
        const tracks = await Track.findByIdAndUpdate(req.params.trackId, {title, artist});
        res.status(200).json(tracks);
    }catch (err){
        res.status(500).json(err)
    }
});

router.delete('/:trackId', async (req,res) => {
    try{
        const tracks = await Track.findByIdAndDelete(req.params.trackId);
        res.status(200).json(tracks);
    }catch (err){
        res.status(500).json(err)
    }
});

module.exports = router;