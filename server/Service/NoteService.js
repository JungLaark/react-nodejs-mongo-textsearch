const noteModel = require('../Model/Note');

exports.getNote = async (text) => {
//Search Document 
    console.log('NoteService/getNote : ' + text);
//요까지 와따 
//여기서 이제 문서 select 할 수 있게 함 

    try{
        let resultData;
        //noteModel.createIndexes({indexing: 'text'})
        noteModel.createIndexes();

        const result = await noteModel
            .find({$text: {$search: `"\"${text}\""`}})
            // .then((data) => {
            //     console.log('NoteService/getNote data : ' + data);

            //     return data;
            // })
            // .catch((err) => {console.log(err)});
            return result;


    }catch(err){
        console.log('NoteService/getNote ERROR : ' + err);
        return err;
    }
};

exports.updateNote = async (req, res, next) => {

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

        await noteModel.create(insertData);
        console.log('INSERT SUCCESS');


    }catch(err){
        console.log('NoteService/insertNote ERROR : ' + err);
        return res.status(500).json(err);
    }
    
};

exports.deleteNote = async (req, res, next) => {

};