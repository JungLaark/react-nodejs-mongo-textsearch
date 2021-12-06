const noteModel = require('../Model/Note');

exports.getNote = async (text) => {
    console.log('NoteService/getNote : ' + text);

    try{
        let resultData;
        //noteModel.createIndexes({indexing: 'text'})
        noteModel.createIndexes();

        const result = await noteModel
            .find({$text: {$search: `"\"${text}\""`}})
            return result;

    }catch(err){
        console.log('NoteService/getNote ERROR : ' + err);
        return err;
    }
};

/**Update */
exports.updateNote = async (objectId, markUp, indexing) => {

    try{
        const result = noteModel.findByIdAndUpdate(
            objectId, { 'markUp' : markUp,
                        'indexing' : indexing}
        );

        return result;
    }catch(err){
        console.log('NoteService/updateNote ERROR : ' + err);
    }

};

exports.insertNote = async (userId, noteIndex, markUp, indexing) => {
    try{

        let insertData = new noteModel({
                userId : userId,
                noteIndex: noteIndex,
                markUp : markUp,
                indexing : indexing
            }
        ); 

        const returnValue = await noteModel.create(insertData);
        console.log('INSERT SUCCESS  : ' + returnValue);
        
        return returnValue;
    }catch(err){
        console.log('NoteService/insertNote ERROR : ' + err);
        return res.status(500).json(err);
    }
};

exports.deleteNote = async (objectId) => {
    
    try{
        const result = noteModel.deleteOne(
            {_id: objectId}
        );

        return result;
    }catch(err){
        console.log('NoteService/DELETE ERROR : ' + err);
    }
};