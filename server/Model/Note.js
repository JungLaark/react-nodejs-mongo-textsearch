const mongoose = require('mongoose');

const NoteSchema = new mongoose.Schema({
     userId : {
         type: String,
         required: true
     },
     noteIndex : {
        type: Number,
        required: false
    },
        markUp : {
        type: String,
        required: false
    },

    indexing : {
        type: String,
        required: false,
        //index: true
    }
    
},{timestamps: true});

NoteSchema.index({indexing: 'text'})

module.exports = mongoose.model('Note', NoteSchema);