var router = require("express").Router();
var notes = require("../db/notes");

router.get("/notes", function(req, res){
    notes.getNotes()
    .then(notes => res.json(notes))
    .catch(err => res.status(500).json(err));
})
router.post("/notes", function(req, res){
    notes.addNotes(req.body)
    .then(notes => res.json(notes))
    .catch(err => res.status(500).json(err));
})
router.post("/notes", function(req, res){
    notes.addNotes(req.body)
    .then(notes => res.json(notes))
    .catch(err => res.status(500).json(err));
})