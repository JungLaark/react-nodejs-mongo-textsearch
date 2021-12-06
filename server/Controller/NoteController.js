const noteService = require('../Service/NoteService');

/**Note 조회 */
exports.getNote = async (req, res) => {

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

        return res.status(200).json({status: 200, data: resultData, message: 'read success'});
        //여기에서 data: req.result 이거였나 암튼 return 되는 데이터는 resultData 인데 
        //왜 저걸 저렇게 줬을까. 아침에 다시 출근해서 보니 보이네 
        
    }catch(err){
        console.log('NoteController/getNote ERROR : ' + err);
        return res.status(500).json(err);
    }
};

/**Note 수정 */
exports.updateNote = async (req, res, next) => {
    //ObjectID 를 받아와서 수정한다. 
    const {objectId, markUp, indexing} = req.body;

    console.log('NoteController/updateNote objectId : ' + objectId);
    console.log('NoteController/updateNote markUp : ' + markUp);
    console.log('NoteController/updateNote indexing : ' + indexing);

    try{
        let result = await noteService.updateNote(objectId, markUp, indexing);
        console.log('NoteController/updateNote update result : ' + result);

        return res.status(200).json({status: 200, data: result, message: 'UPDATE SUCCESS!'});
    }catch(err){
        console.log('NoteController/updateNote ERROR : ' + err);
        return res.status(500).json(err);
    }

};

/**Note 추가 */
exports.insertNote = async (req, res, next) => {
    
    let {userId, noteIndex, markUp, indexing} = req.body; 

    console.log('userId : ' + userId);
    console.log('noteIndex : ' + noteIndex);

    if(!req.query){
        res.status(400).send({message: '전송할 값을 확인하세요'});
        return;
    }

    try{

        let returnValue = await noteService.insertNote(userId, noteIndex, markUp, indexing);
        return res.status(200).json({status: 200, data: returnValue, message: 'Insert SUCCESS'});

    }catch(err){
        console.log('NoteController/insertNote ERROR : ' + err);
        return res.status(500).json(err);
    }
};

/**Note 삭제 */
exports.deleteNote = async (req, res, next) => {

    let {objectId} = req.body;

    console.log('NoteController/deleteNote _id : ' + objectId);

    if(!req.query){
        res.status(400).send({message: '전송할 값을 확인하세요'});
        return;
    }

    try{
        let result = await noteService.deleteNote(objectId);
        console.log('NoteController/deleteNote result : ' + result);

        return res.status(200).json({status: 200, data: result, message: 'DELETE SUCCESS!'});
    }catch(err){
        console.log('NoteController/deleteNote ERROR : ' + err);
        return res.status(500).json(err);
    }

};