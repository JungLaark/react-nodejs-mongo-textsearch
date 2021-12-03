const noteService = require('../Service/NoteService');

exports.getNote = async (req, res, next) => {

    console.log('NoteController getNote');
    console.log(req.query.text);
    let {text} = req.query;
    
    if(!text){
        return;
    }

    try{
        let resultData = await noteService.getNote(text);

        console.log('NoteController/getNote : ' + resultData);
        //return res.status(200).send({message: returnValue});

        return res.status(200).json({status: 200, data: res.data, message: 'read success'});
        
    }catch(err){
        console.log('NoteController/getNote ERROR : ' + err);
        return res.status(500).json(err);
    }
};

exports.updateNote = async (req, res, next) => {

};

exports.insertNote = async (req, res, next) => {
    
    let {userId, noteIndex, markUp, indexing} = req.body; 

    console.log('userId : ' + userId);
    console.log('noteIndex : ' + noteIndex);
    //console.log('contents' + contents);

    if(!req.query){
        res.status(400).send({message: '전송할 값을 확인하세요'});
        return;
    }

    try{

        let returnValue = await noteService.insertNote(userId, noteIndex, markUp, indexing);
        return res.send('Insert Success!!!');

    }catch(err){
        console.log('NoteController/insertNote ERROR : ' + err);
        return res.status(500).json(err);
    }
};

exports.deleteNote = async (req, res, next) => {

};